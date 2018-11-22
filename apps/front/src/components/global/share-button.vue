<template>
  <div class="share-button">
    <iframe
      :src="getSrc"
      width="126"
      height="28"
      style="border:none;overflow:hidden"
      scrolling="no"
      frameborder="0"
      allowTransparency="true"
      allow="encrypted-media"
    ></iframe>
  </div>
</template>

<script>
  export default {
    name: 'share-button',
    computed: {
      getRootPath() {
        return 'https://www.animeaux.org/';
      },
      getHref() {
        return `${this.getRootPath}${this.$route.path}`;
      },
      getSrc() {
        return `https://www.facebook.com/plugins/share_button.php?href=${this.getHref}&layout=button_count&size=large&mobile_iframe=true&appId=579836685736237&width=126&height=28`;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .share-button{
    margin: auto 0;
  }
</style>