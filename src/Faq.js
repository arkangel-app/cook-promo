import React, { Component } from "react";
import TagManager from 'react-gtm-module'
class Faq extends Component {
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
      <div className="container bg py-4">
        <div className="row row-center faq-txt faq">
        <h1 className="tit pb-4">FAQ</h1>
        <ol>
          <li className="num numFaq pb-3">
            <p className="pregunta">¿En qué consiste la Promoción “CREA CON OREO” y cuánto tiempo dura?</p>
            <p className="resp">
              La promoción “CREA CON OREO” consiste en que, durante su desarrollo, las personas, que ingresen el código único alfanumérico de 10 dígitos que aparece en los empaques de Oreo, en la página web <a className="linkTxt" href="/">www.creaconOreo.com</a> anotando sus nombres, apellidos, fecha de nacimiento, teléfono de contacto, correo electrónico, dirección domiciliaria y cédula de identidad, tendrán una opción para participar de uno de los sorteos por 2 premios de $150.000 y por 2 premios para cocinar con Valu Ramallo.  Cada código ingresado por los usuarios será una opción para participar en el sorteo. Si además del código del paquete los participantes suben a la página de la promoción una foto de un postre Oreo realizado por ellos, una vez que esa foto es validada, tendrán una chanche extra para participar de los premios del sorteo final.
            </p>
            <p className="resp">
              También, al ingresar cada código único, los participantes tendrán la opción de poder ganar automáticamente uno de los siguientes premios instantáneos: (i) 100 Kits Oreo que contienen 1 gorro de cocina de gabardina, 1 delantal de cocina de gabardina, 1 individual de cocina de gabardina, 1 bolsa de gabardina, 1 díptico con recetas de Oreo y 4 Paquetes de Galletitas Oreo x 117 gr (1 paquete sabor Oreo Regular, 1 paquete de sabor Oreo Frutilla, 1 paquete de sabor Oreo Chocolate y 1 paquete sabor Oreo Vainilla),  (ii) 80 Parlantes portátiles “Parlante JBL GO 2” y (iii) 8 Computadoras portátiles tipo Tablet “Tablet Samsung TAB E”.
            </p>
            <p className="resp">
            La promoción es válida a nivel nacional excepto en las Provincias de Salta, Neuquén, Río Negro y Tierra del Fuego, desde el 01 de abril hasta el 15 de junio de 2019.
          </p>

