import React, { Component } from "react";
import crea from './images/crea.png';
import banner from './images/banner.png';
import receta1 from './images/receta-01.jpg';
import receta2 from './images/receta-02.jpg';
import receta3 from './images/receta-03.jpg';
import instafooter from './images/instafooter.png';
import {
  Link
} from "react-router-dom";

import RestClient from './network/restClient';
import TagManager from 'react-gtm-module'


class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      loadingRecetas:false,
      recetas:[]
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

  loadRecetas = ()=>{
      RestClient.listRecetasHome().then(recetasObj=>{
        let recetas = recetasObj.data.recetas;
        recetas.map(receta=>{
          receta.key= `${receta.id_receta}-receta`;
        })
        this.setState({recetas});
      })
  }

    routeRecetas() {
      window.location = '/#recetas';
    }

    routeParticipar() {
      window.location = '/#participar';
    }



  render() {
    return (
      <div className="container">
        <div className="container">
          <div className="row row-center banner">
          <div className="col-sm-1 col-xs-0"></div>
          <div className="col-sm-5 col-xs-12 crea-bn"><img className="crea banner-img animated bounceIn" src={crea}/></div>
          <div className="col-sm-5 col-xs-12 let-bn">

                <img className="lettering banner-img" src={banner}/>
                <div className="big-btn my-3">
                  <Link to={'/participar'} className="btn btn-lg btn-home animated rubberBand delay-1s part"><div className="btn-line rose"></div>Participar</Link>
                </div>
          </div>
          <div className="col-sm-1 col-xs-0"></div>
          </div>
          <div className="row mx-auto justify-content-md-center centrado">
            <div className="caja-insta">
              <a href="https://www.instagram.com/recetoreo/" target="_blank"> <img className="receta-img" src={instafooter}/></a>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-md-center galleria-home full-w">
            <div className="col-sm-4 col-xs-12 pb-4 receta">
              <div className="card animated flipInX">
                <a href="https://www.instagram.com/recetoreo/" target="_blank">
                <img src={receta1} className="card-img-top"/>
                </a>
                <div className="card-body">
                  <p className="card-text">MILKSHAKE OREO</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12 pb-4 receta">
              <div className="card animated flipInX">
                <a href="https://www.instagram.com/recetoreo/" target="_blank">
                <img src={receta2} className="card-img-top"/>
                </a>
                <div className="card-body">
                  <p className="card-text">TORTA ESPECIAL OREO</p>
                </div>

              </div>
            </div>
            <div className="col-sm-4 col-xs-12 pb-4 receta">
              <div className="card animated flipInX">
                <a href="https://www.instagram.com/recetoreo/" target="_blank">
                <img src={receta3} className="card-img-top"/>
                </a>
                <div className="card-body">
                  <p className="card-text">MUFFINS OREO</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container top-buffer">
        <div className="row caja-btn-recetas">
          <Link to={'/recetas'} className="btn boton-recetas btn-home-r animated rubberBand delay-2s"><div className="btn-line lblue"></div>Ver todas las recetas</Link>
        </div>

        </div>
      </div>
    );
  }
}


export default Home;
