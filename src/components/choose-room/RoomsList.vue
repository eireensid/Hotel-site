<template>
  <div>
      <div class="container">
          <div class="row no-gutters">
              <div class="col-4">
                  <label for="dates">даты пребывания в отеле</label>
                  <input type="text" class="form-control" id="dates" placeholder="19 авг - 23 авг">
                  <label for="guests">гости</label>
                  <input type="text" class="form-control" id="guests" placeholder="3 гостя, 1 младенец">
                  <label for="ex2">диапазон цены</label><br>
                  <input id="ex2" type="text" class="span2" value="" data-slider-min="10" data-slider-max="1000" data-slider-step="5" data-slider-value="[250,450]"/><br>
                  <label for="more">особые пожелания</label><br>
                  <input type="checkbox" id="more">Можно курить<br>
                  <input type="checkbox" id="more">Можно с питомцами<br>
                  <input type="checkbox" id="more">Можно пригласить гостей (до 10 человек)<br>
                  <label for="availability">доступность</label><br>
                  <input type="checkbox" id="availability">Широкий коридор<br>
                    Ширина коридоров в номере не менее 91 см.<br>
                  <input type="checkbox" id="availability">Помощник для инвалидов<br>
                    На 1 этаже вас встретит специалист  и проводит до номера.<br>
                  <label for="comfort">удобства номера</label>
                  <input type="text" class="form-control" id="comfort">
                  <label for="addition">дополнительные удобства</label><br>
                  <input type="checkbox" id="addition">Завтрак<br>
                  <input type="checkbox" id="addition">Письменный стол<br>
                  <input type="checkbox" id="addition">Стул для кормления<br>
                  <input type="checkbox" id="addition">Кроватка<br>
                  <input type="checkbox" id="addition">Телевизор<br>
                  <input type="checkbox" id="addition">Шампунь<br>
              </div>
              <div class="col-8">
                <div class="container">
                  <div class="row no-gutters">
                    <div v-for="(r, ind) in rooms" :key="'room' + ind" class="col-4 mb-4">
                      <AppartmentCard :imageSrc="r.imageSrc" :appartmentNumber="r.appartmentNumber" :isLuxe="r.isLuxe" :price="r.price" :starsCount="r.starsCount" :feedbackCount="r.feedbackCount"/>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import AppartmentCard from './AppartmentCard.vue'


var Slider = require("bootstrap-slider")

export default {
  name: 'RoomsList',
  data () {
    return {
      rooms: [
        {
          imageSrc: './assets/img/image.png',
          appartmentNumber: 888,
          isLuxe: true,
          price: '9 990',
          starsCount: 5,
          feedbackCount: '145'
        },
        {
          imageSrc: './assets/img/image1.png',
          appartmentNumber: 840,
          isLuxe: false,
          price: '9 990',
          starsCount: 4,
          feedbackCount: '65'
        },
        {
          imageSrc: './assets/img/image3.png',
          appartmentNumber: 980,
          isLuxe: true,
          price: '8 500',
          starsCount: 3,
          feedbackCount: '35'
        },
        {
          imageSrc: './assets/img/image4.png',
          appartmentNumber: 856,
          isLuxe: false,
          price: '7 300',
          starsCount: 5,
          feedbackCount: '19'
        },
        {
          imageSrc: './assets/img/image5.png',
          appartmentNumber: 740,
          isLuxe: false,
          price: '6 000',
          starsCount: 4,
          feedbackCount: '44'
        },
        {
          imageSrc: './assets/img/image6.png',
          appartmentNumber: 982,
          isLuxe: false,
          price: '5 800',
          starsCount: 3,
          feedbackCount: '56'
        },
        {
          imageSrc: './assets/img/image7.png',
          appartmentNumber: 678,
          isLuxe: false,
          price: '5 500',
          starsCount: 5,
          feedbackCount: '45'
        },
        {
          imageSrc: './assets/img/image8.png',
          appartmentNumber: 450,
          isLuxe: false,
          price: '5 300',
          starsCount: 4,
          feedbackCount: '39'
        },
        {
          imageSrc: './assets/img/image9.png',
          appartmentNumber: 350,
          isLuxe: false,
          price: '5 000',
          starsCount: 3,
          feedbackCount: '77'
        },
        {
          imageSrc: './assets/img/image10.png',
          appartmentNumber: 666,
          isLuxe: false,
          price: '5 000',
          starsCount: 5,
          feedbackCount: '25'
        },
        {
          imageSrc: './assets/img/image11.png',
          appartmentNumber: 444,
          isLuxe: false,
          price: '5 000',
          starsCount: 3,
          feedbackCount: '15'
        },
        {
          imageSrc: './assets/img/image12.png',
          appartmentNumber: 352,
          isLuxe: false,
          price: '5 000',
          starsCount: 3,
          feedbackCount: '55'
        }
      ]
    }
  },
  mounted () {
    var slider = new Slider('#ex2', {})
  },
  components: {
    AppartmentCard
  } 
}

</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils/vars";

</style>