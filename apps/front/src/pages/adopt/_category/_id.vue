<template>
  <div class="adopt">
    <div class="wrap">
      <div class="adopt-header">
        <h1 class="adopt-title display-1 title-underline">
          {{ data.name }}
        </h1>
        <div class="adopt-header-buttons">
          <share-button />
          <button class="btn btn-blue" @click="adopt">
            Adopter
          </button>
          <adopt-modal
            :data="data"
            :visible="adoptVisible"
            @close="adoptVisible = false"
          />
        </div>
      </div>

      <div class="adopt-layout">
        <adopt-images
          :data="data"
        />
        <div class="adopt-layout-main">
          <div class="main-content">
            <div class="main-content-description">
              <h2 class="subhead-2">
                Description:
              </h2>
              <p class="body-1" style="white-space: pre-line;">
                {{ data.description }}
              </p>
            </div>
            <adopt-specs
              :data="data"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AdoptSpecs from '~/components/adopt-view/adopt-specs';
  import AdoptImages from '~/components/adopt-view/adopt-images';
  import AdoptModal from '~/components/adopt-view/adopt-modal';

  import ShareButton from '~/components/global/share-button';

  export default {
    head() {
      const titleCategories = {
        cat: 'Chats à adopter',
        dog: 'Chiens à adopter',
        rodent: 'Rongeurs à adopter',
        bird: 'Oiseaux à adopter',
        reptile: 'Reptiles à adopter',
      };

      let image = [];
      if (this.data.images.length > 0) {
        image = [
          {
            hid: 'og:image',
            name: 'og:image',
            content: this.$cloudinary.getImageUrl(this.data.images[0].public_id),
          },
        ];
      }

      const url = `https://www.animeaux.org${this.$route.path}`;

      return {
        title: `${titleCategories[this.data.category]} - ${this.data.name}`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: `Adoptez ${this.data.name} au travers de notre association. ${this.data.description}`,
          },
          {
            hid: 'og:title',
            name: 'og:title',
            content: `${titleCategories[this.data.category]} - ${this.data.name}`,
          },
          {
            hid: 'og:url',
            name: 'og:url',
            content: url,
          },
          {
            hid: 'og:description',
            name: 'og:description',
            content: `Adoptez ${this.data.name} au travers de notre association. ${this.data.description}`,
          },
          ...image,
        ],
      };
    },
    async asyncData({ app, params }) {
      const { data } = await app.$api.get(`/animals/${params.id}`);
      return { data };
    },
    data() {
      return {
        data: {},
        adoptVisible: false,
      };
    },
    methods: {
      adopt() {
        this.adoptVisible = true;
      },
    },
    components: {
      AdoptModal,
      AdoptSpecs,
      AdoptImages,
      ShareButton,
    },
  };
</script>

<style lang="scss" scoped>
  .adopt{
    background-color: #F7F7F7;

    &-header{
      display: flex;
      justify-content: space-between;

      @media only screen and (max-width: 720px) {
        flex-direction: column;
        padding: 0 16px;
      }

      &-buttons{
        display: flex;
        margin: auto 0;

        .social-button{
          margin: auto 0;
        }
      }
    }
    
    &-title{
      color: $blue;
      margin-top: 16px;
    }
    
    &-layout{
      display: grid;
      grid-template-columns: 30% 1fr;
      grid-gap: 16px;
      
      margin-top: 32px;

      @media only screen and (max-width: 720px) {
        grid-template-columns: 100%;
        margin-top: 16px;
      }

      &-images, &-main{
        background: white;
        border-radius: 3px 3px 0 0;
      }

      &-main{
        padding: 16px;
        
        .main-content{
          display: grid;
          grid-template-columns: 8fr 4fr;
          grid-gap: 16px;

          @media only screen and (max-width: 720px) {
            grid-template-columns: 100%;
          }
        }
      }
    }
  }
</style>

