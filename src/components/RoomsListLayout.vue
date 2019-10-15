<template>
  <div>
    <headerComponent/>
    <RoomsList/>
    <footerComponent/>
  </div>
</template>

<script>
import headerComponent from './header.vue'
import RoomsList from './choose-room/RoomsList.vue'
import footerComponent from './footer.vue'

export default {
  name: 'RoomsListLayout',
  components: {
    headerComponent, RoomsList, footerComponent
  }
}
</script>

<style lang="scss" scoped>

</style>