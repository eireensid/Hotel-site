<template>
  <div>
    <div class="container room-booking">
      <div class="row no-gutters">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <h1>Найдём номера под<br>ваши пожелания</h1>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 pr-2">
          <label for="arrive">Прибытие</label>
          <input type="text" class="form-control datepicker-here" id="arrive" data-range="true" data-multiple-dates-separator=" - " placeholder="ДД.ММ.ГГГГ">
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 pl-2">
          <label for="departure">Выезд</label>
          <input type="text" class="form-control" id="departure" placeholder="ДД.ММ.ГГГГ">
        </div>
      </div>
      <GuestsInput />
      <div class="row no-gutters">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 pt-4">
          <router-link to="/rooms">
            <button class="btn book-btn">             
              <span>Подобрать номер</span>
              <img src="/assets/img/arrow_forward_white.svg">           
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GuestsInput from './GuestsInput.vue'

export default {
  name: 'RoomBooking',
  components: {
    GuestsInput
  },
  computed: {
    startDates () {
      return this.$store.getters.startDates
    }
  },
  mounted () {
    console.log('mounted', this.startDates)
    $('#arrive').datepicker({
      onSelect: (fd, d, picker) => {
        this.$store.commit('setStartDates', d)
        $("#arrive").val(fd.split("-")[0])
        $("#departure").val(fd.split("-")[1])
      }
    })

    $('#arrive').data('datepicker').selectDate(this.startDates)
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
  color: rgba(31, 32, 65, 0.75);
}
.room-booking {
  background: #fff;
  position: absolute;
  width: 26%;
  top: 7.8%;
  left: 9%;
  padding: 30px;
  padding-top: 40px;
  z-index: 1;
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

@media (max-width: 1170px) {
  .room-booking {
    width: 30%;
  }
}
@media (max-width: 1000px) {
  .room-booking {
    width: 40%;
  }
}
@media (max-width: 721px) {
  .room-booking {
    width: 50%;
  }
}
@media (max-width: 710px) {
  .room-booking {
    width: 80%;
  }
}
@media (max-width: 441px) {
  .room-booking {
    width: 80%;
    top: 12%;
  }
}
@media (max-width: 375px) {
  .room-booking {
    width: 80%;
    top: 15%;
  }
}
</style>