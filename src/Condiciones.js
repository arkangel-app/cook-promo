import React, { Component } from "react";
import TagManager from 'react-gtm-module'

class Condiciones extends Component {

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
        <div className="row row-center faq-txt faq bases px-3">
        <h1 className="tit py-4">BASES Y CONDICIONES</h1>
        <ol>
          <li className="num pb-3">
            <p className="resp">
              Participan en la promoción denominada “Crea con Oreo” (la “Promoción”), organizada por
              Mondelez Argentina S.A. (el “Organizador”), las galletitas Oreo Golden x 117 grs., Oreo
              Golden x 351 grs., Mini Oreo Milkshake Frutilla x 50 grs., Mini Oreo x 150 grs., Bolsa de Oreo
              Bañada Chocolate x 204 grs., Oreo Chocolate Brownie x 117 grs., Bolsa de Oreo Bañada
              Chocolate Blanco x 204 grs., Oreo Regular x 181 grs., Oreo Milkshake Frutilla x 117 grs.,
              Oreo Chocolate x 117 grs., Alfajor Triple Oreo x 55 grs., Oreo QI x 351 grs., Mini Oreo x 50
              grs., Oreo QI x 117 grs. (“Producto/s Participante/s”), obre o no en sus envases (“Envase/s”)
              publicidad de la Promoción.
            </p>
          </li>
          <li className="num pb-3">
            <p className="resp">
              La Promoción tendrá vigencia en la República Argentina, excepto en las provincias de
              Neuquén, Río Negro, Salta y Tierra del Fuego, Antártida e Islas del Atlántico sur (“Territorio”),
              desde las 00:00 horas del 1º de abril de 2019 hasta las 23:59:59 horas del 15 de junio de
              2019 o en el caso de los sorteos de resolución inmediata (“Sorteo/s Inmediato/s”), hasta el
              momento anterior de este último día en que algún participante se constituya en potencial
              ganador del último de los premios inmediatos puestos en juego (el “Plazo de Vigencia”) y se
              regirá por lo establecido en estas bases y condiciones (las “Bases”).
            </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
                  Las personas interesadas en participar de la Promoción deberán, durante el Plazo de Vigencia, ingresar en el sitio Web www.creaconOreo.com (el “Web Site”) y, siguiendo las instrucciones allí indicadas, completar: (i) Un nombre de usuario, una contraseña, su nombre y apellido, D.N.I., dirección de e-mail, fecha de nacimiento, teléfono y domicilio completo (“Datos Personales”) y (ii) Los diez (10) dígitos que conforman el código alfanumérico que figura en los Envases de los Productos Participantes (“Código/s” y en conjunto con los Datos Personales, los “Datos”).
                </p>
          </li>
          <li className="num pb-3">
            <p className="resp">
              Una vez ingresados correctamente los Datos en el Web Site, los participantes (“Participante/s”) participarán automáticamente con una (1) chance de los Sorteos Inmediatos y del sorteo final (“Sorteo Final” y en conjunto con los Sorteos Inmediatos, los “Sorteos”) incluidos en la Promoción. Los Participantes que suban al Web Site una fotografía que refleje el momento de preparación de su postre “Oreo” preferido, elaborado con uno o más de los Productos Participantes o la imagen del postre terminado (“Foto/s”), obtendrán una (1) chance adicional de salir favorecidos en el Sorteo Final. Serán descalificadas las Fotos que pudieran ser consideradas, a exclusivo criterio del Organizador, ofensivas, discriminatorias, violatorias de cualquier ley o contrarias a la moral o a las buenas costumbres y las que exhiban marcas de cualquier producto o servicio distintas de la marca “Oreo”. Quedarán excluidos de la Promoción quienes no completen todos los Datos como así también quienes no los completen correctamente. Los Participantes podrán utilizar el Código de un mismo Envase una sola vez durante el Plazo de Vigencia. Ningún Participante podrá participar de los Sorteos Inmediatos más de treinta (30) veces durante el Plazo de Vigencia no obstante que posea más de treinta (30) Envases diferentes.
            </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
                Mediante los Sorteos Inmediatos se pondrán en juego: (i) Cien (100) kits de cocina compuestos, cada uno, por un (1) gorro de cocinero de gabardina con el logo de “Oreo”, un (1) folleto díptico con 4 (cuatro) recetas de postres “Oreo”, un (1) mantel individual de gabardina de 35 cm x 45 cm, un (1) delantal de cocinero de gabardina con el logo de “Oreo”, una (1) bolsa de gabardina con el logo de “Oreo”, un (1) paquete de galletitas “Oreo” sabor regular x 117 grs., un (1) paquete de galletitas “Oreo” sabor frutilla x 117 grs., un (1) paquete de galletitas “Oreo” sabor chocolate x 117 grs. y un (1) paquete de galletitas “Oreo” sabor Vainilla x 117 grs. (“Kit/s Cocina”), (ii) Ochenta (80) parlantes portátiles “JBL” GO 2 (“Parlante/s”) y  (iii) Ocho (8) computadoras portátiles tipo “tablet” “Samsung”TAB E, con pantalla de 7” y 1GB de memoria RAM, con recetas “Oreo” incorporadas (“Tablet/s” y en conjunto con los Kits Cocina y los Parlantes, los “Premio/s Inmediato/s”).
                </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
                La asignación del carácter de potencial ganador de los Sorteos Inmediatos y del Premio Inmediato asociado en cada caso estará predeterminada en un programa de computación (“Software”), que contendrá para cada día en que se encuentre vigente la Promoción los horarios ganadores para cada uno de los Premios Inmediatos puestos en juego (“Horario/s Ganador/es”). Cuando un Participante participe en un Sorteo Inmediato en uno de los Horarios Ganadores se constituirá en el potencial ganador del Premio Inmediato asociado a dicho Horario Ganador (“Potencial/es Ganador/es”). En el caso de que ningún Participante participase de un Sorteo Inmediato en un determinado Horario Ganador, el Potencial Ganador del Premio Inmediato atribuido a dicho Horario Ganador será el primer Participante que participe en la Promoción con posterioridad al Horario Ganador vacante.Los Horarios Ganadores han sido establecidos ante escribano público con anterioridad al comienzo de la Promoción.
                </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
                  Los Potenciales Ganadores de los Premios Inmediatos serán inmediatamente notificados de su condición de tales y del Premio Inmediato que podrán ganar mediante un aviso automático en pantalla, en el que se incluirá un registro de seguridad. Quienes no se constituyan en Potenciales Ganadores serán asimismo notificados a través del Web Site de su condición de no ganadores.
                </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
                En el Sorteo Final, que se llevará a cabo ante escribano público a las 15:00 hs. del 19 de junio de 2019 en el domicilio sito en Vuelta de Obligado 1947, 4º “D”, Ciudad Autónoma de Buenos Aires, se elegirán al azar Cuatro (4) Participantes (también “Potencial/es Ganador/es”) quienes podrán ganar: (i) Los elegidos en primer (1º) y segundo (2º) lugar, un (1) premio de pesos ciento cincuenta mil ($ 150.000) (“Premio/s de $ 150.000”), cada uno y (ii) los elegidos en tercer (3º) y cuarto (4º) lugar, un (1) premio consistente en preparar un postre “Oreo” junto a la repostera argentina conocida como “Valu Ramallo” (“Premio/s de Evento” y en conjunto con los Premios de $ 150.000, los “Premios Finales” y, éstos últimos, en conjunto con los Premios Inmediatos, los “Premios”). Los Premios de Evento durarán, aproximadamente, 180 (ciento ochenta) minutos y se llevará a cabo, en la misma oportunidad para ambos ganadores, el 3 de julio de 2019en el horario y en la locación de la Ciudad Autónoma de Buenos Aires que posteriormente determine el Organizador. Si alguno de los ganadores fuera menor de edad, deberá, como condición para la asignación del Premio de Evento, concurrir acompañado de su madre, padre o tutor.
                </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
                El Organizador elegirá en el Sorteo Final cuatro (4) Participantes “suplentes” para el caso de que uno o más de los Potenciales Ganadores de los Premios Finales elegidos en primer término no cumplieran, por cualquier motivo, con los requisitos que para la asignación de los Premios Finales se establecen en estas Bases.
                </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
                Los Premios no incluyen ninguna otra prestación, bien o servicio distinto de lo indicado en los puntos 5. y 8., precedentes, excepto en el caso delos Premios de Evento que en caso de que sus ganadores se domiciliasena más de doscientos (200) kilómetros de la Ciudad Autónoma de Buenos Aires, incluiráun (1) pasaje de ida y vuelta desde la ciudad del Territorio que establezca el Organizador hasta la Ciudad Autónoma de Buenos Aires, en el medio de transporte que establezca el Organizador – o dos (2) pasajes en las mismas condiciones indicadas precedentemente si el ganador fuera menor de edad - y estadía por una (1) noche, en habitación simple - o doble, si el ganador fuese menor de edad -con desayuno, en el hotel de categoría tres (3) estrellas que establezca el Organizador. Los Premios de $ 150.000 serán abonados mediante cheque “cruzado” y con la cláusula “no a la orden”. El derecho a la asignación de los Premios es intransferible y no podrá requerirse su canje por dinero ni por otros bienes o servicios, caso contrario sus Potenciales Ganadores perderán automáticamente todo derecho a su asignación y no tendrán derecho a reclamo o compensación alguna. En la provincia de Mendoza se asignarán, como máximo, siete (7) Kits Cocina, cinco (5) Parlantes, una (1) Tablet, un (1) Premio de $ 150.000 y un (1) Premio de Evento.
                </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
                Los Potenciales Ganadores de los Premios Finales serán notificados de su carácter de tales vía mail o telefónicamente y, al igual que los Potenciales Ganadores de los Premios Inmediatos, deberán reclamar la asignación de los Premios y coordinar la fecha en que contestarán las preguntas de cultura general mencionadas en el punto 13. de estas Bases, llamando, dentro de los cinco (5) días de notificados, de lunes a viernes, en días hábiles, de 10:00 a 12:30 horas ode 14:00 a 17:00 horas, al teléfono (011)5789-7115. En el caso de que el Organizador no lograr notificar por mail o por teléfono a un Potencial Ganador de un Premio Final - a la dirección de correo electrónico o al teléfono registrados en el Web Site - después de realizar al menos dos (2) intentos, separados por un mínimo de treinta (30) minutos - tal Potencial Ganador perderá automáticamente el derecho a que el Premio Final le sea asignado.
               </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
                La falta de reclamo de la asignación de los Premios en la forma y dentro del plazo establecido en el punto precedente o la contestación incorrecta a más de una (1) de las preguntas de cultura general mencionadas en el punto siguiente o la falta de presentación del Envase con el Código o la información de Datos incorrectos o la negativa de los Potenciales Ganadores a presentarse a sesiones de fotografía o filmación que eventualmente les requiera el Organizador hará perder, automáticamente, a susPotenciales Ganadores, el derecho a su asignación. Los Premios no asignados a ganador alguno, si los hubiere, quedarán en propiedad del Organizador.
                </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
              La asignación de los Premios se encuentra asimismo condicionada a que sus Potenciales Ganadores contesten en forma correcta al menos cuatro (4) de las cinco (5) preguntas de cultura general que se les efectuará en una fecha previamente acordada.
              </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
              Los Premios y la documentación necesaria para asistir a los Premios de Evento serán entregados a sus ganadores en la Ciudad Autónoma de Buenos Aires, dentro de los treinta (30) días de la asignación de cada una de ellos. Los Potenciales Ganadores menores de edad deberán ser representados por sus padres, madres o tutores al momento del reclamo, asignación y – eventualmente - entrega de los Premios, previa acreditación del vínculo mediante presentación de la documentación correspondiente, de la cual deberá entregarse una fotocopia al Organizador.El Organizador podrá remitir por correo los Premios Inmediatos, a los domicilios de los Potenciales Ganadores que residan a más de setenta (70) kilómetros de la Ciudad Autónoma de Buenos Aires. En caso que el correo concurriera en más de dos (2) oportunidades y el Participante – o, en su caso, el padre, madre o tutor - no se encontrara disponible para exhibir su DNI y entregar una fotocopia del mismo, entregar el Envase con el Código, contestar las preguntas de cultura general, firmar la autorización de uso de imagen y recibir el Premio Inmediato, dicho Participante perderá automáticamente el derecho a que el Premio Inmediato le sea asignado. La documentación necesaria para llevar a cabo los Premios de Evento y los Premios de $ 150.000 serán entregados, en cualquier caso, en la Ciudad Autónoma de Buenos Aires.
              </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
                Será a cargo de los ganadores todo impuesto que deba tributarse sobre o en relación con los Premios y toda suma de dinero que deba abonarse por cualquier concepto al estado nacional, sociedades del estado, provincias, municipalidades u otros entes gubernamentales con motivo de la organización de la Promoción, de la realización de los Sorteos o del ofrecimiento de los Premios. Los gastos en que incurran los Potenciales Ganadores cuando concurran a reclamar la asignación, a retirar o a efectivizar los Premios estarán asimismo a su exclusivo cargo.
                </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
                Los Potenciales Ganadores – o, en su caso, sus padres, tutores o representantes legales - autorizarán al Organizador, como condición para tener derecho a la asignación de los Premios, a utilizar sus nombres e imágenes, con fines comerciales, en los medios de comunicación y formas que el Organizador disponga, sin que ello les otorgue derecho a la percepción de suma alguna, durante el Plazo de Vigencia y hasta transcurridos tres (3) años de finalizada la Promoción.
                </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
                La asignación de los Premios está asimismo condicionada a la comprobación de la autenticidad delos Envases y de los Códigos con los que se los reclame. No serán válidos ni se admitirán Envases que no sean originales y legítimos. No se aceptarán copias ni reproducciones de los mismos, ni tampoco Envases cuyos Códigos presenten signos de haber sido adulterados, enmendados, alterados, borrados, ilegibles, defectuosos o respecto de las cuales se alegue su pérdida, hurto o robo o que hayan sido obtenidos ilegítimamente, a juicio del Organizador, todos los cuales serán nulos. Es asimismo condición para la asignación de los Premios que los Potenciales Ganadores entreguen el Envase con el Código, una fotocopia de su DNI y firmen una autorización para el uso de su imagen. El incumplimiento de cualquiera de estas condiciones hará perder a los Potenciales Ganadores el derecho a la asignación de los Premios, automáticamente, sin derecho a reclamo alguno.
                </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
              Sin obligación de compra. A las personas que envíen por mail el “scan” de un dibujo simple, hecho a mano y coloreado, del logo de cualquiera de los Productos Participantes a la dirección de correo electrónico <span className="correo"><a href="mailto:consultas.ar@mdlz.com" className="linkTxt">consultas.ar@mdlz.com</a></span> con el Asunto: Promoción “Crea con Oreo”, indicando el mail sunombre y apellido, D.N.I., dirección de e-mail, fecha de nacimiento, teléfono y domicilio completo,el Organizador les remitirá, por el mismo medio, un Código que les permitirá participar de la Promoción. Se enviará un Código, por cada dibujo recibido y por persona, hasta un máximo de treinta (30) Códigos durante el Plazo de Vigencia.
              </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
                Los Datos Personales de los Participantesserán incluidos en una base de datos inscripta en el Registro Nacional de Bases de Datos Personales porMondelez Argentina S.A., para establecer perfiles determinados con fines promocionales y comerciales.Al momento de facilitar al Organizador sus Datos Personales, los Participantes prestan expreso consentimiento para que tales Datos Personales pueden ser utilizados por el Organizador con fines publicitarios y de marketing en general. El titular de los Datos Personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis (6) meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326 (Disposición 10/2008, artículo 1º, B.O. 18/09/2008). La Agencia de Acceso a la Información Pública, Órgano de Control de la Ley Nº 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al cumplimiento de las normas sobre Datos Personales. La información de los Participantes será tratada en los términos previstos por la Ley Nacional de Protección de Datos Personales Nº 25.326. El titular de los Datos Personales podrá solicitar el retiro o bloqueo total o parcial de su nombre de la base de datos, enviando un e-mail a
                <span className="correo"><a href="mailto:consultas.ar@mdlz.com" className="linkTxt"> consultas.ar@mdlz.com</a></span>
                </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
              Está prohibido y será anulado cualquier intento o método de participación en la Promoción que se realice por cualquier proceso, técnica o mecánica de participación distinta a la detallada en estas Bases. La utilización de técnicas de naturaleza robótica, repetitiva, automática, programada, mecanizada o similar llevará a la anulación de todos los registros realizados por el Participante, el que podrá asimismo ser descalificado.
              </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
                No podrán participar en la Promoción personas jurídicas, personas humanas menores de 13 años o domiciliadas en las provincias de Neuquén, Río Negro, Salta o Tierra del Fuego Antártida e Islas del Atlántico Sur o fuera del Territorio, los empleados del Organizador, de sus agencias de publicidad y promociones ni empleados de empresas relacionadas al Organizador, los parientes por consanguinidad o afinidad de tales empleados hasta el segundo grado inclusive ni sus cónyuges.
              </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
              La participación en la Promoción implica una declaración jurada de los Participantes en el sentido de que: (i) Son los propietarios exclusivos de las Fotos o poseen las autorizaciones necesarias para enviarlas; (ii) No han cedido a terceros los derechos de publicación o reproducción de las Fotos ni tampoco los derechos de publicación o reproducción de sus nombres o imágenes y (iii) Las Fotos no han sido obtenidas ilegalmente. El Organizador no asume responsabilidad por las Fotos ni por las consecuencias que la publicación de las mismas pudieran generar. Los Participantes asumen plena responsabilidad por las Fotos enviadas, liberando al Organizador de toda responsabilidad por cualquier reclamo de terceros, incluyendo derechos de autor, sin que esto implique limitación alguna.
              </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
              La sola participación en la Promoción implica que los Participantes ceden y transfieren al Organizador, sin cargo, la propiedad intelectual de las Fotos, para lo cual suscribirán toda la documentación adicional que pudiera resultar necesaria. El Organizador podrá disponer libre y gratuitamente de las Fotos; las cuales podrá inclusive editar o de cualquier otra forma modificar, musicalizar, utilizar y/o exhibir, sin necesidad de una autorización adicional, para cualquier propósito y en los medios que el Organizador disponga, sin limitación alguna.
              </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
            Ningún Participante podrá ganar más de un (1) Premio Final y de un (1) Premio Inmediato y en caso de que, por error, un mismo Participante sea elegido más de una vez en el Sorteo Final o en más de un Sorteo Inmediato sólo será válida su primera elección como Potencial Ganador. La probabilidad de ganar un Premio Inmediato dependerá de la cantidad de Premios Inmediatos puestos en juego en un día determinado, del total de Participantes de ese día y de la cantidad de Sorteos Inmediatos en que participe cada Participante. En el supuesto que durante un día determinado del Plazo de Vigencia se pusiesen en juego 2 Premios Inmediatos, un Participante hubiese participado de 1 Sorteo Inmediato y que se hubiesen producido durante dicho día 500 Sorteos Inmediatos, la probabilidad de tal Participante de resultar favorecido con un Premio será de 1 en 250. En el caso que para el Sorteo Final se hubiesen registrado 30.000 Participantes, la probabilidad de un Participante que hubiese participado en un sólo Sorteo inmediato -y hubiera ingresado una Foto en el Web Site - de ser favorecido con un (1) Premio de $ 150.000 o con un (1) Premio de Evento, será de 1 en 7.500.
          </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
              El Organizador no será responsable: (i) por ningún daño o perjuicio, de cualquier tipo que fuere, que pudieren sufrir los Participantes, ganadores o terceros, en sus personas o bienes, con motivo de o con relación a su participación en la Promoción o con relación a la utilización de los Premios; ni (ii) por fallas en la red telefónica, en la red Internet ni por desperfectos técnicos, errores humanos o acciones deliberadas de terceros que pudieran interrumpir o alterar el normal desarrollo de la Promoción.
            </p>
          </li>
          <li className="num pb-3">
                <p className="resp">
              Para cualquier cuestión judicial que pudiera derivarse de la realización de la Promoción, los Participantes y el Organizador se someterán a la jurisdicción de los tribunales nacionales ordinarios con sede en la Ciudad Autónoma de Buenos Aires.
            </p>
          </li>
          <li className="num pb-3">
            <p className="resp">
            El Organizador podrá ampliar la cantidad de premios ofrecidos y/o el Plazo de Vigencia. Cuando circunstancias no imputables al Organizador o no previstas en estas Bases o que constituyan caso fortuito o fuerza mayor lo justifiquen, el Organizador podrá suspender, cancelar o modificar la Promoción.
            </p>
          </li>
          <li className="num pb-3">
            <p className="resp">
            La participación en la Promoción implica la aceptación de estas Bases así como de las decisiones que adopte el Organizador, conforme a derecho, sobre cualquier cuestión no prevista en ellas.
          </p>
          </li>
        </ol>
        </div>
  </div>


    );
  }
}

export default Condiciones;
