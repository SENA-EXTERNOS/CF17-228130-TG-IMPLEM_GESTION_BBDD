<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/curso/temas/ad.svg", alt="")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Recolección de información
        p.mb-4 Esta actividad se plantea con el objetivo de evaluar la aprehensión de los conceptos expuestos a lo largo del componente formativo. Leer atentamente las siguientes afirmaciones y determinar la respuesta que le corresponde.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-12
              .tarjeta.color-primario.bg1.p-3.mb-5(data-aos="flip-down")
                .row.justify-content-around.align-items-center
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0                 
                        p(data-aos="fade-down").mb-0 Selección multiple
                      .col-sm-auto
                        a.boton.boton--b(:href="obtenerLink('/actividades/index.html')" target="_blank")
                          span( style="color: #000").ts Realizar
                          i.fas.fa-puzzle-piece( style="color: #000")
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
