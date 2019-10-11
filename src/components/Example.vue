<template>
  <div>
    <headerComponent :isShadow="false"/>
    <mainComponent/>
    <footerComponent/>
  </div>
</template>

<script>
import headerComponent from './header.vue'
import mainComponent from './main.vue'
import footerComponent from './footer.vue'

export default {
  name: 'example-component',
  components: {
    headerComponent, mainComponent, footerComponent
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
