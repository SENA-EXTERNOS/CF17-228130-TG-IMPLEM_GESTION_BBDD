<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Herramientas para captura de requisitos
    
    .row.justify-content-center.align-items-center.my-lg-4.mb-5
      .col-12
        p.mb-0 Cuando hablamos de “#[b captura de requisitos]” nos referimos específicamente a la forma de descubrir, descifrar y obtener cada uno de los requisitos funcionales y no funcionales del proyecto, con el objeto de definir de forma clara y concisa sus requerimientos.  
    .row.justify-content-center.align-items-center.my-lg-4.mb-5
      .col-xl-12
        .bloque-der.mb-5(data-aos="zoom-in")
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5( style="background-color: rgb(255 179 11 / 75%)")
            .bloque-texto-g__img.d-flex.align-items-center( style="background-color: #B9DDFC").p-4
              img(src='@/assets/curso/temas/tema3/img3_1.png', alt='' style='width: 85%').m-auto
            .bloque-texto-g__texto--border.p-2.d-inline-block
              .bloque-texto-g__texto.p-4
                p.mb-0 La alta demanda de desarrolladores de #[i software] es innegable y crece de forma exponencial, especialmente en el ámbito de las bases de datos; los anuncios de vacantes piden una serie de requisitos muy amplios, en cuanto a conocimiento y experiencia; sin embargo, muy pocos mencionan la importancia de los requisitos, como si la tendencia fuera el dejar de lado la captura de requisitos, lo cual se constituye en el primer y más grave error en los proyectos de desarrollo de #[i software]. Sin lugar a dudas, la mencionada captura de requisitos y sus técnicas de extracción de información, es uno de los momentos más importantes en el ciclo de vida de desarrollo de #[i software]. En la misma tónica están los expertos y estudiosos del tema que se centran básicamente en cómo se plasman y definen los requisitos sin ir más allá; es decir, en menciona el lenguaje natural, diagramas de casos de uso, historias de usuario y etc., pero, en definitiva, ninguno o casi ninguno se centra en explicar y resaltar la importancia de conseguir todos y cada uno de los requisitos de las personas implicadas en el sistema #[i Stakeholders].
    .row.justify-content-center.align-items-center.my-lg-4.mb-5
      .col-xl-12
        .bloque-izq.mb-5(data-aos="zoom-in")
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5( style="background-color: rgb(255 179 11 / 75%)")
            .bloque-texto-g__img.d-flex.align-items-center( style="background-color: #B9DDFC").p-4
              img(src='@/assets/curso/temas/tema3/img3_2.png', alt='' style='width: 75%').m-auto
            .bloque-texto-g__texto--border.p-2.d-inline-block
              .bloque-texto-g__texto.p-4
                p.mb-0 Expertos en la ingeniería de requisitos afirman que la captura de requisitos es y seguirá siendo, una de las fases más críticas y determinantes para el éxito de un proyecto de #[i software]. Lo anterior, entre otras razones, se debe simplemente a que es mucho más barato, corregir errores al inicio, independientemente que sea; por ejemplo, un error o malinterpretación de dichos requisitos. En esta fase, donde apenas iniciamos el proceso, como la de análisis, se puede requerir hasta veinte veces menos esfuerzo que en la corrección de cualquier error, sin pensar siquiera que los mencionados errores, sean detectados en las pruebas unitarias, que entonces serían cincuenta veces menos su corrección y, aunque suene como una película de terror, tener que corregir durante las pruebas de integración, donde estaríamos hablando de unas doscientas veces menos esfuerzo.            
    
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 3.1 Casos de uso

    p Ahora bien, la pregunta que se genera es ¿cuándo usar estas herramientas para la captura de requisitos, con el fin de facilitar dicha captura? Esta tarea no necesariamente es fácil, obtener los requerimientos puede llevarnos a enfrentar a las personas que no tienen claras las necesidades del software.
    p.mb-5 Con el fin de ubicar al aprendiz frente a los casos de uso de estas técnicas, e importante hacer una conceptualización y revisión temporal al respecto.

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-12
          p(data-aos="fade-down") Veamos un poco del tema, a través del siguiente esquema:

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-6
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema3/img3_3.png", alt="alt")
    
    .row
      .col-xl-12
        p(data-aos="fade-down") 
          h3(data-aos="fade-down") Antecedentes
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema3/img3_4.png", alt="alt")
      .col-xl-6
        .cajon.color-acento-contenido.p-4( style="background-color: #FFECC1")
          p.mb-0(data-aos="fade-down") Lenguaje Unificado de Modelado “UML”(#[i Unified Modeling Language]), es el más reconocido, utilizado y difundido en la actualidad en cuanto a modelado de sistemas de #[i software]. Además del manejo gráfico, sobresale también su estandarización mundial.
    
       
    p(data-aos="fade-down") Al igual que la historia de la humanidad, en el desarrollo de #[i software] se fue dando la evolución en la medida de las necesidades, de esta forma, en la década de los 90, los sistemas de información se hicieron más complejos, cada vez era más difícil construir un sistema “desde cero”, características como el mantenimiento y la reutilización de código fuente, se alejaban cada vez más de los desarrolladores, aumentando considerablemente los cronogramas y tiempos requeridos para tal fin. #[br]#[br] Posteriormente surgieron los lenguajes de programación orientados a objetos, trayendo consigo, como es apenas lógico, los primeros lenguajes de modelado orientados a objetos. En esa misma época, aparecieron las primeras publicaciones, en forma masiva, sobre análisis y diseños orientados al tema. Era el momento de la creación de un lenguaje de modelado unificado. Fue así como a inicios de esos mismos años, los métodos orientados a objetos de Grady Booch y James Rumbaugh se difundieron y utilizaron muy ampliamente. Consecuentemente, en octubre de 1994, 
      span.text-bold( style="color: #000") #[i Rational Software Corporation ]  
      | (que desde febrero de 2003 hace parte de IBM) inició su proyecto para la creación de un lenguaje de modelado unificado. El primer paso fue acordar una estandarización de la notación (lenguaje), que lo lograron integrando el Método Booch (de Grady Booch), la técnica de modelado de objetos (OMT por sus siglas en inglés, de James Rumbaugh) y la Ingeniería de #[i software] orientada a objetos (OOSE por sus siglas en inglés de Ivar Jacobsen), complementando con otros pocos elementos de otros métodos, publicando la nueva notación bajo el nombre UML (#[i Unified Modeling Language]).
    
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-6
        .cajon.color-primario.p-3.p-sm-4.p-4(style="background-color: #084a9326")
          p(data-aos="fade-down") Lo más sobresaliente y admirable de UML, realmente no es su contenido, sino su estandarización a un solo lenguaje unificado, que el mundo entero respeta y acata, lo cual es uno de los avances más significativos en la historia del desarrollo de #[i software].
    
    .row
      .col-xl-12
        p(data-aos="fade-down") 
          h3(data-aos="fade-down") ¿Cómo se compone UML?

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-12
          p(data-aos="fade-down") Al ser un Lenguaje Unificado de Modelado visual y semántico, este se compone por una serie de diagramas dentro de los que se destacan (organizados por su tipo):
    
    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema3/img3_5.svg", alt="alt").img400.m-auto
        .col-lg-8
          AcordionA.mb-2(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row.justify-content-center.mb-4(titulo="Diagramas estructurales")
              .col-10
                p.mb-0 Como su nombre lo indica, muestran la estructura estática del sistema y cada una de sus partes en sus diferentes niveles de abstracción, los cuales son: 
                  br
                  br
                  ul.lista-ul--color.mb-4
                    li 
                      i.fas.fa-check
                      p.mb-0 Diagrama de clases.
                    li 
                      i.fas.fa-check
                      p.mb-0 Diagrama de componentes.
                    li 
                      i.fas.fa-check
                      p.mb-0 Diagrama de despliegue.
                    li 
                      i.fas.fa-check
                      p.mb-0 Diagrama de objetos.
                    li 
                      i.fas.fa-check
                      p.mb-0 Diagrama de paquetes.
                    li 
                      i.fas.fa-check
                      p.mb-0 Diagrama de perfiles.
                    li 
                      i.fas.fa-check
                      p.mb-0 Diagrama de estructura compuesta.

            .row.justify-content-center.mb-4(titulo="Diagramas de comportamiento")
              .col-10
                p.mb-0 La gran diferencia con respecto a los anteriores es que muestran el comportamiento de un sistema de información de forma dinámica.
                  br
                  br
                  ul.lista-ul--color.mb-0
                    li 
                      i.fas.fa-check
                      p.mb-0 Diagrama de actividades.
                    li 
                      i.fas.fa-check
                      p.mb-0 Diagrama de casos de uso.
                    li 
                      i.fas.fa-check
                      p.mb-0 Diagrama de máquina de estados.

            .row.justify-content-center.mb-4(titulo="Diagramas de interacción")
              .col-10
                p.mb-5 Realmente son una subdivisión de los anteriores, compuestos por:
                  br
                  br
                  ul.lista-ul--color.mb-0
                    li 
                      i.fas.fa-check
                      p.mb-0 Diagrama de secuencia.
                    li 
                      i.fas.fa-check
                      p.mb-0 Diagrama de comunicación.
                    li 
                      i.fas.fa-check
                      p.mb-0 Diagrama de tiempos.
                    li 
                      i.fas.fa-check
                      p.mb-0 Diagrama global de interacciones.
    .row
      .col-xl-12
        p(data-aos="fade-down") 
          h3(data-aos="fade-down") Diagrama de casos de uso

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-12
          p(data-aos="fade-down") Como ya mencionamos en el ítem anterior, el diagrama de casos de uso es comportamental; es decir, se pueden representar procesos empresariales, al igual que sistemas y procesos en la programación orientada a objetos, desde el punto de vista del usuario.  Básicamente tiene la siguiente simbología:

    .row.justify-content-center.align-items-center
      .col-lg-8
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img3_6.png', alt='Diagrama de casos de uso')


          .tarjeta.color-acento-contenido.p-3(x="25%" y="25%" numero="1")( style="background-color: #FFECC1")
            .row.justify-content-evenly.align-items-center.mb-3           
              .col-9     
                .h5.mb-0
              .col-auto.d-none.d-lg-block
                .bulletNumber
            p Corresponde a cualquier entidad que haga parte del sistema como una persona, una empresa u organización e incluso, otro sistema externo.

          .tarjeta.color-acento-contenido.p-3(x="28%" y="60%" numero="2")( style="background-color: #FFECC1")
            .row.justify-content-evenly.align-items-center.mb-3           
              .col-9     
                .h5.mb-0
              .col-auto.d-none.d-lg-block
                .bulletNumber
            p Corresponde a un artefacto que define una serie de acciones en forma secuencial y muy ordenada, que desemboca en un resultado medible. Los casos se centran en representar requisitos funcionales en lo que se refiere al contexto de procesos empresariales y, por consiguiente, del sistema.

          .tarjeta.color-acento-contenido.p-3(x="28%" y="83%" numero="3")( style="background-color: #FFECC1")
            .row.justify-content-evenly.align-items-center.mb-3           
              .col-9     
                .h5.mb-0
              .col-auto.d-none.d-lg-block
                .bulletNumber
            p Corresponde a definir, clara y concisamente, lo considerado externo o interno a nuestro sistema.

          .tarjeta.color-acento-contenido.p-3(x="90%" y="25%" numero="4")( style="background-color: #FFECC1")
            .row.justify-content-evenly.align-items-center.mb-3           
              .col-9     
                .h5.mb-0
              .col-auto.d-none.d-lg-block
                .bulletNumber
            p Corresponde a la relación entre un actor y un caso de uso. Generalmente no se le asigna ningún nombre.                    
          
          .tarjeta.color-acento-contenido.p-3(x="76%" y="50%" numero="5")( style="background-color: #FFECC1")
            .row.justify-content-evenly.align-items-center.mb-3           
              .col-9     
                .h5.mb-0
              .col-auto.d-none.d-lg-block
                .bulletNumber
            p Se utiliza para modelar una parte que realmente es opcional dentro del sistema, o, dicho de otra forma, es subflujo que solo se da o ejecuta bajo determinadas condiciones.

          .tarjeta.color-acento-contenido.p-3(x="76%" y="66%" numero="6")( style="background-color: #FFECC1")
            .row.justify-content-evenly.align-items-center.mb-3           
              .col-9     
                .h5.mb-0
              .col-auto.d-none.d-lg-block
                .bulletNumber
            p Se utiliza para enaltecer o enriquecer un caso de uso con otro, compartiendo una funcionalidad común entre ellos, además, se puede utilizar para describir subfunciones de un caso de uso.

          .tarjeta.color-acento-contenido.p-3(x="82%" y="82%" numero="7")( style="background-color: #FFECC1")
            .row.justify-content-evenly.align-items-center.mb-3           
              .col-9     
                .h5.mb-0
              .col-auto.d-none.d-lg-block
                .bulletNumber
            p Se utiliza cuando tenemos un “super” caso de uso y otro, que para este caso es un subcaso, hereda las características del comportamiento de su antecesor. Puede ocurrir que el “super” caso, padre en este caso, no sea más que una especialización de su hijo o subcaso.

    .row.justify-content-center.align-items-center.md-5
    .col-xl-12
      p(data-aos="fade-down") 
        h3(data-aos="fade-down") Ejemplos
      br
    .row.justify-content-center.align-items-center.md-5
      .col-12
        .titulo-sexto.color-acento-contenido
          h5(data-aos="fade-down") Primero:
          span el siguiente diagrama muestra el proceso de comer en un restaurante. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-6
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema3/img3_7.png', alt='')

      br
    .row.justify-content-center.align-items-center.md-5
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Segundo:
          span el siguiente diagrama de casos de uso, muestra el proceso de realizar una compra.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-6
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema3/img3_8.png', alt='')      
    

    .row.justify-content-center.align-items-center.md-5
    .col-xl-12
      p(data-aos="fade-down") 
        h3(data-aos="fade-down") Para tener en cuenta…

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-12
        p(data-aos="fade-down") Existe mucho #[i software] disponible en la web para trabajar los modelos de UML, uno de los más utilizados es StartUML, que es de MKLab, aunque estuvo un tiempo descontinuado, actualmente es uno de los más utilizados. Este #[i software] es compatible con casi todos los diagramas especificados en UML 2.0, aunque es licenciado, tiene una versión gratuita que permite trabajar en el mundo educativo.

    .row.justify-content-between.align-items-center
      .col.mb-5.mb-sm-0                  
        p(data-aos="fade-down").mb-0 Para profundizar en este tema de casos de uso, lo invito a que visualice el siguiente video que explica de manera muy práctica este tema.            
    br
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/1vZo04F_efs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 3.2 #[i Story board]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-4
        figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema3/img3_10.png', alt='')
      .col-xl-8
        h5 ¿Que es?
        br
        p(data-aos="fade-down") Es una serie de dibujos secuenciales que muestran todos y cada uno de los planos de una obra audiovisual.  Es un paso fundamental que siempre debe realizarse en una preproducción. Cuando se construye un #[i storyboard] se pretende que todos los miembros puedan imaginar de la forma más cercana, cuál será el producto final.
        p(data-aos="fade-down") Aunque realmente su mayor uso es en el cine, se abre paso también en el ámbito del desarrollo de #[i software], ¿de qué forma?
        p(data-aos="fade-down") El levantamiento de requerimientos por #[i Storyboarding] visualiza de manera gráfica, mediante imágenes, en forma secuencial cada uno de los pasos que debe ejecutar el usuario en el proceso estudiado, para conseguir los resultados. Estas imágenes se utilizan para definir las interacciones del usuario con el #[i software] con el propósito de presentar mediante dibujos didácticos las funcionalidades del programa y la forma como quedarán organizadas las opciones de navegación y demás aspectos.
        p(data-aos="fade-down") Se debe tener muy en cuenta que la técnica de #[i Storyboard] se aplica únicamente, luego de que el analista de requerimientos tenga claras las necesidades que el usuario le planteó para de esta forma precisar los requerimientos requeridos.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-12
        div(style="background-color: #fff4da; border-left: 20px solid #ffb30b" data-aos="zoom-in").p-5.mb-5
          h4 ¿Cómo se trabaja una sesión de levantamiento de información con #[i Storyboard]?
          p La recomendación es realizar una charla informal, libre de tensiones, en la cual socializamos con el usuario, mediante la construcción de un #[i Storyboard], todas y cada una de las funcionalidades del proyecto; algunos autores se atreven a ir más allá y utilizan el término de “Prototipo #[i Storyboard]”, basados en aspectos como: navegación, se representa el diseño lógico preliminar, tal que se muestra el orden opciones, formularios, interfases, etc. Validaciones del sistema, mostrar y validar con el usuario las validaciones a la información de entrada y hasta de salida, que se aplica en el proyecto. Aprovechamiento máximo de recursos, se plantea la optimización del tiempo de procesamiento y las personas implicadas en cada proceso.
            
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/img3_11.png', alt='')      
      .col-lg-6
        p(data-aos="fade-down") 
          h4 ¿Cómo se crea un Storyboard?
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 Debe crear un guion inicial que requiere, como es apenas lógico, que exista una charla preliminar con el cliente y/o usuarios.
          li 
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 Ajustar y organizar el guion técnico para determinar las escenas o dibujos importantes en el #[i storyboard].
          li 
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 Contar con un conjunto de bocetos, es muy importante, aunque no es obligatorio ser excelentes dibujantes, puesto que podemos utilizar #[i software] para esta labor; el cual debemos conocer muy bien, para poder realizar una representación acorde con la necesidad.
          li 
            .lista-ol--cuadro__vineta
              span 4
            p.mb-0 Cree y/o construya la secuencia de imágenes requeridas por su proyecto.
        
    .row
      .col-xl-12
        p(data-aos="fade-down") 
          h3(data-aos="fade-down") Para tener en cuenta

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-1
      .col-xl-8
        .bloque-izquierda.mb-5(data-aos="zoom-in")
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5( style="background-color: #FEE3A8")
            .bloque-texto-g__img.d-flex.align-items-center( style="background-color: #B9DDFC").p-4
              img(src='@/assets/curso/temas/tema3/img3_12.svg', alt='' style='width: 45%').m-auto
            .bloque-texto-g__texto--border.p-2.d-inline-block
              .bloque-texto-g__texto.p-4
                h4.mb-5 Páginas para crear #[i Storyboard] en línea:
                br
                br
                ul.lista-ul--color.mb-0
                  li 
                    i.fas.fa-check
                    p.mb-0 #[i Shotbox]
                  li 
                    i.fas.fa-check
                    p.mb-0 #[i Storyboard Creator]
                  li 
                    i.fas.fa-check
                    p.mb-0 #[i Storyboard That]
      .col-xl-3
    
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-3
      .col-xl-8
        .bloque-izquierda.mb-5(data-aos="zoom-in")
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5( style="background-color: #FEE3A8")
            .bloque-texto-g__img.d-flex.align-items-center( style="background-color: #B9DDFC").p-4
              img(src='@/assets/curso/temas/tema3/img3_12.svg', alt='' style='width: 45%').m-auto
            .bloque-texto-g__texto--border.p-2.d-inline-block
              .bloque-texto-g__texto.p-4
                h4.mb-5 #[i Software ] para crear #[i Storyboard]:
                br
                br
                ul.lista-ul--color.mb-0
                  li 
                    i.fas.fa-check
                    p.mb-0 #[i Storyboarder]
                  li 
                    i.fas.fa-check
                    p.mb-0 #[i Plot]
                  li 
                    i.fas.fa-check
                    p.mb-0 #[i OpenToonz]
                  li 
                    i.fas.fa-check
                    p.mb-0 #[i Toon Boom Storyboard Pro]
                  li 
                    i.fas.fa-check
                    p.mb-0 #[i StoryboardThat]
      .col-xl-1
      
    .row.align-items-center.mb-5
      .col-xl-4
      .col-xl-8
        .cajon.color-primario.p-3.p-sm-4.p-4( style="background-color: #b9ddfc75")
          p(data-aos="fade-down").mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
</template>

<script>
export default {
  name: 'Tema3',
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
