<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p(data-aos="fade-down").mb-5 Bienvenido a este recurso educativo, el cual contiene información sobre la recolección de información que es la tarea base de los proyectos de desarrollo de #[i software], como apoyo se abordará igualmente información sobre la ingeniería de requisitos y las herramientas de captura de requisitos.  Esta información quedará más clara en el siguiente video, como preámbulo a la temática que a continuación estudiaremos.

    .row.justify-content-center.align-items-center    
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9auX8qkySHk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
