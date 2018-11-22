<template>
  <div class="home-carousel">
  </div>
</template>

<script>
  export default {
    name: 'home-carousel',
  };
</script>

<style lang="scss" scoped>
  .home-carousel{
    background-image: url('https://images.unsplash.com/photo-1503756755766-151cb0cd465f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=08f6944494ab6719d970d7cbceb3daa7&auto=format&fit=crop&w=2700&q=80');
    background-size: cover;
    background-position: center;

    width: 100%;
    height: 440px;

    @media only screen and (max-width: 485px) {
      height: 200px;
    }
  }
</style>
