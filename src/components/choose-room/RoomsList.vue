<template>
  <div>
      <div class="container">
          <div class="row no-gutters">
              <div class="col-4">
                  <label class="label" for="dates">даты пребывания в отеле</label>
                  <div class="input">
                    <input type="text" class="form-control text-input" id="dates" placeholder="19 авг - 23 авг">
                    <img class="expand_more" src="assets/img/expand_more.svg"/>
                  </div>
                  <label class="label" for="guests">гости</label>
                  <div class="input">
                    <input type="text" class="form-control text-input" id="guests" placeholder="3 гостя, 1 младенец">
                    <img class="expand_more_1" src="assets/img/expand_more.svg"/>
                  </div>
                  <label class="label-margin label" for="ex2">диапазон цены</label><span class="price-range">{{sliderValue1}}₽ - {{sliderValue2}}₽</span><br>
                  <input id="ex2" type="text" class="span2" value="5 000₽ - 10 000₽" data-slider-min="0" data-slider-max="15000" data-slider-step="10" data-slider-value="[5000,10000]"/><br>
                  <p class="price">Стоимость за сутки пребывания в номере</p>
                  <label class="label-margin label" for="more">особые пожелания</label><br>
                  <div class="center center-margin">
                    <input class="checkbox" type="checkbox" id="smoke"><label class="checkbox-label" for="smoke">Можно курить</label>
                  </div>
                  <div class="center center-margin">
                    <input class="checkbox" type="checkbox" checked id="pets"><label class="checkbox-label" for="pets">Можно с питомцами</label>
                  </div>
                  <div class="center">
                    <input class="checkbox" type="checkbox" id="guest"><label class="checkbox-label" for="guest">Можно пригласить гостей (до 10 человек)</label>
                  </div>
                  <label class="label label-margin" for="availability">доступность</label><br>
                  <div class="center">
                    <input class="checkbox" type="checkbox" id="corridor"><label class="checkbox-label checkbox-label-black" for="corridor">Широкий коридор</label>
                  </div>
                    <span class="checkbox-label checkbox-label-small">Ширина коридоров в номере не менее 91 см.</span><br>
                  <div class="center">
                    <input class="checkbox" type="checkbox" id="help"><label class="checkbox-label checkbox-label-black" for="help">Помощник для инвалидов</label>
                  </div>
                    <span class="checkbox-label checkbox-label-small">На 1 этаже вас встретит специалист и проводит до номера.</span><br>
                  <RoomComfort />
                  <label class="label label-margin label-margin-right" for="addition">дополнительные удобства</label>
                  <img @click="additionVisible = !additionVisible" src="assets/img/expand_more.svg"/>
                  <div v-show="additionVisible">
                    <div class="center center-margin">
                      <input class="checkbox" type="checkbox" id="breakfast"><label class="checkbox-label" for="breakfast">Завтрак</label>
                    </div>
                    <div class="center center-margin">
                      <input class="checkbox" type="checkbox" id="desk"><label class="checkbox-label" for="desk">Письменный стол</label>
                    </div>
                    <div class="center center-margin">
                      <input class="checkbox" type="checkbox" id="stool"><label class="checkbox-label" for="stool">Стул для кормления</label>
                    </div>
                    <div class="center center-margin">
                      <input class="checkbox" type="checkbox" id="bed"><label class="checkbox-label" for="bed">Кроватка</label>
                    </div>
                    <div class="center center-margin">
                      <input class="checkbox" type="checkbox" id="tv"><label class="checkbox-label" for="tv">Телевизор</label>
                    </div>
                    <div class="center">
                      <input class="checkbox" type="checkbox" id="shampoo"><label class="checkbox-label" for="shampoo">Шампунь</label>
                    </div>
                  </div>
              </div>
              <div class="col-8">
                <div class="container">
                  <div class="row no-gutters">
                    <div class="col">
                      <h2 class="rooms">Номера, которые мы для вас подобрали</h2>
                    </div>
                  </div>
                  <div class="row no-gutters">
                    <div v-for="(r, ind) in rooms" :key="'room' + ind" class="col-4 mb-4 card-padding">
                      <AppartmentCard :imageSrc="r.imageSrc" :appartmentNumber="r.appartmentNumber" :isLuxe="r.isLuxe" :price="r.price" :starsCount="r.starsCount" :feedbackCount="r.feedbackCount"/>
                    </div>
                  </div>
                  <div class="row no-gutters pagination-top">
                    <div class="col d-flex justify-content-center align-items-center">
                      <span class="first">1</span><span class="margin-right">2</span><span class="margin-right">3</span><span class="margin-right">...</span><span class="margin-right-last">12</span>
                      <img class="arrow-pagination" src="assets/img/arrow_pagination.svg"/>
                    </div>
                  </div>
                  <div class="row no-gutters pagination-bottom">
                    <div class="col d-flex justify-content-center align-items-center mt-2">
                      <p>1 - 12 из 100+ вариантов аренды</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
      <div class="container-fluid">
          <div class="row">
            <div class="col">
              <hr>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import AppartmentCard from './AppartmentCard.vue'
