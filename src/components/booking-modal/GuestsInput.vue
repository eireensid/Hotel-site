<template>
  <div>
    <div class="container">
      <div class="row no-gutters">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <h5 for="guests">Гости</h5>
          <div class="form-guests" :style="guestsFormStyle">
            <p class="text-color" v-if="adultsCount == 0 && childrenCount == 0 && babiesCount == 0">Сколько гостей</p>
            <p v-else>{{ sumCount }} {{ guestsEnding }}</p>
            <img @click="dropdownVisible = !dropdownVisible" :src="expandMore">
          </div>
          <div class="container">
            <div class="row">
              <div class="col">
                <div v-show="!dropdownVisible" class="container guests-dropdown">
                  <div class="row">
                    <div class="col-8">
                      <p class="guests guests-top">Взрослые</p>
                    </div>
                    <div class="col-4 plus-minus plus-minus-bottom">
                      <img v-if="adultsCount == 0" src="/assets/img/minus-disabled.png" class="counter-right"/>
                      <img v-else src="/assets/img/minus.png" @click="minusAdults()" class="counter-right"/>
                      <span class="guests">{{ adultsCount }}</span>
                      <img src="/assets/img/plus.png" @click="plusAdults" class="counter-left"/>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8">
                      <p class="guests">Дети</p>
                    </div>
                    <div class="col-4 plus-minus plus-minus-bottom">
                      <img v-if="childrenCount == 0" src="/assets/img/minus-disabled.png" class="counter-right"/>
                      <img v-else src="/assets/img/minus.png" @click="minusChildren()" class="counter-right"/>
                      <span class="guests">{{ childrenCount }}</span>
                      <img src="/assets/img/plus.png" @click="plusChildren" class="counter-left"/>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8">
                      <p class="guests">Младенцы</p>
                    </div>
                    <div class="col-4 plus-minus">
                      <img v-if="babiesCount == 0" src="/assets/img/minus-disabled.png" class="counter-right"/>
                      <img v-else src="/assets/img/minus.png" @click="minusBabies()" class="counter-right"/>
                      <span class="guests">{{ babiesCount }}</span>
                      <img src="/assets/img/plus.png" @click="plusBabies" class="counter-left"/>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8">
                      <button class="btn clearBtn" @click="clearAll()">очистить</button>
                    </div>
                    <div class="col-4 plus-minus">
                      <button @click="dropdownVisible = true" class="btn submitBtn">применить</button>
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
  name: 'GuestsInput',  
  data () {
    return {
      dropdownVisible: false
    }
  }, 
  computed: {
    adultsCount () {
      return this.$store.getters.adultsCount
    },
    childrenCount () {
      return this.$store.getters.childrenCount
    },
    babiesCount () {
      return this.$store.getters.babiesCount
    },
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
    plusAdults () {
      this.$store.commit('plusAdults')
    },
    plusChildren () {
      this.$store.commit('plusChildren')
    },
    plusBabies () {
      this.$store.commit('plusBabies')
    },
    minusAdults () {
      this.$store.commit('minusAdults')
    },
    minusChildren () {
      this.$store.commit('minusChildren')
    },
    minusBabies () {
      this.$store.commit('minusBabies')
    },
    clearAll () {
      this.$store.commit('clearAll')
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils/vars";

h5 {
  margin-top: 20px;
  margin-bottom: 4px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: $lessFontSize;
  line-height: 15px;
}
.form-guests {
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 5px;
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
.text-color {
  color: rgba(31, 32, 65, 0.75);
  font-size: $mainFontSize;
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