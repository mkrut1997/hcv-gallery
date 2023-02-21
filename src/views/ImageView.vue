<template>
  <div class="image-view">
    <div class="display">
        <i v-show="$route.params.id != 1" class="fa-solid fa-arrow-left" v-on:click="moveLeft"></i>
        <img :src="imageUrl" alt="" class="image-display">
        <i v-show="$route.params.id != 14" class="fa-solid fa-arrow-right" v-on:click="moveRight"></i>
    </div>
  </div>
</template>

<script>
export default {
  //  image URL has to instead be a computed property as it dynamically changes with the router
  // data () {
  //   return {
  //     imageUrl: this.$store.state.images[this.$route.params.id - 1].url
  //   }
  // },
  methods: {
    moveRight () {
      this.$router.push({ name: 'image', params: { id: (this.$route.params.id + 1) } })
    },
    moveLeft () {
      this.$router.push({ name: 'image', params: { id: (this.$route.params.id - 1) } })
    }
  },
  computed: {
    imageUrl () {
      return this.$store.state.images[this.$route.params.id - 1].url
    }
  }
  //  below created method does not work because page does not re-render each time the picture is moved
  // created () {
  //   for (let i = 0; i < this.$store.state.images.length; i++) {
  //     if (this.$store.state.images[i].id === this.$route.params.id) {
  //       console.log('created')
  //       this.imageUrl = this.$store.state.images[i].url
  //     }
  //   }
  // }

}
</script>
<style>
    .display{
        display: flex;
        justify-content: center;
    }
    .image-display{
        width: 60%;
        height: auto;
        object-fit: contain;
    }
    i{
        padding: 30px;
        font-size: 15pt;
    }
    i:hover{
      cursor: pointer;
    }
</style>
