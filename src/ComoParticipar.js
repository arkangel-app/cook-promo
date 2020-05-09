import React, { Component } from "react";
import comoparticipar from './images/como-participar.png';
import applogo from './images/applogo.png';
import linea from './images/linea.png';
import rueda1 from './images/rueda1.png';
import rueda2 from './images/rueda2.png';
import rueda3 from './images/rueda3.png';
import TagManager from 'react-gtm-module'


class ComoParticipar extends Component {
  componentDidMount(){
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
      <div className="container">
    <div className="row row-center pt-2 caja-como">
        <div className="col-lg-5 col-xs-12">
          <div className="row row-center tit-row">
            <div className="col-sm-6 col-md-8 col-lg-12">
              <div className="left yellow-letter">
              <img className="img-y-letter" src={comoparticipar}/>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-12">
                <div className="left app-oreo pt-3">
                  <img className="img-app-logo animated bounceIn" src={applogo}/>
                </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1 col-line">
          <div className="middle yellow-line">
            <img className="img-line" src={linea}/>
          </div>
        </div>
        <div className="col-lg-5 col-xs-12 rwd-pt">
          <div className="row pb-5 row-galleta">
              <div className="right galleta pr-3">
                <img className="img-galleta animated rotateIn" src={rueda1}/>
              </div>
              <div className="light-text first-txt txt">
                CONSEGUÍ
                <br></br>
                TU CÓDIGO
                <br></br>
                <span className="bold-text">OREO</span>
              </div>
          </div>
          <div className="row pb-5 row-galleta g2">
              <div className="right galleta pr-3">
                <img className="img-galleta animated rotateIn" src={rueda2}/>
                </div>
                <div className="light-text txt">
                REGISTRATE EN LA WEB Y
                <br></br>
                <span className="bold-text">CARGÁ EL
                    <br></br>
                CÓDIGO</span>
                <br></br>
                <span className="light2-text">DE TU PACK</span>
                <br></br>
                <div className="small-txt">¡Además podes subir
                  <br></br>
                  tu receta con oreo para
                  <br></br>
                  duplicar chances!</div>
                <span className="light2-text new">(no es obligatorio)</span>
              </div>
            </div>
            <div className="row row-galleta">
              <div className="right galleta pr-3">
                <img className="img-galleta animated rotateIn" src={rueda3}/>
                </div>
                <div className="light-text txt">
                PARTICIPÁ POR
                <br></br>
                <span className="bold-text t-yellow">$150.000</span>
                <br></br>
                <div className="light-t t-yellow">PARA UNA <span className="bold"> RENOVACIÓN</span>
                <br></br>
                <span className="bold-t t-yellow">de tu cocina</span></div>
                <div className="small-txt">Y ADEMÁS PODÉS GANAR
                <br></br>
                INCREÍBLES PREMIOS</div>
            </div>
            </div>
          </div>

        </div>
    </div>
    );
  }
}

export default ComoParticipar;
