import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  withRouter
} from "react-router-dom";
import { Form, Input, Modal, Button, Label,Alert,message,Upload,Icon,Progress } from 'antd';
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module'


import RestClient from '../network/restClient';





class FotoComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error:undefined,
      loading: false,
      file: '',
      imagePreviewUrl: undefined,
      progreso:0
    }

  }
  componentDidMount(){
    this.props.history.push("/participar/codigo/subirfoto");
    const tagManagerArgs = {
      gtmId: 'GTM-KXGDFZT',
      dataLayer:{
        event: 'pageview'
      }
    }
    TagManager.initialize(tagManagerArgs)
  }


  handleUploadSubmit = (e)=>{
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
       if (!err) {
         let fotoObj = {
           image: values.image.file.name,
           receta: values.receta
         }
         this.setState({loading:true,error:undefined});
         RestClient.preSignedUrl({filename:fotoObj.image}).then(urlObj=>{
           let url = urlObj.data.url;
           const formData = new FormData();
           const file = this.state.fileList[0];
           formData.append('file', file);
           this.uploadFileToS3(formData,url,file.name,file,fotoObj);
         }).catch(error=>{
           this.setState({loading:false,error:error.message});
         })
       }
     });

  }

  uploadFileToS3(postData,url,filename,file,postParams){
      var xhr = new XMLHttpRequest();
      var secuencia=0;
      xhr.open("PUT", url);
      xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
          if(xhr.status === 200 || xhr.status === 204){
            this.saveRecerta(postParams);
          }else{
            this.setState({loading:false,error:"Error al subir la foto en el servidor"});
          }
       }
      }.bind(this);
      xhr.upload.onprogress = function(evt){
        var percentComplete = (evt.loaded / evt.total) * 100;
        this.setState({progreso:parseInt(percentComplete)});
      }.bind(this);
    xhr.send(file);
  }

  saveRecerta = (params)=>{
    RestClient.guardarReceta(params).then(guardado=>{
      this.setState({loading:false,error:undefined});
      this.props.fotoHandler()
    }).catch(error=>{
        this.setState({loading:false,error:error.message});
    })
  }

 getBase64 = (img, callback)=> {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  beforeUpload = (file) => {

    const isValid = (file.type === 'image/jpeg' || file.type === 'image/png');
    if (!isValid) {
      message.error('Solo se puede subir imágenes');
    }
    const isLt2M = file.size / 1024 / 1024 < 10;
    if (!isLt2M) {
      message.error('La imagen no puede pesar más de 10 mb');
    }
    if (isValid && isLt2M){
      this.getBase64(file, (imageUrl) => {
        file.thumbUrl = imageUrl;
        this.setState({fileList: [file],
          imagePreviewUrl: imageUrl
        });
      });
    }
    return false;
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="container fotoContainer">
        <div className="row row-center">

        <div className="col-lg-8">
            <p className="resp txt-dato strech1">
                SUBÍ TU CREACIÓN OREO
            </p>
            <p className="resp txt-dato white strech2">
                y duplicá tus chances!
            </p>
            <Form onSubmit={this.handleUploadSubmit}>
            <div className="col-md-8 caja-b pt-3">
                <div className="form-group caja-img">
                    <div className="input-group borde-blanco">
                        <span className="input-group-btn left-browser">
                          <Form.Item>
                           {getFieldDecorator('image', {
                             rules: [
                               {required: true, message: 'Es necesario subir una imagen',}
                             ],
                           })(
                             <Upload
                               onRemove={() => { this.setState({fileList:[],imagePreviewUrl:undefined})}}
                               beforeUpload = {this.beforeUpload}
                               fileList = {this.state.fileList}
                               >
                               {this.state.imagePreviewUrl?
                                 <img id='img-upload' src={this.state.imagePreviewUrl} />
                                 :
                                 <Button className="btn btn-lg boton-recetas upl-btn animated rubberBand btn-foto">
                                   <Icon type="upload" /> Seleccionar imagen…
                                 </Button>
                               }
                               </Upload>
                           )}
                         </Form.Item>

                        </span>
                    </div>
                  </div>

            </div>


            <div className="col form-group py-3 receta-n">
              <Form.Item label="NOMBRE DE LA RECETA">
                {getFieldDecorator('receta', {
                  rules: [
                    {required: true, message: 'Es necesario darle un nombre a la receta',}
                  ],
                })(
                  <Input size="large" placeholder="Nombre de la receta"/>
                )}
              </Form.Item>
            </div>

              <div className="centrado pt-3 progressUpload">
                <Button loading={this.state.loading} htmlType="submit" className="btn btn-lg boton-recetas upl-btn animated rubberBand">SUBIR FOTO</Button>
                {this.state.loading && <div className="contenedorProgress"><Progress percent={this.state.progreso} /></div>}

              </div>
            </Form>
              <div className="centrado pt-3">
                <Button  onClick={()=> this.props.fotoHandler()} className="btn btn-lg boton-recetas omitir-btn">OMITIR</Button>
              </div>
        </div>
      </div>
      </div>
    );
  }
}
const FotoWrapped = Form.create({ name: 'foto' })(FotoComponent);
const FotoRouter =  withRouter(FotoWrapped);
export default connect(
  state => ({
    profile: state.Auth.profile,
  }),
  {}
)(FotoRouter);
