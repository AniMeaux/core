<template>
  <div class="adopt has-header">
    <nuxt />
  </div>
</template>

<script>
  import AdoptCategories from '@/components/adopt/adopt-categories';
  import AdoptList from '@/components/adopt/adopt-list';
  import AdoptHeader from '@/components/adopt/adopt-header';


  export default {
    head() {
      return {
        title: 'À adopteraze',
      };
    },
    validate({ params }) {
      const categories = ['dog', 'cat', 'reptile', 'rodent', 'bird'];
      return categories.includes(params.category);
    },
    data() {
      return {
        categories: {
          dogs: {
            name: 'Chiens',
          },
          cats: {
            name: 'Chats',
          },
          reptiles: {
            name: 'Reptiles',
          },
          birds: {
            name: 'Oiseaux',
          },
          rodent: {
            name: 'Rongeurs',
          },
        },
      };
    },
    components: {
      AdoptCategories,
      AdoptList,
      AdoptHeader,
    },
  };
</script>

<style lang="scss" scoped>
  .adopt{
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

