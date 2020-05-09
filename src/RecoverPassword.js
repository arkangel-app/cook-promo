import React, { Component } from "react";
import {
  Redirect
} from "react-router-dom";
import top from './images/top.png';
import right from './images/right.png';
import { Form, Input, Modal, Button, Label, Alert, notification } from 'antd';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import RestClient from './network/restClient'
import queryString from 'query-string'

class RecoverPassword extends Component {


  state = {
    confirmDirty: false,
    params:{},
    loading:false,
    error:undefined,
    recover:false
  };

  componentDidMount(){
  let url = this.props.location.search;
  this.state.params = queryString.parse(url);
   console.log(this.state.params.tok);
  }

  routeLogin() {
    window.location = '/#participar';
  }

  handleSubmit = (e) => {
  e.preventDefault();
  this.props.form.validateFieldsAndScroll((err, values) => {
    if (!err) {
    //  window.location = '/#participar';
    let data = {password:values.password,token:this.state.params.tok}
    this.setState({error:undefined,loading:true});
    RestClient.changePassword(data).then(usuarioData=>{
      notification.success({
       message: 'Cambio de contraseña',
       description: 'Se realizó exitosamente el cambio de contraseña.',
     });
    this.setState({error:undefined,loading:true,recover:true});

    }).catch(error=>{
      this.setState({error:error.message,loading:false});

    })


    }
  });

}

handleConfirmBlur = (e) => {
  const value = e.target.value;
  this.setState({ confirmDirty: this.state.confirmDirty || !!value });
}

compareToFirstPassword = (rule, value, callback) => {
  const form = this.props.form;
  if (value && value !== form.getFieldValue('password')) {
    callback('Las contraseñas no son iguales');
  } else {
    callback();
  }
}

validateToNextPassword = (rule, value, callback) => {
  const form = this.props.form;
  if (value && this.state.confirmDirty) {
    form.validateFields(['confirm'], { force: true });
  }
  callback();
}


  render() {
    const { getFieldDecorator } = this.props.form;
    if(this.state.recover==true){
        return <Redirect to={'/'} />;
    }

    return (
        <div className="container wizard">
        <img id="m-top" className="mancha" src={top}/>
        <img id="m-right" className="mancha" src={right}/>
        <img id="m-bottom" className="mancha" src={right}/>
        <img id="m-left" className="mancha" src={right}/>
                <div className="row row-center" id="sheet-login">
                <div className="recover-box col">
                    <p className="resp txt-dato">
                        Cambiar contraseña
                    </p>
                    {this.state.error && <Alert message={this.state.error} type="error" />}

                      <Form onSubmit={this.handleSubmit} hideRequiredMark='true'>
                      <Form.Item
                       label="Nueva contraseña"
                     >
                       {getFieldDecorator('password', {
                         rules: [{
                           required: true, message: '10 dígitos letras y números',
                         }, {
                           validator: this.validateToNextPassword,
                         }],
                       })(
                         <Input type="password" />
                       )}
                     </Form.Item>
                     <Form.Item
                       label="Confirma la contraseña"
                     >
                       {getFieldDecorator('confirm', {
                         rules: [{
                           required: true, message: 'Por favor confirma tu contraseña',
                         }, {
                           validator: this.compareToFirstPassword,
                         }],
                       })(
                         <Input type="password" onBlur={this.handleConfirmBlur} />
                       )}
                     </Form.Item>

                        <div className="centrado">
                          <button loading={this.state.loading} className="btn btn-lg boton-recetas animated rubberBand" htmlType="submit" onClick={this.seeCargarCodigo}>Guardar</button>
                        </div>

                      </Form>
                </div>
                </div>


        </div>
    );
  }
}
const WrappedRecover = Form.create({ name: 'recover_form' })(RecoverPassword);
export default WrappedRecover;
//ReactDOM.render(<WrappedRecover />, document.getElementById('root'));
