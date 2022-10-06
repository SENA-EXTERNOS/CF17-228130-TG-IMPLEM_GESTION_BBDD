<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ingeniería de Requisitos

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.1 Concepto
  
    .row
      .col-xl-12
        p(data-aos="fade-down") Antes de adentrarnos en lo que este tema conlleva, es preciso hablar un poco desde su concepción:
    
    .row.justify-content-center.align-items-stretch.my-5           
      .col-lg-10.my-3(data-aos="fade-right")
        .cajon.color-primario.p-3.p-sm-4
          p La ingeniería de requisitos se entiende como el proceso de recopilar, analizar y verificar los pedidos o necesidades del cliente para brindar una solución de #[i software], en palabras más técnicas, es una aproximación multidisciplinar que lleva al desarrollo de soluciones de sistemas informáticos eficazmente balanceados y efectivos; lo cual se materializa mediante el concurso de un conjunto de herramientas que el cliente nos permite definir con las siguientes características: 
          .row.justify-content-center.align-items-stretch.my-5 
            .col-lg-10
              ul.lista-ul--color.mb-0
                li 
                  i.fas.fa-check
                  p.mb-0 Cero ambigüedades tal que todos los integrantes del equipo sepan a ciencia cierta qué se necesita hacer.
                li 
                  i.fas.fa-check
                  p.mb-0 La propuesta resultante, debe ser completamente comprendida y aprobada por el cliente, el cual previamente debe dar su visto bueno total y absoluto, además debe acompañar todo el proceso del ciclo de vida de desarrollo de #[i software].
                li 
                  i.fas.fa-check
                  p.mb-0 Nunca perder el rumbo de los objetivos versus necesidades del proyecto, como condición indispensable para logar los planes trazados.
                li 
          p Estos propósitos se pueden conseguir, gracias a que la ingeniería de requisitos se centra en clarificar los requerimientos al inicio del proyecto, continuando incluso con el diseño para posteriormente validar y verificar el problema completo como un todo.
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.2 Fases
    
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

          p(numero="3" titulo="Elaboración/ Modelado") Acto seguido, se debe analizar la información levantada y crear los modelos necesarios para darle la forma adecuada al proyecto. Estos modelos son los insumos que se requieren para el diseño de sistemas y para la creación de todas las especificaciones de dicho #[i software].

          p(numero="4" titulo="Negoaciación") Se continúa con una representación del #[i software], previa sustentación de esta al cliente, de tal forma que se llegue a un acuerdo que permita, modificar, priorizar e incluso eliminar aspectos.

          p(numero="5" titulo="Especificación") Este es el producto final de la ingeniería de #[i software]; es decir, la base fundamental o materia prima para todas las actividades de su desarrollo, previa validación con los actores del proceso.

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.3 Técnicas

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
        
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.4 Elicitación

    .row.justify-content-center.align-items-center.my-lg-4                
      .col-md-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img2_7.svg', alt='Texto que describa la imagen')
      .col-md-9.mb-4.mb-md-0
        p En el idioma Español cotidiano, elicitar se refiere al paso de información, en forma clara y sin interrupciones de un ser humano a otro; aunque es un término muy ligado a la psicología, en la ingeniería de requisitos se utiliza este vocablo para hacer énfasis en la necesidad de conocer en forma amplia y suficiente el sistema actual, sus ventajas, desventajas, además de potenciar la comunicación con el cliente en busca de identificar realmente sus necesidades de todo tipo y brindarle una solución óptima.
        br
        .cajon.color-primario.p-3.p-sm-4
          p Esta imagen deja muy claro que la elicitación busca el conocimiento profundo y concreto del dominio del problema, la interacción clara, fluida y permanente con el cliente,  de tal forma que la propuesta formulada sea de su total comprensión y aceptación.          

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
