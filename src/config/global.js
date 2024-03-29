export default {
  global: {
    componenteFormativo: 'Recolección de información',
    descripcionCurso:
      'El desarrollo de <em>software</em> tiene como base la recopilación de datos, la cual, les permite a los encargados, previo proceso de responder preguntas relevantes por parte de los interesados, mostrar claramente la forma de llevar procesos para poder evaluar y mostrar resultados e incluso, anticipar las posibles tendencias y/o mejoras futuras a las soluciones dadas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block', ''],
        imagen: require('@/assets/curso/portada/decorativo1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/decorativo2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/decorativo3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/decorativo4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/decorativo5.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Técnicas de recolección de información',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ingeniería de requisitos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas para captura de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Casos de uso',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: '<em>Storyboard</em>',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Técnicas de recolección de información',
      referencia:
        'Orellana López, D. (2006).  Técnicas de recolección de datos en entornos virtuales más usadas en la investigación cualitativa. <i>Revista de Investigación Educativa</i>, 24(1), p. 205-222.',
      tipo: 'Artículo',
      link: 'https://www.redalyc.org/pdf/2833/283321886011.pdf',
    },
    {
      tema: 'Ingeniería de requisitos',
      referencia:
        'Sommerville, I. (2011). <i>Ingeniería de software</i>. Novena Edición. Pearson Educación',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=3313',
    },
    {
      tema: 'Ingeniería de requisitos',
      referencia:
        'Cervantes Maceda, H, Velasco-Elizondo, P, & Castro Careaga, L. F. (2016). <i>Arquitectura de software</i>. Cengage Learning Editores S.A. ',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=1983',
    },
  ],
  glosario: [
    {
      termino: '<em>Elicitación</em>',
      significado:
        'se refiere al paso de información, en forma clara y sin interrupciones de un ser humano a otro.',
    },
    {
      termino: '<em>Extend</em>',
      significado:
        'se utiliza para modelar una parte que realmente es opcional dentro del sistema.',
    },
    {
      termino: '<em>Include</em>',
      significado:
        'se utiliza para enaltecer o enriquecer un caso de uso con otro caso de uso.',
    },
    {
      termino: '<em>Storyboard</em>',
      significado:
        'es una serie de dibujos secuenciales, que, muestran todos y cada uno de los planos de una obra audiovisual.',
    },
    {
      termino: '<em>Focus Group</em>',
      significado:
        'el grupo focal o grupo de enfoque (focus group en inglés) es una técnica cualitativa de estudio, que se basa en las opiniones o actitudes de un grupo muy específico, utilizada en desarrollo de <em>software</em>.',
    },
    {
      termino: 'Ingeniería del <em>software</em>',
      significado:
        'es una parte importante de las ciencias de la computación, o una ramificación de ella, que estudia la construcción de <em>software</em> seguro y de alta calidad, basado en métodos y técnicas de ingeniería, además, brinda un efectivo soporte operacional y de otra índole, donde sobresale el mantenimiento',
    },
    {
      termino: 'Investigación cualitativa',
      significado:
        'es el método científico de observación directa para extraer o recepcionar datos no numéricos.',
    },
    {
      termino: 'Prototipo',
      significado:
        'consiste en una representación supuesta pero concreta y muy aterrizada de una parte específica o la totalidad de un proyecto, idea de negocio, e incluso, un producto o servicio.',
    },
    {
      termino: 'Roles',
      significado:
        'funciones que un individuo desempeña en un proceso, solución, proyecto, situación, etc.',
    },
    {
      termino: '<em>Stakeholders</em>',
      significado:
        'se trata del participante, integrante, parte interesada, puede ser un individuo, una empresa u organización, que tiene cualquier tipo de participación directa, de forma interna o externa en un proceso que estudiamos y pretendemos sistematizar.',
    },
  ],
  referencias: [
    {
      referencia:
        'Conesa Caralt, J. & Casas Roma, J. (2014). <em>Diseño conceptual de bases de datos en UML</em>. Barcelona. Editorial UOC',
      link: '',
    },
    {
      referencia:
        'Echeverri, J. & González, L. (2013). <em>Reflexiones sobre ingeniería de requisitos y pruebas de software</em>. Medellín. Corporación universitaria Remington',
      link: '',
    },
    {
      referencia:
        'Jiménez, C. (2021). UML. <em>Arquitectura de aplicaciones en JAVA. C y Python</em>. 2 Edición. ',
      link: '',
    },
    {
      referencia:
        'HubSpot. (2022). <em>Qué es una encuesta, para qué sirve y qué tipos existen</em>.',
      link: 'https://blog.hubspot.es/service/que-es-una-encuesta',
    },
    {
      referencia:
        'Monroy, M. y Sánchez, N. (2018). <em>Metodología de la investigación. Lapizlázuli ediciones</em>.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/172512',
    },
    {
      referencia:
        'Rodríguez, E. (2005). <i>Metodología de la investigación</i>. Villahermosa - México: Universidad de Juárez Autónoma de Tabasco. ',
      link:
        'https://www.academia.edu/37714580/Metodolog%C3%ADa_de_la_investigaci%C3%B3n_Ernesto_A_Rodr%C3%ADguez_Moguel_LIBROSVIRTUAL',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
