<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p(data-aos="fade-down").mb-5 La recolección de información es la tarea base de los proyectos de desarrollo de #[i software], muchos autores, la priorizan igual o incluso más importante, que el mismo hecho de escribir el código fuente o el trabajo de base de datos; es decir, si una construcción, tiene malas bases o cimientos mal construidos, se caerá.  Este tema quedará muy claro en el siguiente video, como preámbulo a la temática que a continuación estudiaremos:

    .row.justify-content-center.align-items-center    
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