import RoomComfort from './RoomComfortInput.vue'


var Slider = require("bootstrap-slider")

export default {
  name: 'RoomsList',
  data () {
    return {
      additionVisible: false,
      sliderValue1: 5000,
      sliderValue2: 10000,
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
    slider.on("slide", (sliderValues) => {
      this.sliderValue1 = sliderValues[0]
      this.sliderValue2 = sliderValues[1]
    })
  },
  components: {
    AppartmentCard, RoomComfort
  } 
}

</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils/vars";
  .label {
    margin-top: 20px;
    margin-bottom: 4px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: $lessFontSize;
    line-height: 15px;
  }
  .text-input {
    width: 80%;
  }
  div.center {
    display: flex;
    align-items: center;
    align-content: center;
  }
  div.center-margin {
    margin-bottom: 10px;
  }
  .checkbox {
    border: 1px solid rgba(31, 32, 65, 0.25);
    box-sizing: border-box;
    border-radius: 4px;
    width: 1.25em;
    height: 1.25em;
    margin-right: 10px;
  }
  input[type="checkbox"]:checked {
    display: none;
  }
  input:checked + label:before {
    content: url(/assets/img/Vector.png);
    border: 1px solid #BC9CFF;
    box-sizing: border-box;
    border-radius: 3px;
    width: 20px;
    height: 20px;
    padding-left: 1px;
    padding-right: 2px;
    // padding-top: 1px;
    margin-right: 10px;
  }
  .checkbox-label {
    color: $darkShade50;
    font-size: $mainFontSize;
    line-height: 1.125em;
    padding-top: 2.8px;
  }
  .checkbox-label-small {
    font-size: $lessFontSize;
    line-height: $mainFontSize;
    margin-left: 25px;
    max-width: 200px;
  }
  .checkbox-label-black {
    font-weight: bold;
    color: $darkShade75;
  }
  .input {
    position: relative;
  }
  img.expand_more {
    position: absolute;
    right: 23%;
    bottom: 35%;
  }
  img.expand_more_1 {
    position: absolute;
    right: 23%;
    bottom: 35%;
  }
  img.expand_more_2 {
    position: absolute;
    right: 23%;
    bottom: 35%;
  }
  .label-margin {
    margin-top: 30px;
    margin-bottom: 16px;
  }
  .label-margin-top {
    margin-top: 30px;
  }
  .label-margin-right {
    margin-right: 4%;
  }
  .price-range {
    margin-left: 146px;
    color: rgba(31, 32, 65, 0.5);
  }
  .price {
    color: rgba(31, 32, 65, 0.5);
  }

  h2.rooms {
    margin-top: 30px;
    margin-bottom: 20px;
    font-weight: $h2FontWeight;
    font-family: $titleFont;
    color: $darkShade100;
    font-size: 1.5em;
  }
  .card-padding {
    padding-right: 15px;
  }

  .container-fluid {
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
  }
  .first {
    background: linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%);
    border-radius: 50%;
    font-weight: bold;
    font-size: $lessFontSize;
    line-height: $lessFontSize;
    color: #fff;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
  span.margin-right {
    margin-right: 15px;
  }
  span.margin-right-last {
    margin-right: 10px;
  }
  .arrow-pagination {
    background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
    border-radius: 50%;
    padding: 10px;
  }
  .pagination-bottom {
    margin-bottom: 60px;
  }
  .pagination-top {
    margin-top: 30px;
  }
</style>