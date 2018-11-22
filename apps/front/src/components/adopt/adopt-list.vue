<template>
  <ul class="adopt-list">
    <li v-for="(animal, k) in animals" :key="k">
      <adopt-list-item
        :data="animal"
        :success="success"
      />
    </li>
  </ul>
</template>

<script>
  import AdoptListItem from './adopt-list/adopt-list-item';

  export default {
    name: 'adopt-list',
    props: {
      success: {
        type: Boolean,
        default: false,
      },
      animals: {
        type: Array,
      },
    },
    components: {
      AdoptListItem,
    },
  };
</script>

<style lang="scss" scoped>
  .adopt-list{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
    
    list-style-type: none;
    margin: 0;
    padding: 0;

    @media only screen and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 783px) {
      grid-template-columns: repeat(1, 1fr);
    }

    @media only screen and (max-width: 495px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 380px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>