import React, { Component } from "react";
import pack1 from './images/pack-01.png';
import pack2 from './images/pack-02.png';
import pack3 from './images/pack-03.png';
import pack4 from './images/pack-04.png';
import pack5 from './images/pack-05.png';
import pack6 from './images/pack-06.png';
import pack7 from './images/pack-09.png';
import pack8 from './images/pack-11.png';
import pack9 from './images/pack-12.png';
import pack10 from './images/pack-10.png';
import pack11 from './images/pack-13.png';
import pack12 from './images/pack-14.png';
import pack13 from './images/pack-07.png';
import pack14 from './images/pack-08.png';
import TagManager from 'react-gtm-module'

class Productos extends Component {

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
          <div className="row row-center faq-txt faq">

              <h2 className="tit productos">Productos
                <br></br>
          participantes</h2>

          <div className="row row-center">
            <div className="col caja-img">
                <img className="pack-img animated animated zoomInLeft" src={pack1}/>
                <p className="galleta-nombre">OREO REGULAR <span className="peso-galleta">X 181 GR.</span></p>
            </div>
            <div className="col caja-img animated">
                <img className="pack-img animated zoomInLeft" src={pack2}/>
                <p className="galleta-nombre">OREO QI <span className="peso-galleta">X 117 GR.</span></p>
            </div>
            <div className="col caja-img animated">
                <img className="pack-img animated zoomInLeft" src={pack3}/>
                <p className="galleta-nombre">Oreo Chocolate Brownie <span className="peso-galleta">X 117 GR.</span></p>
            </div>
            <div className="col caja-img animated">
                <img className="pack-img animated zoomInLeft" src={pack4}/>
                <p className="galleta-nombre">OREO Chocolate <span className="peso-galleta">X 117 GR.</span></p>
            </div>
          </div>

          <div className="row">
            <div className="col caja-img">
              <img className="pack-img animated zoomInRight" src={pack5}/>
              <p className="galleta-nombre">OREO FRUTILLA <span className="peso-galleta">X 117 GR.</span></p>
            </div>
            <div className="col caja-img">
                <img className="pack-img animated zoomInRight" src={pack6}/>
                <p className="galleta-nombre">OREO GOLDEN <span className="peso-galleta">X 117 GR.</span></p>
              </div>
              <div className="col caja-img">
                <img className="pack-img animated zoomInRight" src={pack7}/>
                <p className="galleta-nombre">Mini Oreo Milkshake Frutilla <span className="peso-galleta">X 50 GR.</span></p>
               </div>
               <div className="col caja-img">
                  <img className="pack-img animated zoomInRight" src={pack8}/>
                  <p className="galleta-nombre">MINI OREO <span className="peso-galleta">X 50 GR.</span></p>
                </div>
              </div>

              <div className="row row-center">
                <div className="col caja-img">
                    <img className="pack-img animated animated zoomInLeft" src={pack9}/>
                    <p className="galleta-nombre">MINI OREO <span className="peso-galleta">X 150 GR.</span></p>
                </div>
                <div className="col caja-img animated">
                    <img className="pack-img animated zoomInLeft" src={pack10}/>
                    <p className="galleta-nombre">Alfajor Triple Oreo <span className="peso-galleta">X 55 GR.</span></p>
                </div>
                <div className="col caja-img">
                    <img className="pack-img animated animated zoomInLeft" src={pack13}/>
                    <p className="galleta-nombre">OREO GOLDEN <span className="peso-galleta">X 351 GRS</span></p>
                </div>
                <div className="col caja-img animated">
                    <img className="pack-img animated zoomInLeft" src={pack14}/>
                    <p className="galleta-nombre">Oreo QI <span className="peso-galleta">X 351 GR</span></p>
                </div>
              </div>

              <div className="row row-center">

                <div className="col caja-img animated">
                    <img className="pack-img animated zoomInLeft" src={pack11}/>
                    <p className="galleta-nombre">Oreo Bañada Chocolate Blanco <div className="peso-galleta">X 204 GR.</div></p>
                </div>
                <div className="col caja-img animated">
                    <img className="pack-img animated zoomInLeft" src={pack12}/>
                    <p className="galleta-nombre">Oreo Bañada Chocolate <div className="peso-galleta">X 204 GR.</div></p>
                </div>
              </div>

          </div>

          </div>
    );
  }
}

export default Productos;
