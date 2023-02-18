<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Técnicas de recolección de información
    .row
      .col-xl-12
        p(data-aos="fade-down") La base fundamental en todo proyecto informático, especialmente en el campo del desarrollo de #[i software], es la información inicial del cliente, mejor conocido como los requerimientos. Para poder acceder a dicha información, debemos recolectar los datos que se necesiten, lo cual podemos definir como el uso de distintas y diversas técnicas y herramientas que tienen disponibles analistas, desarrolladores, etc. para ser utilizadas en los sistemas de información. Específicamente en el campo del desarrollo de #[i software], las más utilizadas y que más se ajustan a nuestras necesidades son: entrevistas, encuestas, cuestionarios, observación y #[i focus gruop]. Los instrumentos mencionados se deben aplicar con el propósito de obtener la información necesaria para comenzar el proyecto.

    .titulo-segundo.color-acento-contenido
      h3(data-aos="zoom-in-left").mt-5 Entrevistas

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      |Entrevistas

    p(data-aos="fade-down").mb-5 Como aspecto principal, es necesario explicar en qué consiste la entrevista teniendo en cuenta que a través de ella se presenta un intercambio de opiniones por medio de un diálogo entre 2 o más personas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down").fondo-full
      .col-lg-12
        .p-5
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/info_1.svg', alt='')

    .row.mb-4.mb-md-5(data-aos="fade-down")
      p(data-aos="fade-down").mb-1 Se presentan a continuación #[i tips] a tener en cuenta al momento de realizar la entrevista.
    TabsA.color-acento-botones
      .tarjeta.color-acento-botones--borde.p-4(titulo="Preparar el cuestionario")
        .row.align-items-center
          .col-xl-8
            p(
            :style="{'background-color': '#B9DDFC'}"
          ).p-4 Determinante tener claro cuáles son sus objetivos para que, basados en ellos, se tengan los insumos necesarios para obtener mejores y más completas respuestas.
          .col-xl-4.mb-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img2.png', alt='')


      .tarjeta.color-acento-botones--borde.p-4(titulo="Decidir el lugar de la<br> entrevista")
        .row.align-items-center
          .col-xl-8
            p(
            :style="{'background-color': '#B9DDFC'}"
          ).p-4 Aunque actualmente se utilizan mucho las tecnologías de la información y las comunicaciones (TIC), sigue siendo fácil hacer una entrevista presencial para obtener los datos correctos y requeridos. En caso  de que no se pueda, se realiza una entrevista virtual para obtener los mismos resultados.
          .col-xl-4.mb-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img2.png', alt='')

      .tarjeta.color-acento-botones--borde.p-4(titulo="Hacer sentir cómodo y<br> con confianza al entrevistado")
        .row.align-items-center
          .col-xl-8
            p(
            :style="{'background-color': '#B9DDFC'}"
          ).p-4 Si el entrevistado se siente cómodo, sus respuestas serán más sinceras y precisas, lo cual repercute en el logro de objetivos.
          .col-xl-4.mb-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img2.png', alt='')

    .row.mb-4.mb-md5.my-5(data-aos="fade down") ¿Cuáles son los tipos de preguntas que podemos utilizar para una entrevista?

    .bg_img_01
      .row.justify-content-center.mb-5
        .col-sm-6.col-lg-5.mb-4.mb-lg-0
          .crd.crd--grayGrad
            .bottomCircle.mb-3
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img3.png', alt='').mb-5.img4.m-auto( style="width:20%")
            h4.text-center Abiertas
            p Son las que requieren de una mayor descripción y/o explicación; es decir, las que, para dar una respuesta, demandan mayor oratoria. Esto hace que sean sumamente eficaces y efectivas, más completas y de mayor utilidad, incluso, sirven de punto de partida para una nueva pregunta y, por ende, fluye la conversación con el entrevistado.

        .col-sm-6.col-lg-5.mb-4.mb-lg-0
          .crd.crd--grayGrad
            .bottomCircle.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/img3.png', alt='').mb-5.img4.m-auto( style="width:20%")
            h4.text-center Cerradas
            p Son las que limitan las respuestas del entrevistado, son breves, basta un simple sí o no. Sin embargo, pueden ser para proporcionar un dato específico, pero limitando su respuesta, por ejemplo, la clásica pregunta para seleccionar una opción dentro de unas posibilidades. Este tipo de preguntas son más utilizadas en las encuestas.

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      |Cuestionarios

      .bloque-derecha.my-5(data-aos="zoom-in")
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5( style="background-color: #FEE3A8")
          .bloque-texto-g__img.d-flex.align-items-center( style="background-color: #B9DDFC").p-4
            img(src='@/assets/curso/temas/tema1/img5.svg', alt='' style='width: 427px').m-auto
          .bloque-texto-g__texto--border.p-2.d-inline-block
            .bloque-texto-g__texto.p-4
              p.mb-0 #[span El cuestionario] es un documento compuesto por una serie de preguntas coherentes, muy bien organizadas tanto en secuencia como en estructura, que parte de una planificación específica, esperando obtener respuestas que despejen las dudas planteadas. Los cuestionarios dan la posibilidad de un análisis más detallado, determinar comportamientos, tendencias y posturas. Si bien es cierto que son utilizados en todas las áreas del saber, en los proyectos de desarrollo de #[i software], cumplen con una función sobresaliente. Aunque es innegable su ahorro de tiempo, sus respuestas cortas, los pueden hacer ver como incompletos.

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      |Encuestas

    .row.justify-content-center.align-items-center.my-5
      .col-xl-10
        .bloque-izquierda.mb-5(data-aos="zoom-in")
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5( style="background-color: #FEE3A8")
            .bloque-texto-g__img.d-flex.align-items-center( style="background-color: #B9DDFC").p-4
              img(src='@/assets/curso/temas/tema1/img6.svg', alt='' style='width: 55%').m-auto
            .bloque-texto-g__texto--border.p-2.d-inline-block
              .bloque-texto-g__texto.p-4
                p.mb-0 De acuerdo con el portal web HubSpot (2022), “una encuesta es un método de investigación que recopila información, datos y comentarios por medio de una serie de preguntas específicas. La mayoría de las encuestas se realizan con la intención de hacer suposiciones sobre una población, grupo referencial o muestra representativa”.

    .titulo-segundo.color-acento-contenido
      h3(data-aos="zoom-in-left").mt-5 Observación directa
    .row.justify.content-center.align-items-center
      .col-xl-4
        figure(data-aos="zoom-in")
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/img7.png', alt='')
      .col-xl-8
        .cajon-b.color-acento-contenido.p-3.mb-5.abajo-derecha
          p(data-aos="fade-down") La observación directa consiste principalmente en prestar atención al proceso a sistematizar en su quehacer diario; es decir, como se realiza normalmente una actividad. No obstante, es necesario advertir que el observador no puede participar de ninguna forma en este proceso, de lo contrario, los datos que se obtengan no van a ser válidos.  Otra característica que debemos recalcar en la observación directa es su larga duración, principalmente para garantizar que los individuos que participan en el proceso se acomoden y, por consiguiente, actúen de forma natural, además, para poder obtener la información necesaria y completa del proceso observado.

    .titulo-segundo.color-acento-contenido
      h3(data-aos="zoom-in-left").mt-5 #[i Focus Group]

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-8
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img8.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La definición normal de #[i Focus Group] nos dice que es un método de investigación cualitativa, en la que se reúne una serie de participantes de una entrevista, para expresar sus opiniones acerca de un producto o servicio. Ya específicamente, en el ámbito del desarrollo de #[i software], se aplica como método muy útil que nos ayuda a estudiar propuestas teóricas a partir del juicio de personas expertas y no tan expertas, basadas en su experiencia, aceptan o niegan propuestas de proyectos.
    .row
      .col-xl-12
        p(data-aos="fade-down") Al estar el #[i focus group] compuesto por un pequeño grupo de participantes, se pueden presentar los siguientes roles:

    .row.justify-content-center.align-items-center
      .col-lg-10
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img9.svg', alt='')


          .tarjeta.color-acento-contenido.p-3(x="12%" y="45%" numero="1")
            .row.justify-content-evenly.align-items-center.mb-3
              .col-9
                .h5.mb-0 Moderador
              .col-auto.d-none.d-lg-block
                .bulletNumber
            p Integrante del grupo investigador que administra y/o coordina la reunión-discusión; debe tener el suficiente tacto y cuidado para no opinar, ni mucho menos influenciar la postura de los demás participantes; además, tiene la tarea de controlar la reunión, para evitar que se salga de contexto y se conserve centrada en los objetivos marcados.

          .tarjeta.color-acento-contenido.p-3(x="68%" y="42%" numero="2")
            .row.justify-content-evenly.align-items-center.mb-3
              .col-9
                .h5.mb-0 #[i Relator]
              .col-auto.d-none.d-lg-block
                .bulletNumber
            p Integrante del grupo que tiene la función de ejecutar la captura, registro y todos los detalles que genere la reunión en materia de información.

          .tarjeta.color-acento-contenido.p-3(x="78%" y="70%" numero="3")
            .row.justify-content-evenly.align-items-center.mb-3
              .col-9
                .h5.mb-0 Grupo Investigador
              .col-auto.d-none.d-lg-block
                .bulletNumber
            p Integrantes del grupo que investigan y abordan una temática específica, con el conocimiento y experiencia suficientes en el tema de estudio y en la aplicación de #[i Focus Group].

          .tarjeta.color-acento-contenido.p-3(x="43%" y="60%" numero="4")
            .row.justify-content-evenly.align-items-center.mb-3
              .col-9
                .h5.mb-0 Participantes
              .col-auto.d-none.d-lg-block
                .bulletNumber
            p Integrantes que, basados en su criterio, ejecutan y engrandecen el debate objeto de la reunión, preferiblemente, deben ser expertos en el tema de estudio, puesto que son los que aportan el conocimiento del tema y las mejores formas de aplicación.

    .row.justify-content-center.mb-5
      .col-xl-12
        p(data-aos="fade-down")
          h3(data-aos="fade-down") ¿Cómo organizo un #[i Focus Gruop]?

    .row.justify-content-center.mb-5
      .col-lg-10
        .border-dash-rows.p-3
          .bg-gradient.p-4
            .bg-white.p-4
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  .col-12
                    p Es importante determinar de forma clara y precisa el objetivo del grupo y edificar el planteamiento del problema, centrándose en el producto #[i software] a construir.
                li
                  i.fas.fa-check
                  .col-12
                    p Realizar una lista de las preguntas que se van a trabajar, asegurando que se encuentren completamente centradas y enfocadas en los objetivos del ítem anterior.
                li
                  i.fas.fa-check
                  .col-12
                    p Se agendan las sesiones del #[i focus group], con la antelación y duración requerida por la temática, aunque en promedio estas reuniones tienen una duración dos horas.
                li
                  i.fas.fa-check
                  .col-12
                    p Se debe determinar el lugar ideal, con las características que el evento implica, determinando explícitamente la lista de asistentes y organizando las comodidades que el caso amerite. Importante tener en cuenta el mantener una excelente hidratación en los asistentes, además de contar con las medidas sanitarias respectivas.
                li
                  i.fas.fa-check
                  .col-12
                    p Finalmente, se recomienda, tener un orden del día preestablecido, de ser posible, de forma escrita, muy bien presentado y fácil de manipular y entender.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass">
.fondo-full
  margin-inline: -3.4rem
  background: rgba(185,221,252,.35)
</style>
