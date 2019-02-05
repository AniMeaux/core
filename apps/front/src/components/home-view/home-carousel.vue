<template>
  <div class="home-carousel">
    <div class="wrap">
      <div class="home-carousel-titles">
        <h1 class="home-carousel-title display-2">
          Ani'Meaux
        </h1>
        <span class="home-carousel-subtitle headline">
          Association de protection animale
        </span>
      </div>
    </div>
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

    .wrap{
      display: flex;
      height: calc(100% - 70px);
    }

    &-titles{
      display: flex;
      flex-direction: column;
      margin: auto 0;
    }

    &-title, &-subtitle{
      color: white;
      background-color: rgba(black, 0.2);
      padding: 10px;
      width: fit-content;
    }

    &-title{

    }
  }
</style>
