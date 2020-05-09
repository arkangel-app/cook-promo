import React, { Component } from "react";
import step from '../images/step.png';
import brandStep from '../images/brand-step.png';
import stepActive from '../images/step-active.png';
import dots from '../images/dots.png';
import linea from '../images/linea.png';
import top from '../images/top.png';
import right from '../images/right.png';
import { Form, Input, Modal, Button, Label,Alert,message,Select,Checkbox,DatePicker } from 'antd';
import ReactDOM from 'react-dom';


import RestClient from '../network/restClient';
import RegistroForm from './RegistroForm';
import TagManager from 'react-gtm-module'

const Option = Select.Option;




class RegistroComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      vRegister: true,
      vCargarCodigo: false,
      vUploadPhoto: false,
      vMessage: false,
      activateStep2: step,
      activateStep3: step,
      activateStep4: step,
      file: '',
      imagePreviewUrl: ''
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
  
  seeCargarCodigo=()=>{
    this.setState({
      vRegister: false,
      vCargarCodigo: true,
      vMessage: false,
      activateStep2: stepActive,
      activateStep3: step,
      activateStep4: step
      });
  }

  seeUploadPhoto=()=>{
    this.setState({
      vRegister: false,
      vCargarCodigo: false,
      vUploadPhoto: true,
      activateStep3: stepActive,
      });
  }

  seeMessage=()=>{
    this.setState({
      vRegister: false,
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

 routeInicio() {
   window.location = '/';
 }



  render() {

    const { getFieldDecorator } = this.props.form;

    const config = {
    rules: [{ type: 'object', required: true, message: 'Selecciona una fecha' }],
    };

    const validateStrings = (rule, value, callback) => {
      if (!/^[a-z]*$/i.test(value)) {
        callback("Sólo letras");
      } else {
        callback();
      }
    };

    const { vRegister, vCargarCodigo, vUploadPhoto, vMessage, activateStep2, activateStep3, activateStep4 } = this.state;
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

      <div id="sheet-register" style={{display: this.state.vRegister ? 'block' : 'none' }}>
        <RegistroForm />
      </div>

      </div>
    </div>
  );
  }
}
const RegistroWrapped = Form.create({ name: 'registro' })(RegistroComponent);
export default RegistroWrapped;
