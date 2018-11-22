<template>
  <div class="home-facebook" style="width:100%;">
    <iframe
      title="Facebook"
      :src="getUrl"
      :width="width"
      :height="height"
      style="border:none;overflow:hidden"
      scrolling="no"
      frameborder="0"
      allowTransparency="true"
      allow="encrypted-media"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'home-facebook',
    props: {
      width: {
        type: Number,
        default: 380,
      },
      height: {
        type: Number,
        default: 500,
      },
      tab: {
        type: String,
        default: 'timeline',
      },
    },
    computed: {
      getUrl() {
        return `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fanimeaux.protectionanimale&tabs=${this.tab}&width=${this.width}&height=${this.height}&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=340559676070587`;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .home-facebook{
    // width: 100%;

    // iframe{
    //   width: 100%;
    // }
  }
</style>
