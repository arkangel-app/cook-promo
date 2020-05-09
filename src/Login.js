import React, { Component } from "react";
import { connect } from 'react-redux';
import { Form, Input, Button, Label,Alert  } from 'antd';
import RestClient from './network/restClient';
import Registro from './Registro/Registro';
import actions from './redux/auth/actions';
import TagManager from 'react-gtm-module'

const {login} = actions;

class LoginComponent extends Component {

  constructor(props){
    super(props);
    this.state={
      loading:false,
      error:undefined
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

  handleSubmit = (e)=>{
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({loading:true,error:undefined});
        let postParams = {
          mail: values.email,
          password:values.password
        }

        RestClient.login(postParams).then(user=>{
          this.props.login(user.data.user);
        }).catch(error=>{
          this.setState({loading:false,error:error.message});
        })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form className="login-form" onSubmit={this.handleSubmit} hideRequiredMark={true} >
        {this.state.error && <Alert message={this.state.error} type="error" />}

         <Form.Item
          label="Mail:"
        >
          {getFieldDecorator('email', {
            rules: [
              {type: 'email', message: 'El correo no es válido',},
              {required: true, message: 'Por favor ingresa tu correo',}
            ],
          })(
            <Input className="success" />
          )}
        </Form.Item>

        <Form.Item
           label="Contraseña:"
         >
         {getFieldDecorator('password', {
           rules: [{ required: true, message: 'Por favor ingresa tu contraseña' }],
          })(
             <Input.Password  className="success" />
           )}
         </Form.Item>
          <div className="centrado">
          <Button loading={this.state.loading} className="btn btn-lg boton-recetas animated rubberBand" htmlType="submit">INGRESAR</Button>
          </div>

        </Form>
    );
  }
}
const WrappedLoginComponent = Form.create({ name: 'login_form' })(LoginComponent);
//export default WrappedLoginComponent;

export default connect(
  state => ({
    profile: state.Auth.profile,
  }),
  {login}
)(WrappedLoginComponent);
