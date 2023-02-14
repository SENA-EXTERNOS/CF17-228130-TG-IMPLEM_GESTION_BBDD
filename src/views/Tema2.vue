<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ingeniería de Requisitos

    p.mb-5 Es el proceso que involucra la selección, el análisis y la verificación de las necesidades del cliente, para implementar un sistema de <i>software</i>; esta ingeniería de requisitos, nos permite tener claras las especificaciones demandadas por el <i>software</i> de forma correcta y completa, proporcionando una mejora en su comprensión, así como en la definición del programa y su complejidad.

    h3(data-aos="fade-right") 
      i.fas.fa-square.cac.me-3
      |Concepto
  
    .row.justify-content-center.align-items-stretch.mb-5 
      .col-xl-12
        p(data-aos="fade-down") Antes de adentrarnos en lo que este tema conlleva, es preciso hablar un poco desde su concepción:
        p(data-aos="fade-down") La ingeniería de requisitos se entiende como el proceso de recopilar, analizar y verificar los pedidos o necesidades del cliente, para brindar una solución de <i>software</i>; en palabras más técnicas, es una aproximación multidisciplinar que lleva al desarrollo de soluciones de sistemas informáticos, eficazmente balanceados y efectivos; esto se materializa mediante el concurso de un conjunto de herramientas que el cliente nos permite definir, con las siguientes características:
    
    .row.justify-content-center.align-items-stretch.my-5           
      .col-lg-10.my-3(data-aos="fade-right")
        .cajon.color-primario.p-3.p-sm-4          
              ul.lista-ul--color.mb-0
                li 
                  i.fas.fa-check( style="color: #084A93")
                  p.mb-0 Cero ambigüedades, de tal manera que todos los integrantes del equipo conozcan, a ciencia cierta, qué se necesita realizar.
                li 
                  i.fas.fa-check( style="color: #084A93")
                  p.mb-0 La propuesta resultante, debe ser completamente comprendida y aprobada por el cliente quien, previamente, dará su visto bueno total y absoluto; además, debe acompañar todo el proceso del ciclo de vida de desarrollo del #[i software].
                li 
                  i.fas.fa-check( style="color: #084A93")
                  p.mb-0 Nunca perder el rumbo de los objetivos frente a las necesidades del proyecto, como condición indispensable para lograr los planes trazados.

    .row.justify-content-center.align-items-stretch.my-5 
      .col-xl-12
        p(data-aos="fade-down") Estos propósitos se pueden conseguir, gracias a que la ingeniería de requisitos se centra en clarificar los requerimientos al inicio del proyecto, continuando incluso con el diseño para, posteriormente validar y verificar el problema completo, como un todo.

    .titulo-segundo.color-acento-contenido    
      h3(data-aos="zoom-in-left").mt-5 Fases
    
    .row
      .col-xl-12
        p(data-aos="fade-down") La ingeniería de requisitos, al desarrollar un método estructurado, presenta unas fases que debemos conocer:
    
    .row.justify-content-center.mb-5
      .col-8.col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema2/img2_1.svg", alt="alt")
      .col-lg-8
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Inicio") Todo este proceso puede partir de una simple charla informal, en la cual la persona interesada (léase cliente) narra de forma libre y espontánea, su real necesidad sustentándola suficientemente.

          p(numero="2" titulo="Obtención / Extracción") Mediante la utilización de las herramientas de levantamiento de información antes estudiadas, se recolecta de forma organizada la información de los requisitos del proyecto.

          p(numero="3" titulo="Elaboración / Modelado") Acto seguido, se debe analizar la información levantada y crear los modelos necesarios para darle la forma adecuada al proyecto. Estos modelos son los insumos que se requieren para el diseño de sistemas y para la creación de todas las especificaciones de dicho #[i software].

          p(numero="4" titulo="Negociación") Se continúa con una representación del #[i software], previa sustentación de esta al cliente, de tal forma que se llegue a un acuerdo que permita, modificar, priorizar e incluso eliminar aspectos.

          p(numero="5" titulo="Especificación") Este es el producto final de la ingeniería de #[i software]; es decir, la base fundamental o materia prima para todas las actividades de su desarrollo, previa validación con los actores del proceso.

    .titulo-segundo.color-acento-contenido    
      h3(data-aos="zoom-in-left").mt-5 Técnicas

    .row
      .col-xl-12
        p(data-aos="fade-down") Para realizar la recopilación de la información de los requisitos de un cliente se puede hacer a través de diversas técnicas.  Se presentan a continuación algunas de estas:
    
    .tarjeta.tarjeta--azul.p-4
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h3 Cascada
            p Se realizan todos los pasos sin iteraciones; es decir, se obtienen los requisitos, se escribe el código y se entrega el proyecto.          
          .col-md-6
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/img2_2.svg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center.my-lg-4          
          .col-md-6.mb-4.mb-md-0
            h3 Modelo en V (Verificación y Validación)
            p Luego de cada fase se realiza un proceso de verificación y validación, antes que inicie la siguiente  fase, lo cual implica una armonía muy sólida entre el diseño-desarrollo-pruebas.
          .col-md-6
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/img2_3.png', alt='Texto que describa la imagen')
        
        .row.justify-content-center.align-items-center.my-lg-4          
          .col-md-6.mb-4.mb-md-0
            h3 Modelo en Espiral
            p Es una mezcla de iteraciones/validaciones, apoyados en prototipos evolutivos que nos permiten un rápido desarrollo #[i fast prototyping].
          .col-md-6
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/img2_4.svg', alt='Texto que describa la imagen')
        
        .row.justify-content-center.align-items-center.my-lg-4          
          .col-md-6.mb-4.mb-md-0
            h3 Prototipado
            p Aunque se utiliza cada vez menos, consiste en una versión del sistema, construida desde el mismo análisis, que tiene la ventaja de que el cliente puede apreciar el producto en una fase muy temprana, lo cual permite un mayor control del proyecto a medida que avanza y evoluciona.
          .col-md-6
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/img2_5.svg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center.my-lg-4          
          .col-md-6.mb-4.mb-md-0
            h3 Modelos ágiles
            p Son completamente interactivos, confiables y nos brindan un ahorro de tiempo bastante significativo, sin embargo, se puede caer en interpretaciones erróneas de requisitos por su poco análisis y prematuro desarrollo, lo cual, además, puede dificultar sus pruebas. En estas metodologías sobresale el #[i Scrum].
          .col-md-6
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/img2_6.svg', alt='Texto que describa la imagen')
        
    .titulo-segundo.color-acento-contenido    
      h3(data-aos="zoom-in-left").mt-5 Elicitación

    .row.justify-content-center.align-items-center.my-lg-4                
      .col-md-6
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/1.svg', alt='Texto que describa la imagen')
      .col-md-6.mb-4.mb-md-0
        p En el idioma español cotidiano,<b> elicitar</b> se refiere al paso de información, de un ser humano a otro, de forma clara y sin interrupciones; aunque es un término muy ligado a la psicología, en la ingeniería de requisitos se utiliza este vocablo para hacer énfasis en la necesidad de conocer de manera amplia y suficiente el sistema actual, sus ventajas, desventajas, además de potenciar la comunicación con el cliente en busca de identificar realmente sus necesidades de todo tipo y brindarle una solución óptima.  
        br
        .cajon.color-acento-contenido.p-3.p-sm-4
          p.mb-0 La elicitación busca el conocimiento profundo y concreto con respecto al dominio de un problema, por lo que se requiere de una interacción clara, fluida y permanente con el cliente, o con las personas interesadas, lo que permite que la propuesta formulada tenga total comprensión y aceptación, dando de esta forma, cuerpo a la ingeniería de requisitos y a la implementación de soluciones a nivel de <i>software.</i>       

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
