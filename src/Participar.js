import React, { Component } from "react";
import {
  Link,Redirect
} from "react-router-dom";
import { connect } from 'react-redux';
import step from './images/step.png';
import brandStep from './images/brand-step.png';
import stepActive from './images/step-active.png';
import dots from './images/dots.png';
import linea from './images/linea.png';
import top from './images/top.png';
import right from './images/right.png';
import { Form, Input, Modal, Button, Label,Alert,message } from 'antd';
import ReactDOM from 'react-dom';
import RegistroForm from './Registro/RegistroForm'
import LoginComponent from './Login.js';
import RestClient from './network/restClient';
import TagManager from 'react-gtm-module'


class Participar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loadingRecover: false,
      visible: false,
      vLogin: true,
      errorRecover:undefined,
      activateStep2: step,
      activateStep3: step,
      activateStep4: step,
      reg:''

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



  showModal = () => {
    this.props.form.setFieldsValue({emailRecover:''})
    this.setState({
      visible: true,
      errorRecover:undefined
    });
  }

  handleOkRecover = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({loadingRecover:true,errorRecover:undefined});
        let postParams = {
          mail: values.emailRecover
        }
        RestClient.recoverPassword(postParams).then(user=>{
          message.success(user.data.message,10);
          this.setState({loadingRecover:false,visible:false});
        }).catch(error=>{
          this.setState({loadingRecover:false,errorRecover:error.message});
        })
      }
    });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }



  render() {
    const { token } = this.props.profile?this.props.profile:{};
    if (token) {
      return <Redirect to={'/participar/codigo'} />;
    }

    const { getFieldDecorator } = this.props.form;

    const config = {
    rules: [{ type: 'object', required: true, message: 'Selecciona una fecha' }],
    };

    const { visible, vRegister, vLogin, vCargarCodigo, vUploadPhoto, vMessage, activateStep2, activateStep3, activateStep4 } = this.state;
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
        $imagePreview = (<img id='img-upload' src={imagePreviewUrl} />);
      }
    let {reg} = this.state
    let $registerRender = null
    if(reg){
     $registerRender = (<RegistroForm></RegistroForm>)
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
                              <img id="s1" className="step-img" src={stepActive}/>
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
      <div className="row row-center" id="sheet-login" style={{display: this.state.vLogin ? 'flex' : 'none' }}>
          <div className="col-lg-5 col-xs-12">
              <div className="left yellow-letter">
                  <p className="resp txt-dato">
                      INICIAR SESIÓN
                  </p>

                  <LoginComponent />
                  <div className="centrado">
                    <Button className="forgot" onClick={this.showModal}>
                      Olvidaste tu contraseña
                    </Button>
                  </div>
              </div>
          </div>
          <div className="col-lg-1 col-line">
            <div className="middle yellow-line">
              <img className="img-line-contacto" src={linea}/>
            </div>
          </div>
          <div className="col-lg-5 col-xs-12 bloque-txt rwd-pt">
              <div className="row row-center">
                  <p className="resp txt-dato">
                      AÚN NO <br></br>ME REGISTRÉ
                  </p>
              </div>
              <div className="row row-center">
                  <Link to={'/participar/registro'} className="btn btn-lg boton-recetas animated rubberBand">REGISTRARME</Link>
              </div>
          </div>
        </div>
          {$registerRender}
    </div>
        <Modal
            visible={visible}
            title="Olvidé mi contraseña"
            centered
            onCancel={this.handleCancel}
            footer={null}
          >
          <div className="centrado">
          <div>Te enviaremos un mensaje a tu correo</div>
            <Form className="login-form" onSubmit={this.handleOkRecover} hideRequiredMark={true} >
              {this.state.errorRecover && <Alert message={this.state.errorRecover} type="error" />}
              <Form.Item >
                {getFieldDecorator('emailRecover', {
                  rules: [
                    {type: 'email', message: 'El correo no es válido',},
                    {required: true, message: 'Por favor ingresa tu correo',}
                  ],
                })(
                  <Input className="success" placeholder="Escribe tu mail"/>
                )}
              </Form.Item>
              <Form.Item>
              <Button
                loading={this.state.loadingRecover}
                htmlType="submit"
                className="btn btn-lg boton-recetas modal-btn"
                size="large">
                Enviar
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>


  </div>
);
  }
}
const WrappedParticipar = Form.create({ name: 'recover_pass' })(Participar);

export default connect(
  state => ({
    profile: state.Auth.profile,
  }),
  {}
)(WrappedParticipar);