          </li>
          <li className="num numFaq pb-3">
            <p className="pregunta">¿Cuáles son los premios de la promoción? </p>
            <p className="resp">
              PREMIOS POR SORTEO:
            </p>
            <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="th">NOMBRE DE PREMIO</th>
                  <th scope="col" className="th">CARACTERÍSTICAS</th>
                  <th scope="col" className="th c">#</th>
                </tr>
                </thead>
               <tbody>
                <tr>
                  <th scope="row">RENOVA TU COCINA - $150.000</th>
                   <td className="premio">Premio de $150.000</td>
                   <td className="cant">2</td>
                </tr>
                <tr>
                  <th scope="row">COCINA CON VALU RAMALLO</th>
                   <td className="premio">El premio consiste en preparar un postre “Oreo” junto a la repostera argentina conocida como “Valu Ramallo”.
                       El Premio de Evento durará, aproximadamente, 180 minutos y se llevará a cabo el 3 de julio de 2019 en el horario y en la locación de la Ciudad Autónoma de Buenos Aires que posteriormente determine el Organizador.
                       Si el ganador fuera menor de edad, deberá, como condición para la asignación del Premio de Evento, concurrir acompañado de su madre, padre o tutor.
                    </td>
                   <td className="cant">2</td>
                </tr>
            </tbody>
            </table>
              </div>
            <p className="resp">
              PREMIOS instantáneos:
            </p>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="th">NOMBRE DE PREMIO</th>
                  <th scope="col" className="th">CARACTERÍSTICAS</th>
                  <th scope="col" className="th c">#</th>
                </tr>
                </thead>
               <tbody>
                <tr>
                  <th scope="row">KITS OREO</th>
                   <td className="premio">
                    Premio contiene: 1 gorro de cocinero de gabardina con logo, 1 delantal de cocinero de gabardina con logo, 1 bolsa de gabardina con logo, 1 individual de gabardina con logo, 1 díptico con 4 recetas oreo, y 4 paquetes de Galletitas Oreo x 117 gramos.
                  </td>
                  <td className="cant">100</td>
                </tr>
                <tr>
                  <th scope="row">Parlante</th>
                   <td className="premio">
                      Parlante Portátil  JBL GO 2
                    </td>
                   <td className="cant">80</td>
                </tr>
                <tr>
                  <th scope="row">Tablet</th>
                   <td className="premio">
                     Tablet Samsung TAB E
                    </td>
                   <td className="cant">8</td>
                </tr>
            </tbody>
            </table>
          </li>
          <li className="num numFaq pb-3">
            <p className="pregunta">¿Qué empaques participan en la promoción?</p>
            <p className="resp">
              Las variedades de Oreo participantes son: Oreo Golden x 117 gr, Oreo Golden x 351 gr, Mini Oreo Milkshake Frutilla x 50 gr, Mini Oreo x 150 gr, Bolsa de Oreo Bañada Chocolate x 204 gr, Oreo Chocolate Brownie 117 gr, Bolsa de Oreo Bañada Chocolate Blanco x 204 gr, Oreo Regular x 181 gr, Oreo Milkshake Frutilla x 117 gr, Oreo Chocolate x 117 gr, Alfajor Triple Oreo x 55 gr, Oreo QI x 351 gr, Mini Oreo x 50 gr, Oreo QI x 117 gr.
            </p>
          </li>
          <li className="num numFaq pb-3">
            <p className="pregunta">¿Quiénes pueden participar de la promoción?</p>
            <p className="resp">
              Sólo podrán participar de la promoción personas de 13 años a más, residentes en Argentina, que no estén domiciliadas en las Provincias de Salta, Neuquén, Río Negro o Tierra del Fuego.
            </p>
          </li>
          <li className="num numFaq pb-3">
            <p className="pregunta">¿Quiénes no pueden participar de la promoción?</p>
            <p className="resp">
              No podrán participar en la Promoción personas jurídicas, personas humanas menores de 13 años o domiciliadas en las provincias de Salta, Neuquén, Río Negro o Tierra del Fuego o fuera de la República Argentina, los empleados del Organizador, de empresas relacionadas al Organizador, los parientes por consanguinidad o afinidad de tales empleados hasta el segundo grado inclusive ni sus cónyuges.
            </p>
          </li>
          <li className="num numFaq pb-3">
            <p className="pregunta">¿Cuándo será el sorteo por los premios mayores?</p>
            <p className="resp">
              Fecha de Sorteo: 19-06-19
            </p>
            <p className="resp">
              Hora del Sorteo: 15:00 horas
            </p>
            <p className="resp">
              Lugar del sorteo: Oficinas Prado Argentina S.A. con domicilio en: Vuelta de Obligado 1947 “4° D”.
            </p>
          </li>
          <li className="num numFaq pb-3">
            <p className="pregunta">¿Cómo me entero si gané uno de los premios inmediatos?</p>
            <p className="resp">
              Los Potenciales Ganadores serán notificados de su carácter de tales y del Premio Inmediato potencialmente obtenido, a través del Web Site y, serán notificados de su carácter de tales vía mail o teléfono  que hayan registrado en la web señalada.
              Al ganador del premio por sorteo se le contactará vía telefónica y/o vía correo electrónico.
          </p>
          </li>
          <li className="num numFaq pb-3">
            <p className="pregunta">¿Cómo y cuándo puedo canjear mis premios?</p>
            <p className="resp">
          Los ganadores de los premios serán contactados vía telefónica y/o vía correo electrónico para darles los detalles de entrega del premio.
          </p>
          <p className="resp">
            En el caso de menores de edad, para el retiro efectivo de los premios, los ganadores deberán asistir acompañados de su padre, madre o tutor, junto con la cédula de identidad tanto del menor como del responsable.
          </p>
          </li>
          <li className="num numFaq pb-3">
            <p className="pregunta">Me gane un premio instantáneo, ¿aún tengo posibilidad de ganar un premio por sorteo?</p>
            <p className="resp">
              Si ganaste un premio instantáneo, todavía podrás seguir participando por el premio final el cual será asignado por sorteo.
            </p>
          </li>
          <li className="num numFaq pb-3">
            <p className="pregunta">¿Subir una foto de mi receta Oreo me da más chances de ganar premios?</p>
            <p className="resp">
              Subir una foto de una receta Oreo da una (1) chance extra para participar de los premios del sorteo final.
            </p>
          </li>
          <li className="num numFaq pb-3">
            <p className="pregunta">¿Soy Ganador/a del premio Cocina con “Valu Ramallo” y mi domicilio se encuentra a más de 200 kilómetros de la Ciudad de Buenos Aires, como hago para asistir al evento?</p>
            <p className="resp">
              Si sos ganador/a del premio Cocina con “Valu Ramallo” y tu domicilio se encuentra a más de Doscientos (200) kilómetros de la Ciudad Autónoma de Buenos Aires, se incluirá 2 (dos) pasajes de ida y vuelta desde la ciudad del Territorio que establezca el Organizador hasta la Ciudad Autónoma de Buenos Aires, en el medio de transporte que establezca el Organizador y estadía por una (1) noche, con desayuno, en el hotel de categoría tres (3) estrellas que establezca el Organizador.
            </p>
          </li>
          <li className="num numFaq pb-3">
            <p className="pregunta">Mi código fue usado/es inválido</p>
            <p className="resp">
            Envíanos un correo a  <a href="mailto:consumidores.ar@mdlz.com" className="linkTxt">consumidores.ar@mdlz.com</a> con la imagen del empaque que muestre el código para poder ayudarte.
            </p>
          </li>
          <li className="num numFaq pb-3">
            <p className="pregunta">Mi empaque no tiene código</p>
            <p className="resp">
            Envíanos un correo a  <a href="mailto:consumidores.ar@mdlz.com" className="linkTxt">consumidores.ar@mdlz.com</a>  con la imagen del empaque que muestre que no aparece el código para poder ayudarte y tus datos: nombre, apellido, documento, teléfono y correo electrónico.
            </p>
          </li>
          <li className="num numFaq pb-3">
            <p className="pregunta">El sistema se cuelga y no puedo ingresar el código</p>
            <p className="resp">
            Envíanos un correo a <a href="mailto:consumidores.ar@mdlz.com" className="linkTxt">consumidores.ar@mdlz.com</a>  contándonos lo que te ha ocurrido e incluye la imagen del empaque que muestre el código y tus datos: nombre, apellido, cédula de identidad, teléfono, correo electrónico y código del empaque.
            </p>
          </li>
          <li className="num numFaq pb-3">
            <p className="pregunta">¿Dónde puedo hacer una queja sobre el producto?</p>
            <p className="resp">
              Si tienes algún comentario o sugerencia te invitamos a comunicarte con nosotros a través del
              0 800 333 3333 o enviándonos un correo a <a href="mailto:consumidores.ar@mdlz.com" className="linkTxt">consumidores.ar@mdlz.com</a>
            </p>
          </li>
        </ol>
        </div>
  </div>
    );
  }
}

export default Faq;
