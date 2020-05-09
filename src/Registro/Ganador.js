import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  withRouter, Link
} from "react-router-dom";
import ReactDOM from 'react-dom';
import RestClient from '../network/restClient';
import TagManager from 'react-gtm-module'

class GanadorComponent extends Component {

  constructor(props) {
    super(props);

  }
  componentDidMount(){
    this.props.history.push("/participar/codigo/ganador");
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
          <div className="premio-foto py-4">
            <img className="img-p" src={this.props.premio.image}/>
          </div>

          <p className="resp txt-dato ganador-txt">
            ¡FELICITACIONES!<br></br>
          SOS POTENCIAL GANADOR <br></br>
          <span className="nombrePremio">{this.props.premio.premio}</span>
          </p>

          <p className="txt-flag my-3">
            COMUNÍCATE AL <span className="bluetxt">5789 7115</span> <br></br>
            PARA COORDINAR LA ENTREGA DEL PREMIO
          </p>

          <p className="resp txt-dato white-txt int">
          Y ADEMÁS YA ESTÁS PARTICIPANDO EN EL SORTEO FINAL POR LA RENOVACIÓN DE TU COCINA
          </p>

          <div className="centrado col-2-btn pb-5">
          <Link to={"/"} className="btn btn-lg boton-recetas">IR AL INICIO</Link>
          <Link to={"/participar"} className="btn btn-lg boton-recetas new-cod">CARGAR NUEVO CÓDIGO</Link>
          </div>

      </div>
    );
  }
}

export default withRouter(GanadorComponent);
