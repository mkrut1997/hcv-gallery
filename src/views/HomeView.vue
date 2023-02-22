<template>
  <div class="gallery">
    <div class="image" v-for="image in this.$store.state.images" v-bind:key="image.id">
      <router-link v-bind:to="{name: 'image', params: {id: image.id}}">
        <img  :src = "image.url" class="gallery-image">
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView'
}
</script>
<style>
  .gallery{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .image{
    width: 30vw;
    height: 30vw;
    margin-top: 5px;
    margin-right: 5px;
  }
  .gallery-image{
    width: 30vw;
    height: 30vw;
    object-fit: cover;
  }
</style>
