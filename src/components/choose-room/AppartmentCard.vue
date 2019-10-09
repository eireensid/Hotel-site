<template>
  <div>
      <div class="container">
          <div class="row">
            <div class="col">
              <img :src="imageSrc" alt="room">
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p>№ {{ appartmentNumber }}</p>  
            </div>
            <div class="col-3">
              <p>{{ isLuxe ? 'ЛЮКС' : '' }}</p>
            </div>
            <div class="col-6">
              <p>{{ price }}₽ в сутки</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <hr>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <Stars :starsCount="starsCount"/>
            </div>
            <div class="col-6">
              <p>{{ feedbackCount }} Отзывов</p>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import Stars from './Stars.vue'

export default {
  name: 'AppartmentCard',
  components: {
    Stars
  },
  props: [
    'imageSrc', 'starsCount', 'appartmentNumber', 'isLuxe', 'price', 'feedbackCount'
  ]
}

</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils/vars";


</style>