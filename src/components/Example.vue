<template>
  <div>
    <headerComponent :isShadow="true"/>
    <RoomsList/>
    <footerComponent/>
  </div>
</template>

<script>
import headerComponent from './header.vue'
import RoomsList from './choose-room/RoomsList.vue'
import footerComponent from './footer.vue'

export default {
  name: 'example-component',
  components: {
    headerComponent, RoomsList, footerComponent
  }
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
img {
  max-width: 200px;
}
</style>
