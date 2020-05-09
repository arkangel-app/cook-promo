import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  Redirect
} from "react-router-dom";

import step from '../images/step.png';
import brandStep from '../images/brand-step.png';
import stepActive from '../images/step-active.png';
import dots from '../images/dots.png';
import linea from '../images/linea.png';
import top from '../images/top.png';
import right from '../images/right.png';
import cod from '../images/cod.png';
import { Form, Input, Modal, Button, Label,Alert,message,Select,Checkbox,DatePicke } from 'antd';
import ReactDOM from 'react-dom';
import RestClient from '../network/restClient';
import FotoComponent from './Foto';
import MensajeComponent from './Mensaje'
import GanadorComponent from './Ganador'
import TagManager from 'react-gtm-module'




class CodigoComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error:undefined,
      loadingCodigo: false,
      vCargarCodigo: true,
      vUploadPhoto: false,
      vMessage: false,
      vGanador: false,
      premio: null,
      activateStep2: stepActive,
      activateStep3: step,
      activateStep4: step,
      file: '',
      imagePreviewUrl: '',
    }

  }
  componentDidMount(){
    const tagManagerArgs = {
      gtmId: 'GTM-KXGDFZT',
      dataLayer:{
        event: 'pageview'
      }
    }
    TagManager.initialize(tagManagerArgs)
  }

  seeUploadPhoto=()=>{
    this.setState({
      vCargarCodigo: false,
      vUploadPhoto: true,
      activateStep3: stepActive,
      activateStep2: step,
      });
  }

  seeMessage=()=>{
    this.setState({
      vCargarCodigo: false,
      vUploadPhoto: false,
      vMessage: true,
      activateStep4: stepActive
      });
  }

  handleSubmit = (e)=>{
    e.preventDefault();
  }



  handleImageChange(e) {
   e.preventDefault();

   let reader = new FileReader();
   let file = e.target.files[0];

   reader.onloadend = () => {
     this.setState({
       file: file,
       imagePreviewUrl: reader.result
     });
   }

   reader.readAsDataURL(file)
 }

 handleCargarCodigo = (e)=> {
  e.preventDefault();
  this.props.form.validateFields(['codigo'],(err, values) => {
     if (!err) {
       //this.seeUploadPhoto()
       this.setState({loadingCodigo:true,error:undefined});
       RestClient.ingresarCodigo({codigo:values.codigo}).then(ingresado=>{
        console.log(ingresado);
        console.log('Premio:');
        console.log(ingresado.data.premio);
        let premio=null;
         if(ingresado.data.premio!=null){
           premio= ingresado.data.premio;
         }

          this.setState({loadingCodigo:false,vCargarCodigo:false,vUploadPhoto:true,
           activateStep2: step,
           activateStep3: stepActive,
           premio:premio
         });

       }).catch(error=>{
         this.setState({loadingCodigo:false,error:error.message});
       })
     }
   });
  }

  fotoHandler = ()=>{
    //foto subida
    if(this.state.premio==null){
      this.setState({vUploadPhoto:false,vMessage:true,
      activateStep4: stepActive,
      activateStep3: step})
    } else{
      this.setState({vUploadPhoto:false,vGanador:true,
      activateStep4: stepActive,
      activateStep3: step})
    }

  }


  render() {
    const { token } = this.props.profile?this.props.profile:{};
    if (token==null || token==undefined || token==undefined) {
      return <Redirect to={'/participar'} />;
    }

    const { getFieldDecorator } = this.props.form;


    const { vCargarCodigo, vUploadPhoto, vMessage, activateStep2, activateStep3, activateStep4 } = this.state;
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
        $imagePreview = (<img id='img-upload' src={imagePreviewUrl} />);
      }
    return (
      <div>
        <div>
          <h2 className="white-tit py-3">PARTICIPÁ DE LA PROMO</h2>
          <div className="steps clearfix">
              <ul role="tablist">
                <li role="tablist" className="">
                    <img className="mini-brand-img" src={brandStep}/>
                    <img className="dots p" src={dots}/>
                </li>
                <li role="tablist" className="">
                    <span className="step active">1</span>
                    <img id="s1" className="step-img" src={step}/>
                  <img className="dots p" src={dots}/>
                </li>
                <li role="tablist" className="">
                    <span className="step">2</span>
                    <img id="s2" className="step-img" src={this.state.activateStep2}/>
                  <img className="dots p" src={dots}/>
                </li>
                <li role="tablist" className="">
                    <span className="step">3</span>
                    <img id="s3" className="step-img" src={this.state.activateStep3}/>
                  <img className="dots p" src={dots}/>
                </li>
                <li role="tablist" className="">
                    <span className="step s4">4</span>
                    <img id="s4" className="step-img" src={this.state.activateStep4}/>
                </li>
              </ul>
          </div>
        </div>

      <div className="container wizard">
    <img id="m-top" className="mancha" src={top}/>
    <img id="m-right" className="mancha" src={right}/>
    <img id="m-bottom" className="mancha" src={right}/>
    <img id="m-left" className="mancha" src={right}/>

      {this.state.vCargarCodigo &&  <div className="row row-center px-5 py-5" id="sheet-cargarCodigo">
        <div className="row">

            <Form onSubmit={this.handleCargarCodigo} hideRequiredMark={true}>
              <p className="resp txt-dato titCod">
                  CARGAR CÓDIGO
              </p>

              {this.state.error && <Alert message={this.state.error} type="error" />}

              <div className="codBox">
              <p className="codText">Encontrá el código <br></br> al dorso del pack</p>
              <img className="codImg" src={cod}/>
              </div>

              <Form.Item
               label="Ingresa el código de tu pack:"
             >
               {getFieldDecorator('codigo', {
                 rules: [
                   {required: true, message: 'Por favor ingresa el código de tu pack',}
                 ],
               })(
                 <Input className="success" />
               )}
             </Form.Item>
             <div className="centrado">
             <Button loading={this.state.loadingCodigo} htmlType="submit" className="btn btn-lg boton-recetas animated rubberBand">CARGAR</Button>
             </div>
           </Form>



        </div>
      </div>}

      {this.state.vUploadPhoto &&
        <div className="row row-center py-5" id="sheet-subirFoto">
          <FotoComponent fotoHandler={this.fotoHandler}/>
        </div>}

      {this.state.vMessage &&
        <div className="row row-center" id="sheet-participando">

          <MensajeComponent/>
        </div>}

      {this.state.vGanador &&
          <div className="row row-center" id="sheet-ganador">

            <GanadorComponent premio={this.state.premio}/>
          </div>}

      </div>
    </div>
  );
  }
}
const CodigoWrapped = Form.create({ name: 'codigo' })(CodigoComponent);
export default connect(
  state => ({
    profile: state.Auth.profile,
  }),
  {}
)(CodigoWrapped);
