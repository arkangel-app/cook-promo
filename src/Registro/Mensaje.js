import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  Redirect, Link,withRouter
} from "react-router-dom";
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module'

class MensajeComponent extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.history.push("/participar/codigo/seguiparticipando");
    const tagManagerArgs = {
      gtmId: 'GTM-KXGDFZT',
      dataLayer:{
        event: 'pageview'
      }
    }
    TagManager.initialize(tagManagerArgs)
  }
  render() {
    return (

      <div className="col">
          <p className="resp txt-dato txt-participando">
            ¡YA ESTÁS PARTICIPANDO POR una renovación de tu cocina!
          </p>
          <p className="resp txt-dato white-txt int">
            PARTICIPÁ CON NUEVOS CÓDIGOS POR nuevos premios Y MÁS CHANCES PARA la renovación de tu cocina.
          </p>

          <div className="centrado col-2-btn pb-5">
          <Link to={"/"} className="btn btn-lg boton-recetas">IR AL INICIO</Link>
          <Link to={"/participar"} className="btn btn-lg boton-recetas new-cod">CARGAR NUEVO CÓDIGO</Link>
          </div>

      </div>
    );
  }
}
export default withRouter(MensajeComponent);
