<template>
  <div class="app-loading" :class="{ 'loading-enter': loading, 'loading-leave': !loading }" v-if="loading">
    <img src="~/assets/img/loading_animated.svg" width="300"/>
  </div>
</template>

<script>
  export default {
    name: 'app-loading',
    data() {
      return {
        loading: false,
      };
    },
    methods: {
      start() {
        this.loading = true;
      },
      finish() {
        this.loading = false;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .app-loading{
    display: flex;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.95);
    opacity: 0;
    transition: opacity 500ms;

    img{
      margin: auto;
    }
  }

  .loading{
    &-enter{
      opacity: 1;
    }

    &-leave{
      opacity: 0;
    }
  }
</style>