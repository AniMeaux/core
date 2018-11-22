<template>
  <div class="adopt-images">
    <no-ssr>
      <carousel
        v-if="data.images.length > 0"
        :per-page="1"
        :navigationClickTargetSize="16"
        :paginationActiveColor="'#0078BF'"
        navigationEnabled
      >
        <slide
          data-index="0"
          v-for="(image, k) in data.images"
          :key="k"
        >
          <cloudinary
            :public-id="image.public_id"
            :transformations="{ c: 'fill', w: 400, h: 300 }"
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
        </slide>
      </carousel>
    </no-ssr>
    
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
    components: {
      Cloudinary,
    },
  };
</script>

<style lang="scss" scoped>
  .adopt-images{
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-template-rows: 200px 100px;
    // grid-gap: 16px;

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