<template>
  <nuxt-link :to="success ? `/success/${data.category}/${data.id}` : `/adopt/${data.category}/${data.id}`" class="adopt-list-item">
    <cloudinary
      v-if="getImage"
      class="item-image"
      :public-id="getImage.public_id"
      :transformations="{ c: 'fill', w: 280, h: 280, fl: 'progressive', q: '10', f: 'auto' }"
      :sources="[
        {
          media: '(min-width: 650px)',
          width: 300,
        },
        {
          media: '(max-width: 480px)',
          width: 280,
        },
      ]"
    />
    <div class="item-no-image" v-if="!getImage"></div>
    <div class="item-description">
      <div class="subhead-2 item-description-name">
        {{ data.name }}
      </div>
      <div v-if="age" class="body-2 item-description-age">
        {{ age }}
      </div>
    </div>
  </nuxt-link>
</template>

<script>
  import Cloudinary from '~/components/global/cloudinary';
  import moment from 'moment';

  export default {
    name: 'adopt-list-item',
    props: {
      success: {
        type: Boolean,
        default: false,
      },
      data: {
        type: Object,
      },
    },
    computed: {
      getImage() {
        return this.data.images.length > 0 ? this.data.images[0] : null;
      },
      age() {
        return this.data.birthday ? moment(this.data.birthday).fromNow(true) : null;
      },
    },
    components: {
      Cloudinary,
    },
  };
</script>

<style lang="scss" scoped>
  .adopt-list-item{
    display: flex;
    flex-direction: column;
    text-decoration: none;

    .item{
      &-no-image{
        background-color: lightgray;
        min-height: 180px;
      }
      
      &-image{
        // background-image: url('https://images.unsplash.com/photo-1518587671104-999f3dd2d340?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4ce982e9de006826792d0a915209455e&auto=format&fit=crop&w=1950&q=80');
        // background-size: cover;
        // background-position: center;
        max-height: 180px;
        width: 100%;
        overflow: hidden;
      }
      
      &-description{
        display: flex;
        flex-direction: column;

        &-name, &-age{
          margin: 0;
        }

        &-name{
          color: $blue;
        }

        &-age{

        }
      }
    }

    &:hover{
      background-color: rgba(250, 250, 250, 1);
    }
  }
</style>