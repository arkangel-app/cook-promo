import React, { Component } from "react";
import premios1 from './images/premio1.png';
import premios2 from './images/premio2.png';
import premios3 from './images/premio3.png';
import premios4 from './images/premio4.png';
import premiosBanner from './images/pbanner.png';
import premiosLinea from './images/premiosLinea.png';
import applogo from './images/applogo.png';
import TagManager from 'react-gtm-module'


class Premios extends Component {

  componentDidMount(){
    const tagManagerArgs = {
      gtmId: 'GTM-KXGDFZT',
      dataLayer:{
        event: 'pageview'
      }
    }
    TagManager.initialize(tagManagerArgs)
    console.log("inicia Tag manager");
  }


  render() {
    return (
    <div className="container">
        <div className="row row-center titulo">
          <div className="logo-box">
          <img className="img-app-logo animated bounceIn logoPremios animated rubberBand" src={applogo}/>
          </div>
          <h1 className="tit premios-title">Premios</h1>
        </div>
        <div className="row row-center py-4">
          <div className="banner-box">
            <img className="lettering banner-img animated heartBeat" src={premiosBanner}/>
          </div>
        </div>

        <div className="row row-center">
          <div className="col-lg-2 col-sm-5  col-6 col-premios">
              <div className="premio-box">
              <img className="premios animated pulse" src={premios1}/>
              </div>
              <div className="premio-tit">
                COCINÁ CON <br></br>VALU RAMALLO
              </div>
              <div className="premio-tit2">
                RECETAS CON OREO
              </div>
          </div>
          <div className="col-lg-1 col-sm-2 linea">
            <img className="premiosLinea" src={premiosLinea}/>
          </div>
          <div className="col-lg-3 col-sm-5 col-6 col-premios">
            <div className="premio-box">
            <img className="premios animated pulse" src={premios2}/>
            </div>
            <div className="premio-tit">
              kit oreo
            </div>
          </div>
          <div className="col-lg-1 linea des">
            <img className="premiosLinea" src={premiosLinea}/>
          </div>
          <div className="col-lg-2 col-sm-5 col-6 col-premios paddingt">
            <div className="premio-box">
            <img className="premios  animated pulse" src={premios3}/>
            </div>
            <div className="premio-tit">
              tablet
            </div>
          </div>
          <div className="col-lg-1 col-sm-2 linea">
            <img className="premiosLinea" src={premiosLinea}/>
          </div>
          <div className="col-lg-2 col-sm-5 col-6 col-premios paddingt">
            <div className="premio-box">
            <img className="premios animated pulse" src={premios4}/>
            </div>
            <div className="premio-tit">
              parlante
            </div>
          </div>
        </div>
        <div className="row row-center pt-5">
          <p className="miniText">
            imágenes no contractuales a solo efecto ilustrativo
          </p>
        </div>
    </div>


    );
  }
}

export default Premios;
