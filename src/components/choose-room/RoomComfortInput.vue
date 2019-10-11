<template>
  <div>
    <div class="container">
      <div class="row no-gutters">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <h5>удобства номера</h5>
          <div class="form-comfort" :style="roomsFormStyle">
            <p class="text-color" v-if="bedroomCount == 0 && bedCount == 0 && bathroomCount == 0">Количество комнат</p>
            <p class="text-color" v-else>{{ roomsTitle }}</p>
            <img @click="dropdownVisible = !dropdownVisible" :src="expandMore">
          </div>
          <div class="container">
            <div class="row">
              <div class="col">
                <div v-show="!dropdownVisible" class="container comfort-dropdown">
                  <div class="row">
                    <div class="col-8">
                      <p class="comfort comfort-top">Спальни</p>
                    </div>
                    <div class="col-4 plus-minus plus-minus-bottom">
                      <img v-if="bedroomCount == 0" src="/assets/img/minus-disabled.png" class="counter-right"/>
                      <img v-else src="/assets/img/minus.png" @click="countBedrooms()" class="counter-right"/>
                      <span class="guests">{{ bedroomCount }}</span>
                      <img src="/assets/img/plus.png" @click="bedroomCount++" class="counter-left"/>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8">
                      <p class="comfort comfort-top">Кровати</p>
                    </div>
                    <div class="col-4 plus-minus plus-minus-bottom">
                      <img v-if="bedCount == 0" src="/assets/img/minus-disabled.png" class="counter-right"/>
                      <img v-else src="/assets/img/minus.png" @click="countBeds()" class="counter-right"/>
                      <span class="guests">{{ bedCount }}</span>
                      <img src="/assets/img/plus.png" @click="bedCount++" class="counter-left"/>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8">
                      <p class="comfort comfort-top">Ванные комнаты</p>
                    </div>
                    <div class="col-4 plus-minus">
                      <img v-if="bathroomCount == 0" src="/assets/img/minus-disabled.png" class="counter-right"/>
                      <img v-else src="/assets/img/minus.png" @click="countBathrooms()" class="counter-right"/>
                      <span class="guests">{{ bathroomCount }}</span>
                      <img src="/assets/img/plus.png" @click="bathroomCount++" class="counter-left"/>
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RoomComfort',
  data () {
    return {
      bedroomCount: 0,
      bedCount: 0,
      bathroomCount: 0,
      dropdownVisible: false
    }
  },
  computed: {
    roomsTitle () {
      let res = ''
      if (this.bedroomCount > 0) {
        res += `${this.bedroomCount} ${this.bedroomsEnding}`
      }
      if (this.bedCount > 0) {
        if (res) {
          res += ' , '
        }
        res += `${this.bedCount} ${this.bedsEnding}`
      }
      if (this.bathroomCount > 0) {
        if (res) {
          res += ' , '
        }
        res += `${this.bathroomCount} ${this.bathroomsEnding}`
      }
      return res
    },
    bedroomsEnding () {
      let res = 'спален'
      if (this.bedroomCount === 11) {
        res = 'спален'
      } else if (this.bedroomCount %10 === 1) {
        res = 'спальня'
      } else if (this.bedroomCount >= 5 && this.bedroomCount <= 20) {
        res = 'спален'
      } else if (this.bedroomCount % 10 > 1 && this.bedroomCount % 10 < 5) {
        res = 'спальни'
      } 
      return res
    },
    bedsEnding () {
      let res = 'кроватей'
      if (this.bedCount === 11) {
        res = 'кроватей'
      } else if (this.bedCount %10 === 1) {
        res = 'кровать'
      } else if (this.bedCount >= 5 && this.bedCount <= 20) {
        res = 'кроватей'
      } else if (this.bedCount % 10 > 1 && this.bedCount % 10 < 5) {
        res = 'кровати'
      } 
      return res
    },
    bathroomsEnding () {
      let res = 'ванных комнат'
      if (this.bathroomCount === 11) {
        res = 'ванных комнат'
      } else if (this.bathroomCount %10 === 1) {
        res = 'ванная комната'
      } else if (this.bathroomCount >= 5 && this.bathroomCount <= 20) {
        res = 'ванных комнат'
      } else if (this.bathroomCount % 10 > 1 && this.bathroomCount % 10 < 5) {
        res = 'ванные комнаты'
      } 
      return res
    },
    roomsFormStyle () {
      let res = {}
      if (!this.dropdownVisible) {
        res['border-bottom-left-radius'] = '0px'
        res['border-bottom-right-radius'] = '0px'
      }
      return res
    },
    expandMore () {
      let res = "/assets/img/expand_more.svg"
      if (this.dropdownVisible = true) {
        res = "/assets/img/expand_more_black.svg"
      }
      return res
    }
  },
  methods: {
    countBedrooms () {
      if (this.bedroomCount > 0) {
        this.bedroomCount--
      }
    },
    countBeds () {
      if (this.bedCount > 0) {
        this.bedCount--
      }
    },
    countBathrooms () {
      if (this.bathroomCount > 0) {
        this.bathroomCount--
      }
    },
    clearAll () {
      this.bedroomCount = 0
      this.bedCount = 0
      this.bathroomCount = 0
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils/vars";

h5 {
  margin-top: 30px;
  margin-bottom: 4px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: $lessFontSize;
  line-height: 15px;
}
.form-comfort {
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  padding-right: 13px;
  width: 80%;
}
.comfort-dropdown {
  padding: 10px;
  padding-top: 5px;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-top: none;
  border-radius: 5px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  width: 80%;
  margin: 0;
}
.text-color {
  color: rgba(31, 32, 65, 0.75);
  font-size: $mainFontSize
}
.plus-minus-bottom {
  margin-bottom: 7px;
}
.plus-minus {
  display: flex;
  align-items: center;
}
.counter-right {
  margin-right: 10px;
}
.counter-left {
  margin-left: 10px;
}
.comfort {
  text-transform: uppercase;
  font-size: .75em;
  line-height: 15px;
  font-weight: 700;
}
.comfort-top {
  margin-top: 8px;
}
</style>