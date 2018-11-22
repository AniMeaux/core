<template>
  <div class="adopt-header">
    <img
      :src="require(`~/assets/img/icons/animals/${getIcon}`)"
      :alt="category"
      width="80"
      height="60"
      class="adopt-header-image"
    >
    <div class="adopt-header-content">
      <h2 class="title">
        {{ getTitle }}
      </h2>
      <h3 class="subhead-2">
        {{ (success ? categoriesSuccess : categories)[category].subtitle }}
      </h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'adopt-header',
    props: {
      success: {
        type: Boolean,
        default: false,
      },
      category: {
        type: String,
        required: true,
      },
    },
    computed: {
      getTitle() {
        return (this.success ? this.categoriesSuccess : this.categories)[this.category].title;
      },
      getIcon() {
        return (this.success ? this.categoriesSuccess : this.categories)[this.category].icon;
      },
    },
    data() {
      return {
        categoriesSuccess: {
          dog: {
            title: 'Nos chiens',
            subtitle: 'Nos chiens qui ont trouvés une famille',
            icon: 'dog.svg',
          },
          cat: {
            title: 'Nos chats',
            subtitle: 'Nos chats qui ont trouvés une famille',
            icon: 'cat.svg',
          },
          reptile: {
            title: 'Nos reptiles',
            subtitle: 'Nos reptiles qui ont trouvés une famille',
            icon: 'snake.svg',
          },
          bird: {
            title: 'Nos oiseaux',
            subtitle: 'Nos oiseaux qui ont trouvés une famille',
            icon: 'parrot.svg',
          },
          rodent: {
            title: 'Nos rongeurs',
            subtitle: 'Nos rongeurs qui ont trouvés une famille',
            icon: 'bunny.svg',
          },
        },
        categories: {
          dog: {
            title: 'Nos chiens',
            subtitle: 'Nos chiens qui attendent une famille',
            icon: 'dog.svg',
          },
          cat: {
            title: 'Nos chats',
            subtitle: 'Nos chats qui attendent une famille',
            icon: 'cat.svg',
          },
          reptile: {
            title: 'Nos reptiles',
            subtitle: 'Nos reptiles qui attendent une famille',
            icon: 'snake.svg',
          },
          bird: {
            title: 'Nos oiseaux',
            subtitle: 'Nos oiseaux qui attendent une famille',
            icon: 'parrot.svg',
          },
          rodent: {
            title: 'Nos rongeurs',
            subtitle: 'Nos rongeurs qui attendent une famille',
            icon: 'bunny.svg',
          },
        },
      };
    },
  };
</script>

<style lang="scss" scoped>
  .adopt-header{
    display: flex;
    margin-bottom: 32px;

    &-image, &-content{
      margin: auto 0;
    }

    &-content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 16px;

      .title, .subhead-2{
        margin: 0;
      }
    }
  }
</style>