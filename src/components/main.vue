<template>
  <section>
    <div class="container-fluid">
      <div class="row no-gutters">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <img class="img-fluid img-room" src="assets/img/room.jpg" alt="room">
          <p class="rooms">Лучшие номера для вашей работы,<br>отдыха и просто вдохновения</p>
          <RoomBooking/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RoomBooking from './booking-modal/RoomBooking.vue'

export default {
  name: 'mainComponent',
  components: {
    RoomBooking
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils/vars";

.container-fluid {
  padding-right: 0px;
  padding-left: 0px;
}
.img-room {
  width: 100vw;
  position: relative;
}
.rooms {
  position: absolute;
  bottom: 1.76%;
  right: 9%;
  text-align: end;
  font-size: $mainFontSize;
  line-height: $bodyLineHeight;
  color: $darkShade75;
}
</style>