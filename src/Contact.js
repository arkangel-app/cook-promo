import React, { Component } from "react";
import contacto from './images/contacto.png';
import applogo from './images/applogo.png';
import linea from './images/linea.png';
import TagManager from 'react-gtm-module'


class Contact extends Component {
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
                  <div className="col-sm-6 col-md-6 col-lg-12">
                    <div className="left yellow-letter">
                    <img className="img-y-letter" src={contacto}/>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-12">
                      <div className="left app-oreo pt-3">
                        <img className="img-app-logo animated bounceIn" src={applogo}/>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-line">
                <div className="middle yellow-line">
                  <img className="img-line-contacto" src={linea}/>
                </div>
              </div>
              <div className="col-lg-5 col-xs-12 bloque-txt rwd-pt">
                <p className="resp txt-contacto">
                  Para cualquier información aclaración referente a LA PROMO,
                  mandar un correo electrónico a  </p>
                <p className="resp txt-dato correo">
                      consultas.ar@mdlz.com
                  </p>
                  <p className="resp txt-contacto">
                   con asunto "crea con oreo"  </p>
                   <p className="resp txt-dato puntos">
                     ...........  </p>
                     <p className="resp txt-contacto">
                       TAMBIÉN PODÉS COMUNICARTE
                       VÍA TELEFÓNICA AL  </p>

                <p className="resp txt-dato">
                    +5789-7115  </p>
                </div>

              </div>
          </div>
    );
  }
}

export default Contact;
