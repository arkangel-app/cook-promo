import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  Redirect,
  Link
} from "react-router-dom";
import { Form, Input, Modal, Button, Label,Alert,message,Select,Checkbox,DatePicker } from 'antd';
import ReactDOM from 'react-dom';

import actions from '../redux/auth/actions';

import RestClient from '../network/restClient';
import moment from 'moment';

const Option = Select.Option;
const {login} = actions;




class RegistroForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error:undefined,
      provincias:[]
    }
  }

  componentDidMount(){
  this.loadProvincias();
  }

  loadProvincias = () =>{

      RestClient.getProvincias().then(response=>{
        this.setState({provincias:response.data.provincias})
        console.log('ok');
        console.log(this.state.provincias);
      });

    }


  handleSubmit = (e)=>{
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if(values.instagram==null){
        values.instagram=' '
      }
      if (!err) {
        this.setState({loading:true,error:undefined});
        let registroObj = {...values,fecha_nacimiento: moment(values.fecha_nacimiento, "DD-MM-YYYY").format('YYYY-MM-DD')};
        RestClient.register(registroObj).then(usuarioData=>{
          this.setState({loading:false,error:undefined});
          this.props.login(usuarioData.data.user);
        }).catch(error=>{
          this.setState({loading:false,error:error.message});

        })
      }
    });
  }



  render() {
    const { token } = this.props.profile?this.props.profile:{};
    if (token) {
      return <Redirect to={'/participar/codigo'} />;
    }

    const dateFormat = 'DD/MM/YYYY';

    const { getFieldDecorator } = this.props.form;

    const config = {
    rules: [{ required: true, message: 'Selecciona una fecha' }],
    };

    const validateStrings = (rule, value, callback) => {
      if (!/^[a-zñÑáéíóúÁÉÍÓÚ ]+$/i.test(value)) {
        callback("Sólo letras");
      } else {
        callback();
      }
    };

    const validateNumbers = (rule, value, callback) => {
      if (!/^[0-9]*$/i.test(value)) {
        callback("Sólo números");
      } else {
        callback();
      }
    };

    const validateDNI = (rule, value, callback) => {
      if ((!/^[0-9]*$/i.test(value))||(value.length!=8)) {
        callback("El DNI es inválido");
      } else {
        callback();
      }
    };


    const validatePassword = (rule, value, callback) => {
      if ((!/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(value))||(value.length<10)) {
        callback("Password inválido");
      } else {
        callback();
      }
    };

    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <p className="resp txt-dato reg-tit">
              REGISTRATE
          </p>
          <div className="row">
            <div className="col col-md-6">
              <Form.Item
               label="Nombre:"
             >
               {getFieldDecorator('name', {
                 rules: [
                   {required: true, message: 'Por favor ingresa tu nombre'},
                   {validator: validateStrings}
                 ],
               })(
                 <Input className="success" />
               )}
             </Form.Item>
            </div>
            <div className="col-md-6">
              <Form.Item
               label="Apellido:"
             >
               {getFieldDecorator('apellido', {
                 rules: [
                   {required: true, message: 'Por favor ingresa tu apellido'},
                   {validator: validateStrings}
                 ],
               })(
                 <Input className="success"/>
               )}
             </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Item
                label="Fecha de nacimiento (dd/mm/aaaa)"
              >
                {getFieldDecorator('fecha_nacimiento', config)(
                  <Input placeholder="dd/mm/aaaa"/>
                )}
              </Form.Item>
            </div>
            <div className="col-md-6">
              <Form.Item
               label="Teléfono / Celular:"
             >
               {getFieldDecorator('telefono', {
                 rules: [
                   {required: true, message: 'Por favor ingresa tu teléfono'},
                   {validator: validateNumbers}
                 ],
               })(
                 <Input className="success" />
               )}
             </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Item
               label="DNI:"
             >
               {getFieldDecorator('dni', {
                 rules: [
                   {required: true, message: 'Campo obligatorio:'},
                   {validator: validateDNI}
                 ],
               })(
                 <Input className="success" />
               )}
             </Form.Item>
            </div>
            <div className="col md-6">
              <Form.Item
               label="Dirección:"
             >
               {getFieldDecorator('direccion', {
                 rules: [
                   {required: true, message: 'Por favor ingresa tu dirección',}
                 ],
               })(
                 <Input className="success" />
               )}
             </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Item
               label="localidad:"
             >
               {getFieldDecorator('localidad', {
                 rules: [
                   {required: true, message: 'Por favor ingresa tu localidad'},
                   {validator: validateStrings}
                 ],
               })(
                 <Input className="success" />
               )}
             </Form.Item>
            </div>
            <div className="col-md-6">
              <Form.Item
                label="Provincia:"
              >
                {getFieldDecorator('provincia', {
                  rules: [{ required: true, message: 'Por favor selecciona una provincia' }],
                })(
                  <Select className="success"
                    placeholder="Seleccione una provincia"
                    onChange={this.handleSelectChange}
                  >
                    {this.state.provincias.map(provincia=>
                      <Option key={`provincia-${provincia.id_provincia}`} value={provincia.id_provincia}>{provincia.provincia}</Option>
                    )}
                  </Select>
                )}
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Item
               label="Mail:"
             >
               {getFieldDecorator('email', {
                 rules: [
                   {type: 'email', message: 'El correo no es válido',},
                   {required: true, message: 'Por favor ingresa tu correo',}
                 ],
               })(
                 <Input className="success"/>
               )}
             </Form.Item>
            </div>
            <div className="col-md-6">
              <Form.Item
                 label="Contraseña:"
               >
               {getFieldDecorator('password', {
                 rules: [{ required: true, message: 'Campo obligatorio' },
                         { validator: validatePassword}
               ],
                })(
                  <Input.Password placeholder="10 dígitos letras y números"  className="success" />
                 )}
               </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Item
               label="Usuario de Instagram (opcional):" className="bl"
             >
               {getFieldDecorator('instagram', {
                  rules: [{
                    required: false,
                  }],
                })(
                 <Input type="textarea" />
               )}
             </Form.Item>
            </div>
          </div>
          {this.state.error && <Alert message={this.state.error} type="error" />}
          <div className="row">

            <div className="col-md-6 col-xs-12 col-sm-12 pb-3">
              <Form.Item className="ch">
              {getFieldDecorator('mayor', {
                valuePropName: 'checked',
                rules: [{ required: true, message: 'Debe ser mayor de 18 años' }],
              })(
                <Checkbox>Soy mayor de 18 años</Checkbox>
              )}
              </Form.Item>
              <Form.Item className="ch">
              {getFieldDecorator('agreement', {
                valuePropName: 'checked',
                rules: [{ required: true, message: 'Debe aceptar los términos y condiciones' }],
              })(
                <Checkbox>Acepto <Link to={'/bases-y-condiciones'} className="term">términos y condicones</Link></Checkbox>
              )}
            </Form.Item>
                <p className="p-txt msg pt-3">AL HACER CLICK EN REGISTRARME, ACEPTÁS LAS POLÍTICAS
                  DE PRIVACIDAD Y POLÍTICAS DE COOKIES DE OREO.</p>
            </div>


            <div className="col-md-6 col-xs-12 col-sm-12 pb-3 btn-reg-col">
              <Button loading={this.state.loading}
                className="btn btn-lg boton-recetas animated rubberBand" htmlType="submit">INGRESAR</Button>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}
const RegistroFormWrapped = Form.create({ name: 'registro' })(RegistroForm);
export default connect(
  state => ({
    profile: state.Auth.profile,
  }),
  {login}
)(RegistroFormWrapped);
