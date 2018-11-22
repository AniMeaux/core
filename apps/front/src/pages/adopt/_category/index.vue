<template>
  <div class="adopt-category">
    <div class="wrap">
      <h1 class="adopt-category-title display-1 title-underline">
        À adopter
      </h1>
      <div class="adopt-category-layout">
        <div class="adopt-category-layout-side">
          <adopt-categories />
        </div>
        <div class="adopt-category-layout-main">
          <adopt-header :category="getCategory" />
          <adopt-list
            v-if="getFilteredAnimals.length > 0"
            :animals="getFilteredAnimals"
          />
          <p class="body-1" v-else>
            Aucun animal n'est disponible à l'adoption pour le moment.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import AdoptCategories from '@/components/adopt/adopt-categories';
  import AdoptList from '@/components/adopt/adopt-list';
  import AdoptHeader from '@/components/adopt/adopt-header';

  export default {
    name: 'adopt-category',
    head() {
      const titleCategories = {
        cat: 'Chats à adopter',
        dog: 'Chiens à adopter',
        rodent: 'Rongeurs à adopter',
        bird: 'Oiseaux à adopter',
        reptile: 'Reptiles à adopter',
      };

      return {
        title: titleCategories[this.$route.params.category],
      };
    },
    fetch({ app, store }) {
      return app.$api.get('/animals')
        .then((response) => {
          if (response.ok) {
            store.dispatch('setAnimals', response.data);
          }
        });
    },
    computed: {
      ...mapGetters(['getAnimalsAdoption']),
      getFilteredAnimals() {
        return this.getAnimalsAdoption
          .filter(e => e.category === this.$route.params.category);
      },
      getCategory() {
        return this.$route.params.category;
      },
    },
    components: {
      AdoptCategories,
      AdoptList,
      AdoptHeader,
    },
  };
</script>

<style lang="scss" scoped>
  .adopt-category{
    background-color: #F7F7F7;
    
    &-title{
      color: $blue;
      margin-top: 16px;

      @media only screen and (max-width: 483px) {
        padding-left: 16px;

        &::after{
          left: 16px;
        }
      }
    }
    
    &-layout{
      display: grid;
      grid-template-columns: 3fr 9fr;
      grid-gap: 16px;
      
      margin-top: 32px;

      &-side, &-main{
        background: white;
        border-radius: 3px 3px 0 0;
      }

      &-main{
        padding: 32px;

        @media only screen and (max-width: 720px) {
          padding: 16px;
        }
        
        h2, h3{
          &.blue{
            color: $blue;
          }
          &.red{
            color: $red;
          }
          &.yellow{
            color: $yellow;
          }
          &.lightblue{
            color: $lightblue;
          }
          &.green{
            color: $green;
          }
        }
      }

      @media only screen and (max-width: 720px) {
        grid-template-columns: 2fr 10fr;
      }

      @media only screen and (max-width: 495px) {
        grid-template-columns: 1fr;
      }
    }
  }
</style>