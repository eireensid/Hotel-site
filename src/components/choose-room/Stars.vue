<template>
  <div>
    <span v-for="(isFill, ind) in starsList" :key="'star' + ind" >
      <img v-if="isFill" :src="'./assets/img/star.svg'">
      <img v-else :src="'./assets/img/star_border.svg'">
    </span>
  </div>
</template>

<script>

export default {
  name: 'Stars',
  props: [
    'starsCount'
  ],
  computed: {
    noFillStarsCount () {
      return 5 - this.starsCount
    },
    starsList () {
      const list = []
      for (let i = 0; i < this.starsCount; i++)
        list.push(true)
      for (let i = 0; i < this.noFillStarsCount; i++)
        list.push(false)
      return list
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils/vars";


</style>