/**
 * Created by usuario on 07/06/2017.
 */
import {Proyect} from './proyect'

export const PROYECTS: Proyect[] = [
  {
    id: 0,
    name: 'Kargaroo',
    date:"2015-2",
    imgsrc:"/assets/kargaroo.PNG",
    description:"Es un sistema que permite compartir medios de transporte.Se opta por mejorar la movilidad en la ciudad de Bogotá, con posible crecimiento de la cobertura, ahorro de tiempo en cuanto al desplazamiento de un lugar a otro y que a la vez sea amigable con el medio ambiente. Ofreciendo una mejor oportunidad de transporte con facilidad de acceso. Esta página web permitirá a las personas compartir información fácilmente y ponerse en contacto sin gastar mucho tiempo.",
    link:"http://kargaroo.herokuapp.com",
    github:"https://github.com/Kar-garoo/KarGaroo/tree/master",
    tecnologies:["Grails", "Gruvy", "Java", "HTML", "CSS", "JavaScript", "MYSQL"]
  }, {
    id: 1,
    name: 'Plano a la mano',
    date:"2017-1",
    imgsrc:"/assets/PlanoAlamano.PNG",
    description:"Se necesita el desarrollo Front-end y Back-end para una aplicación empresarial orientado a la ventas de productos. Esta debe tener persistencia de datos y que sea posible la visualización en dispositivos móviles. El proceso de cotización de los productos debe ser transparente para el cliente.",
    link:"https://express-store.herokuapp.com/",
    github:"https://github.com/seradiazpin/ExpressStore",
    tecnologies:["Nodejs", "Express", "JavaScript", "HTML", "CSS", "MongoDB"]
  },

  {
    id: 5,
    name: 'BDTF',
    date:"2016-2",
    imgsrc:"/assets/BDTF.PNG",
    description:"Buscador de términos médicos el cual haga las consultas en las siguientes bases de datos bioinformáticas: UMLS, PubMed, PubChem. Este buscador tendrá un modelo enfocado en enfermedades neurológicas, las cuales se relacionan con un deterioro en el sistema nervioso central, expresada en alteraciones psicomotoras, de memoria y aprendizaje, comportamentales, de percepción de la realidad, progresivos conforme a la edad hasta llegar muchas veces a un estado senil.Al buscador se le podrán aplicar diferentes criterios de búsqueda. Al hacer uso de este buscador se quiere facilitar el acceso y lectura de los datos almacenados en estas bases de datos para el usuario. Web No disponible",
    link:"https://github.com/seradiazpin/BTME",
    github:"https://github.com/seradiazpin/BTME",
    tecnologies:["Java","JEE", "HTML", "CSS"]
  },
  {
    id: 2,
    name: 'VR Web',
    date:"2017-1",
    imgsrc:"/assets/vr.PNG",
    description:"Museo virtual para asignatura Imagen Expandida 2017-1 Universidad Javeriana.Se uso A-Frame para el desarrollo",
    link:"https://seradiazpin.github.io/I-Gallery/",
    github:"https://github.com/seradiazpin/I-Gallery",
    tecnologies:["A-Frame", "JavaScript", "HTML", "CSS"]
  }, {
    id: 3,
    name: 'Detector señales de transito',
    date:"2017-1",
    imgsrc:"/assets/result2.png",
    description:"Detectory  de algunas de las señales preventivas y reglamentarias más comunes en la ciudad de Bogotá, el reconocedor sería usando video para una posible utilización en tiempo real.",
    link:"https://seradiazpin.github.io/I-Gallery/",
    github:"https://github.com/seradiazpin/TSR-COLOMBIA",
    tecnologies:[ "OpenCV","Python", "SKlearn"]
  },
  {
    id: 4,
    name: 'Cuida tu piel',
    date:"2015-2",
    imgsrc:"/assets/piel.PNG",
    description:"Pagina web para materia Gerencia y proyectos Universidad Nacional de colombia 2015, para proyecto de concienciación sobre los peligros de no usar protector solar",
    link:"https://cuidatupiel.herokuapp.com/",
    github:",https://github.com/seradiazpin/CuidaTuPiel",
    tecnologies:["Grails", "Gruvy", "JavaScript", "HTML", "CSS"]
  },
  {
    id: 5,
    name: 'RECICLAPP',
    date:"2016-2",
    imgsrc:"/assets/reciclapp.PNG",
    description:"Prototipo de la aplicacion que se planteo para el proyecto de la asignatura de TPI de la Universidad Nacional de Colombia 2016-02.La solución que se plantea en este proyecto es la creación de una aplicación móvil que, de forma interactiva, permite un fácil acceso a información útil e impactante acerca de la correcta clasificación de muchos de los residuos sólidos (reciclables, electrónicos, medicinas) y establece un ambiente ecológico mediante el control y medición de las contribuciones de la comunidad.",
    link:"https://seradiazpin.github.io/EcoApp/views/mainmenu.html",
    github:"https://github.com/seradiazpin/EcoApp",
    tecnologies:["JavaScript","D3.js", "HTML", "CSS"]
  }

];
