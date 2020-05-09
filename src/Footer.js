import React, { Component } from "react";
import {
  NavLink,
  HashRouter,
  Link,
  BrowserRouter,
  withRouter
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import logo from './images/logo.png';
import sesion from './images/sesion.png';
import fb from './images/fb.png';
import twitter from './images/twitter.png';
import insta from './images/insta.png';
import elements from './images/elements.png';
import jumbo from './images/jumbo.png';
import disco from './images/disco.png';
import vea from './images/vea.png';

class Footer extends Component {


  constructor(props) {
    super(props);}

  render() {
    return (

      <footer>
        <div>
        <img className="foot-img" src={elements}/>
        </div>
        <div className="row mx-auto justify-content-md-center centrado my-footer">
          <div className="col-sm-3 col-lg-3 col-xs-12 bot py-2">
            <div>
                <a href="https://www.facebook.com/oreo/" target="_blank" className="b-social"><img className="insta-img animated tada" src={fb}/></a>
                <a href="https://www.instagram.com/oreoargentina/?hl=es-la" target="_blank" className="b-social"><img className="insta-img animated tada" src={insta}/></a>
                <a href="https://twitter.com/oreoargentina?lang=es" target="_blank" className="b-social"><img className="insta-img animated tada" src={twitter}/></a>
            </div>
          </div>

          <div className="col-sm-5 col-lg-6 col-xs-12 bot">
            <span className="txt-footer">


            <Link to={'/productos'} className="b-ft">Productos</Link>・
            <Link to={'/bases-y-condiciones'} className="b-ft">Bases y condiciones</Link>・
            <Link to={'/contacto'} className="b-ft">Contacto</Link>

          </span>
          </div>
  

          <div className="col-sm-4 col-lg-3 col-xs-12 comp">
            <div className="dropdown dBoton btn-c">
                <button className="btn btn-shop btn-lg delay-4s dropdown-toggle"><div className="btn-line"></div><i className="fa fa-shopping-cart"></i>Comprar</button>
                <div className="dropdown-content dropdownComprar">
                  <div className="caja-ecom mb-2">
                  <a href="https://www.jumbo.com.ar/busca?fq=H%3A1880&utm_source=Mondelez&utm_medium=referral&utm_campaign=Promo-Crea-Oreo" target="_blank" className="btnEcom"><img className="imgEcom" src={jumbo}/></a>
                  </div>
                  <div className="caja-ecom mb-2">
                  <a href="https://www.disco.com.ar/Comprar/Home.aspx?utm_source=Mondelez&utm_medium=referral&utm_campaign=Promo-Crea-Oreo#_atCategory=false&_atGrilla=true&_id=109047" target="_blank" className="btnEcom"><img className="imgEcom" src={disco}/></a>
                  </div>
                  <div className="caja-ecom mb-2">
                  <a href="https://www.veadigital.com.ar/Comprar/Home.aspx?utm_source=Mondelez&utm_medium=referral&utm_campaign=Promo-Crea-Oreo#_atCategory=false&_atGrilla=true&_id=139584" target="_blank" className="btnEcom"><img className="imgEcom" src={vea}/></a>
                  </div>
              </div>
            </div>
        </div>
        </div>
        </footer>


    );
  }
}

export default withRouter(Footer);
