<template>
  <div class="partners has-header">
    <div class="wrap">
      <h1 class="display-1 title-underline">
        Nos partenaires
      </h1>
      <div class="layout-aside">
        <div class="partners__list">
          <a
            v-for="partner in getPartners"
            :key="partner.id"
            :href="partner.website_url"
            target="_blank"
            rel="noopener nofollow"
          >
            <template
              v-if="partner.images[0]"
            >
              <cloudinary
                class="item-image"
                :public-id="partner.images[0].public_id"
                :alt="partner.name"
                :transformations="{ c: 'fit', w: 320, h: 320, fl: 'progressive', q: '50', f: 'auto' }"
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
            </template>
            <template
              v-else
            >
              {{ partner.name }}
            </template>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Cloudinary from '~/components/global/cloudinary'

export default {
  components: {
    Cloudinary
  },
  head() {
    return {
      title: 'Nos partenaires',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tous nos partenaires qui nous font confiance et aident nos petits protégés.'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getPartners'])
  },
  fetch({ app, store }) {
    return app.$api.get('/partners')
      .then((response) => {
        if (response.ok) {
          store.dispatch('setPartners', response.data)
        }
      })
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables/_colors.scss";

  .partners{
    background-color: #F7F7F7;

    &__list {
      display: flex;
      flex-wrap: wrap;

      a {
        margin-right: 16px;
        margin-bottom: 16px;

        img {
          max-width: 100%;

          @media only screen and (max-width: 480px) {
            height: auto;
          }
        }
      }
    }

    .display-1{
      color: $yellow;
      margin: 16px 0;

      &::after{
        background-color: $yellow;
      }
    }

    .layout-aside{
      background: white;
      margin-top: 32px;

      padding: 16px;
    }

    &-form{
      width: 70%;

      @media only screen and (max-width: 783px) {
        width: 100%;
      }
    }
  }
</style>
