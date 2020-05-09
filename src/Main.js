import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';
import Home from "./Home";
import Faq from "./Faq";
import Recetas from "./Recetas";
import ComoParticipar from "./ComoParticipar";
import WrappedParticipar from "./Participar";
import RegistroComponent from "./Registro/Registro";
import CodigoComponent from "./Registro/Codigo";

import RecoverPassword from "./RecoverPassword";
import Productos from "./Productos";
import Condiciones from "./Condiciones";
import Premios from "./Premios";
import Contact from "./Contact";
import logo from './images/logo.png';
import sesion from './images/sesion.png';
import { Form, Input, Modal, Button,Alert,message } from 'antd';
import Footer from './Footer';
import actions from './redux/auth/actions';
import RestClient from './network/restClient';

const {logout} = actions;

class Main extends Component {
  state = {
    loading: false,
    visible: false,
    loadingRecover: false,
    errorRecover:undefined
  }

  showModal2 = () => {
    this.props.form.setFieldsValue({emailRecover:''})
    this.setState({
      visible2: true,
    });
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
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

  handleCancel2 = () => {
    this.setState({ visible2: false });
  }

  render() {
    const ScrollToTop = () => {
      window.scrollTo(0, 0);
      return null;
    };
    const { visible, visible2, loading } = this.state;
    const { getFieldDecorator } = this.props.form;

    return (
      <BrowserRouter>
        <div  className="container">
        <div className="row menu-app">
              <div className="col-lg-4 col-xs-12 main">
              <div className="row r-main">
                  <div className="brand-content animated heartBeat">
                    <Link className="navbar-brand" to={"/#"}><img className="brand-logo" alt="logo" src={logo}/></Link>
                  </div>
                  <NavLink className="b-participar b-menu btn-rwd" to="/participar">Participar</NavLink>
                  <div className="sesion-icon dropdown pl-4">
                    <a  className="b-sesion"><img className="sesion-img" alt="sesion" src={sesion}/></a>
                      <div className="dropdown-content">
                        <div className="arrow-up"></div>
                        <div className="centrado">
                            {this.props.profile?
                                <span>
                                  <div className="bold-txt">{this.props.profile.fullname}</div>
                                  <p>{this.props.profile.mail}</p>
                                  <Link className="btn btn-lg boton-recetas modal-btn"
                                    size="large" to={'/participar/codigo'} onClick={()=>{this.setState({visible:false})}}>Participar</Link>
                                  <Button className="cerrarSesion" style={{fontSize:12,marginTop:10}} onClick={()=>{
                                      this.setState({visible:false});
                                      this.props.logout();
                                  }}>Cerrar sesión</Button>
                                </span>
                                :
                                <span>
                                  <div className="bold-txt">Iniciar sesión</div>
                                    <Link className="btn btn-lg boton-recetas modal-btn"
                                      size="large" to={'/participar'} onClick={()=>{this.setState({visible:false})}}>
                                      Iniciar sesión
                                    </Link>
                                    <a className="forgot-ses" onClick={this.showModal2}>Olvidé mi contraseña</a>
                                  <hr></hr>
                                  <div className="bold-txt">Aún no me registré</div>
                                  <Link to={'/participar/registro'} className="btn btn-lg boton-recetas animated rubberBand">REGISTRARME</Link>
                                </span>
                            }
                        </div>
                       </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-xs-12 pb-3">
                <div id="navbar" className="navbar">
                  <ul className="nav navbar-nav">
                    <li className="animated swing"><NavLink  className="b-item b-menu" exact to="/recetas"> Recetas</NavLink></li>
                    <li className="como animated swing"><NavLink className="b-item2 b-menu" to="/como-participar">Cómo participar</NavLink></li>
                    <li className="animated swing"><NavLink className="b-item b-menu" to="/premios">Premios</NavLink></li>
                    <li className="animated swing"><NavLink className="b-item3 b-menu" to="/faq">FAQ</NavLink></li>
                    <li className="participar-m animated swing"><NavLink className="b-participar b-menu" to="/participar">Participar</NavLink></li>
                    <li className="ses dropdown">
                      <a className="b-sesion"><img className="sesion-img" alt="sesion" src={sesion}/></a>
                        <div className="dropdown-content">
                          <div className="arrow-up"></div>
                          <div className="centrado">
                            {this.props.profile?
                                <span>
                                  <div className="bold-txt">{this.props.profile.fullname}</div>
                                  <p>{this.props.profile.mail}</p>
                                  <Link className="btn btn-lg boton-recetas modal-btn"
                                    size="large" to={'/participar/codigo'} onClick={()=>{this.setState({visible:false})}}>Participar</Link>
                                  <Button className="cerrarSesion" style={{fontSize:12,marginTop:10}} onClick={()=>{
                                      this.setState({visible:false});
                                      this.props.logout();
                                  }}>Cerrar sesión</Button>
                                </span>
                                :
                                <span>
                                  <div className="bold-txt">Iniciar sesión</div>
                                    <Link className="btn btn-lg boton-recetas modal-btn sesion-mb" style={{fontSize:'17px'}}
                                      size="large" to={'/participar'} onClick={()=>{this.setState({visible:false})}}>
                                      Iniciar sesión
                                    </Link>
                                    <a className="forgot-ses" onClick={this.showModal2}>Olvidé mi contraseña</a>
                                  <hr></hr>
                                  <div className="bold-txt">Aún no me registré</div>
                                  <Link to={'/participar/registro'} className="btn btn-lg boton-recetas animated rubberBand">REGISTRARME</Link>
                                </span>
                            }
                          </div>
                         </div>
                    </li>
                  </ul>

                </div>
              </div>
        </div>
          <div className="content">
            <Route component={ScrollToTop} />
            <Route exact path="/" component={Home}/>
            <Route exact path="/recetas" component={Recetas}/>
            <Route path="/como-participar" component={ComoParticipar}/>
            <Route exact path="/participar" component={WrappedParticipar}/>
            <Route exact path="/participar/registro" component={RegistroComponent}/>
            <Route path="/participar/codigo" component={CodigoComponent}/>
            <Route path="/premios" component={Premios}/>
            <Route path="/faq" component={Faq}/>
            <Route path="/productos" component={Productos}/>
            <Route path="/bases-y-condiciones" component={Condiciones}/>
            <Route path="/contacto" component={Contact}/>
            <Route path="/recover-password" component={RecoverPassword}/>
          </div>

          <Footer></Footer>

        <Modal
            visible={visible2}
            title="Olvidé mi contraseña"
            centered
            onCancel={this.handleCancel2}
            footer={null}
          >
          <div className="centrado">
          <div>Te enviaremos un mensaje a tu correo</div>
          <Form layout="vertical" onSubmit={this.handleOkRecover}>
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
      </BrowserRouter>




    );
  }
}
// <a className="forgot-ses" onClick={this.showModal2}>
// Olvidé mi contraseña</a>
const WrappedMain = Form.create({ name: 'recover' })(Main);

export default connect(
  state => ({
    profile: state.Auth.profile,
  }),
  {logout}
)(WrappedMain);
