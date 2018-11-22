<template>
  <div class="adopt-categories">
    <nav>
      <ul>
        <li v-for="(category, k) in categories" :key="k">
          <nuxt-link
            :to="success ? '/success/' + k : '/adopt/' + k"
            :title="category.name"
            class="adopt-categories-item"
            :class="[category.color]"
          >
            <img
              :src="require(`~/assets/img/icons/animals/${category.icon}`)"
              :alt="category.name"
              width="32"
              height="32"
            >
            <span>{{ category.name }}</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'adopt-categories',
    props: {
      success: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        categories: {
          dog: {
            name: 'Chiens',
            icon: 'dog.svg',
            color: 'blue',
          },
          cat: {
            name: 'Chats',
            icon: 'cat.svg',
            color: 'red',
          },
          reptile: {
            name: 'Reptiles',
            icon: 'snake.svg',
            color: 'green',
          },
          bird: {
            name: 'Oiseaux',
            icon: 'parrot.svg',
            color: 'yellow',
          },
          rodent: {
            name: 'Rongeurs',
            icon: 'bunny.svg',
            color: 'lightblue',
          },
        },
      };
    },
  };
</script>

<style lang="scss" scoped>
  .adopt-categories{
    padding: 24px 0;
    
    ul, li{
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    ul{
      @media only screen and (max-width: 495px) {
        display: flex;
        justify-content: center;
      }
    }

    &-item{
      display: flex;
      width: 100%;
      height: 45px;
      padding: 0 24px;

      text-decoration: none;
      font-weight: 500;

      transition: border-right 200ms;

      &.nuxt-link-active{
        border-right: 3px solid $blue;
      }

      @media only screen and (max-width: 495px) {
        padding: 0 16px;
        border-right: none !important;

        &.nuxt-link-active{
          border-bottom: 3px solid $blue;
        }
      }

      &:hover{
        background-color: rgba(250, 250, 250, 1);
      }

      span, img{
        margin: auto 0;
      }

      span{
        font-size: 16px;
        text-transform: uppercase;
        margin-left: 8px;
        
        @media only screen and (max-width: 495px) {
          display: none;
        }
      }

      &.blue{
        color: $blue;
        border-color: $blue;
      }
      &.red{
        color: $red;
        border-color: $red;
      }
      &.yellow{
        color: $yellow;
        border-color: $yellow;
      }
      &.lightblue{
        color: $lightblue;
        border-color: $lightblue;
      }
      &.green{
        color: $green;
        border-color: $green;
      }
    }
  }
</style>