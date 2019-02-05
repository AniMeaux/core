<template>
  <div class="adopt-images">
    <div v-if="data.images.length > 0" class="adopt-images-viewer">
      <cloudinary
        v-if="currentImage"
        :public-id="currentImage.public_id"
        :transformations="{ w: 400, fl: 'progressive' }"
        :sources="[
          {
            media: '(min-width: 650px)',
            width: 400,
          },
          {
            media: '(max-width: 480px)',
            width: 320,
          },
        ]"
      />
    </div>
    <button
      v-if="data.images.length > 0"
      v-for="(image, k) in data.images"
      :key="k"
      class="adopt-images-button"
      @click="currentImage = image"
    >
      <cloudinary
        :public-id="image.public_id"
        :transformations="{ w: 100, fl: 'progressive' }"
        :sources="[
          {
            media: '(min-width: 650px)',
            width: 100,
          },
          {
            media: '(max-width: 480px)',
            width: 50,
          },
        ]"
      />
    </button>
    
    <div v-if="data.images.length === 0" class="adopt-images-empty">
      <span class="body-1">
        Aucune image disponible
      </span>
    </div>
  </div>
</template>

<script>
  import Cloudinary from '~/components/global/cloudinary';

  export default {
    name: 'adopt-images',
    props: {
      data: {
        type: Object,
      },
    },
    data() {
      return {
        currentImage: this.data.images[0],
      };
    },
    components: {
      Cloudinary,
    },
  };
</script>

<style lang="scss" scoped>
  .adopt-images{
    display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-template-rows: 200px 100px;
    // grid-gap: 16px;

    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 16px;
    grid-template-areas: "main-element main-element main-element" "main-element main-element main-element" "main-element main-element main-element";

    div:first-child{
      grid-area: main-element;
    }

    &-button{
      border: none;
      background: transparent;
    }

    &-empty{
      display: flex;
      background-color: $divider;
      width: 100%;
      min-height: 200px;
      margin-bottom: 16px;

      span{
        margin: auto;
      }
    }

    // picture:first-child{
    //   grid-column: span 3;
    //   overflow: hidden;
    // }

    picture{
      height: 100%;
      width: 100%;
    }
  }
</style>