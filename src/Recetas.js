import React, { Component } from "react";
import MasonryLayout from 'react-masonry-layout';
import milk from './images/milk.jpg';
import cheese from './images/cheese.jpg';
import postre1 from './images/postre1.jpg';
import postre2 from './images/postre2.jpg';
import postre3 from './images/postre3.jpg';
import postre4 from './images/postre4.jpg';
import postre5 from './images/postre5.jpg';
import postre6 from './images/postre6.jpg';
import postre7 from './images/postre7.jpg';
import postre8 from './images/postre8.jpg';
import instafooter from './images/instafooter.png';
import objectFitImages from 'object-fit-images';


import RestClient from './network/restClient';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import TagManager from 'react-gtm-module'

class Recetas extends Component {

  constructor(props){
    super(props);
    this.state={
      loadingRecetas:false,
      recetas:[]
    }
  }
  componentDidMount(){
    this.loadRecetas();
    const tagManagerArgs = {
      gtmId: 'GTM-KXGDFZT',
      dataLayer:{
        event: 'pageview'
      }
    }
    TagManager.initialize(tagManagerArgs)
  }


  loadRecetas = ()=>{
      RestClient.listRecetasAll().then(recetasObj=>{
        let recetas = recetasObj.data.recetas;
        recetas.map(receta=>{
          receta.key= `${receta.id_receta}-receta`;
        })
        this.setState({recetas},()=>{
          objectFitImages();
        });
      })
  }

  render() {
    let patronNormal = true;
    return (
    <div>
      <div className="row row-center">
              <div className="col titulo">
                <h3 className="tit-home">TODAS LAS <span className="tblanco">RECETAS CON OREO</span></h3>
              </div>
      </div>

      <div className="row row-center pt-4">
        <div className="caja-insta recetas">
          <a href="https://www.instagram.com/recetoreo/" target="_blank"> <img className="receta-img" src={instafooter}/></a>
        </div>
      </div>

      <div className="justify-content-md-center full-w" style={{position:'relative', paddingTop:50}} >
        <MasonryLayout
          id="masonry-layout"
          sizes={[
              { columns: 1, gutter: 0 },
              { mq: '500px', columns: 2, gutter: 0 },
              { mq: '768px', columns: 3, gutter: 0 },
              { mq: '1024px', columns: 4, gutter: 0 }
            ]}
          position={true}
          >
          {this.state.recetas.map((receta, i) => {
            let height = 0;
            let heightClass = '';
            if(i%4 === 0 && i!=0 ){
              patronNormal = !patronNormal;
            }
            if(patronNormal){
              height = i % 2 === 0 ? 236 : 536;
              heightClass = i % 2 === 0 ? 'contenedorImagenRecetaSmall' : 'contenedorImagenRecetaBig';
            }else{
              height = (i % 4 === 0 || i % 4 === 1)? 536 : 236;
              heightClass = (i % 4 === 0 || i % 4 === 1)? 'contenedorImagenRecetaBig' : 'contenedorImagenRecetaSmall';
            }
            return (
              <div
                key={i}
                className="picsMason animation all 2"
                style={{
                  display: 'block',
                }}>
                <div className="card">
                  <div className={heightClass}>
                    <LazyLoadImage
                      alt={""}
                      height={height}
                      effect="blur"
                      className="card-img-top"
                      src={receta.foto}/>
                  </div>
                  <div className="card-body gallery-card">
                    <p className="card-text">{receta.receta}</p>
                  </div>
                </div>
              </div>
            )}
          )}

        </MasonryLayout>
      </div>



    </div>
    );
  }
}

export default Recetas;
