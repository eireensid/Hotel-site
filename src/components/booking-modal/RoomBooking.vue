<template>
  <div>
    <div class="container room-booking">
      <div class="row no-gutters">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <h1>Найдём номера под<br>ваши пожелания</h1>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 pr-4">
          <label for="arrive">Прибытие</label>
          <input type="text" class="form-control datepicker-here" id="arrive" data-range="true" data-multiple-dates-separator=" - " placeholder="ДД.ММ.ГГГГ">
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <label for="departure">Выезд</label>
          <input type="text" class="form-control" id="departure" placeholder="ДД.ММ.ГГГГ">
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 pb-4">
          <label for="guests">Гости</label>
          <div class="form-guests" :style="guestsFormStyle">
            <p v-if="adultsCount == 0 && childrenCount == 0 && babiesCount == 0">Сколько гостей</p>
            <p v-else>{{ sumCount }} {{ guestsEnding }}</p>
            <img @click="dropdownVisible = !dropdownVisible" :src="expandMore">
          </div>
          <div class="container">
            <div class="row">
              <div class="col">
                <div v-show="dropdownVisible" class="container guests-dropdown">
                  <div class="row">
                    <div class="col-8">
                      <p class="guests guests-top">Взрослые</p>
                    </div>
                    <div class="col-4 plus-minus plus-minus-bottom">
                      <img v-if="adultsCount == 0" src="/assets/img/minus-disabled.png" class="counter-right"/>
                      <img v-else src="/assets/img/minus.png" @click="countAdults()" class="counter-right"/>
                      <span class="guests">{{ adultsCount }}</span>
                      <img src="/assets/img/plus.png" @click="adultsCount++" class="counter-left"/>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8">
                      <p class="guests">Дети</p>
                    </div>
                    <div class="col-4 plus-minus plus-minus-bottom">
                      <img v-if="childrenCount == 0" src="/assets/img/minus-disabled.png" class="counter-right"/>
                      <img v-else src="/assets/img/minus.png" @click="countChildren()" class="counter-right"/>
                      <span class="guests">{{ childrenCount }}</span>
                      <img src="/assets/img/plus.png" @click="childrenCount++" class="counter-left"/>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8">
                      <p class="guests">Младенцы</p>
                    </div>
                    <div class="col-4 plus-minus">
                      <img v-if="babiesCount == 0" src="/assets/img/minus-disabled.png" class="counter-right"/>
                      <img v-else src="/assets/img/minus.png" @click="countBabies()" class="counter-right"/>
                      <span class="guests">{{ babiesCount }}</span>
                      <img src="/assets/img/plus.png" @click="babiesCount++" class="counter-left"/>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8">
                      <button class="btn clearBtn" @click="clearAll()">очистить</button>
                    </div>
                    <div class="col-4 plus-minus">
                      <button @click="dropdownVisible = false" class="btn submitBtn">применить</button>
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <button class="btn book-btn">
            <span>Подобрать номер</span>
            <img src="/assets/img/arrow_forward_white.svg">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomBooking',
  data () {
    return {
      adultsCount: 0,
      childrenCount: 0,
      babiesCount: 0,
      dropdownVisible: false
    }
  },
  computed: {
    sumCount () {
      return this.adultsCount + this.childrenCount + this.babiesCount
    },
    guestsEnding () {
      let res = 'гостей'
      if (this.sumCount % 10 === 1) {
        res = 'гость'
      } else if (this.sumCount % 10 > 1 && this.sumCount % 10 < 5) {
        res = 'гостя'
      }
      return res
    },
    guestsFormStyle () {
      let res = {}
      if (this.dropdownVisible) {
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
  mounted () {
    $('#arrive').datepicker({ 
      onSelect: function (fd, d, picker) { 
        $("#arrive").val(fd.split("-")[0])
        $("#departure").val(fd.split("-")[1])
      }
    })
  },
  methods: {
    countAdults () {
      if (this.adultsCount > 0) {
        this.adultsCount--
      }
    },
    countChildren () {
      if (this.childrenCount > 0) {
        this.childrenCount--
      }
    },
    countBabies () {
      if (this.babiesCount > 0) {
        this.babiesCount--
      }
    },
    clearAll () {
      this.adultsCount = 0
      this.childrenCount = 0
      this.babiesCount = 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils/vars";

h1 {
  font-family: $titleFont;
  font-size: $h1FontSize;
  font-weight: bold;
  letter-spacing: 0.1em;
}
label {
  margin-top: 20px;
  margin-bottom: 2px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: $lessFontSize;
  line-height: 15px;
}
input::placeholder {
  color: $darkShade75;
  font-size: 0.75em;
}
.room-booking {
  background: #fff;
  position: absolute;
  width: 26%;
  top: 7.8%;
  left: 9%;
  padding: 30px;
  padding-top: 40px;
}
.book-btn {
  width: 100%;
  border-radius: 22px;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  padding: {
    top: 14px;
    bottom: 15px;
    right: 20px;
    left: 20px;
  }
  color: white;
  background: linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%);
  img {
    position: absolute;
    right: 5%;
  }
}
.form-guests {
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 5px;
  // border-bottom-left-radius: 0px;
  // border-bottom-right-radius: 0px;
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  padding-right: 13px;
}
.guests-dropdown {
  padding: 10px;
  padding-right: 40px;
  padding-top: 5px;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-top: none;
  border-radius: 5px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
.guests {
  text-transform: uppercase;
  font-size: .75em;
  line-height: 15px;
  font-weight: 700;
}
.guests-top {
  margin-top: 8px;
}
.clearBtn {
  font-size: .75em;
  line-height: 15px;
  font-weight: bold;
  text-transform: uppercase;
  color: rgba(31, 32, 65, 0.5);
  margin-top: 13px;
  padding: 0;
}
.submitBtn {
  font-size: .75em;
  line-height: 15px;
  font-weight: bold;
  text-transform: uppercase;
  color: #BC9CFF;
  margin-top: 13px;
  padding: 0;
  margin-left: 17px;
}
</style>