<template>
  <div>
      <div class="container appartment-card">
          <div class="row">
            <div class="col">
              <img class="img-room" :src="imageSrc" alt="room">
            </div>
          </div>
          <div class="row stars-feedback stars-feedback-top">
            <div class="col-3 padding-right">
              <p class="number">№ {{ appartmentNumber }}</p>  
            </div>
            <div class="col-3 padding-left">
              <p class="luxe">{{ isLuxe ? 'ЛЮКС' : '' }}</p>
            </div>
            <div class="col-6">
              <p class="price"><b>{{ price }}₽</b> в сутки</p>
            </div>
          </div>
          <div class="row hr">
            <div class="col-10">
              <hr>
            </div>
          </div>
          <div class="row stars-feedback stars-feedback-bottom">
            <div class="col-6 padding-right">
              <Stars :starsCount="starsCount"/>
            </div>
            <div class="col-6">
              <p class='price feedback'><b>{{ feedbackCount }}</b> Отзывов</p>
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
hr {
  width: 100%;
  margin-top: 12px;
  margin-bottom: 8px;
}
.appartment-card {
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
}
.img-room {
  width: 100%;
}
.padding-right {
  padding-right: 0;
}
.padding-left {
  padding-left: 0;
}
.number {
  color: $darkShade100;
  font-size: $mainFontSize;
  font-weight: bold;
  font-family: $titleFont;
}
.luxe {
  font-weight: bold;
  font-size: $lessFontSize;
  color: $purple;
}
.price {
  font-size: $mainFontSize;
  color: $darkShade50;
}
.hr {
  display: flex;
  justify-content: center;
}
.stars-feedback {
  display: flex;
  align-items: center;
  margin: {
    left: 10px;
    right: 10px;
  }
}
.stars-feedback-top {
  margin-top: 20px;
}
.stars-feedback-bottom {
  padding-bottom: 20px;
}
.feedback {
  padding-top: 2.7px;
  margin-left: 13px;
}
</style>