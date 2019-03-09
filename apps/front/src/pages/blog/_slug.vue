<template>
  <div class="blog has-header">
    <div
      v-if="post.feature_image"
      class="blog__featured-image"
      :style="{
        backgroundImage: `url(${post.feature_image})`
      }"
    >
    </div>
    <div class="wrap">
      <article class="blog__container">
        <div class="blog__header">
          <h1 class="display-1 title-underline">
            {{ post.title }}
          </h1>
          <div class="blog__header__infos body-1">
            <div>
              Article publié le: <time datetime="post.published_at">{{ publishDate }}</time>
            </div>
            <div>
              Par: {{ post.primary_author.name }}
            </div>
          </div>
        </div>
        <div class="blog__content" v-html="post.html"></div>
      </article>
    </div>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'Blog',
    validate({ route }) {
      return !!route.params.slug;
    },
    async asyncData({ app, route, redirect }) {
      let response;
      try {
        response = await app.$axios.$get(`https://blog.animeaux.org/ghost/api/v2/content/posts/slug/${route.params.slug}?key=dff6b48a732db0bc1ad086371e&include=authors`);
      } catch (e) {
        redirect('/blog');
        console.error('Could not fetch blog posts', e);
      }
      return {
        post: response.posts[0],
      };
    },
    computed: {
      publishDate() {
        return moment(this.post.published_at).format('lll');
      },
    },
    head() {
      const hasImage = this.post.feature_image ? [
        {
          hid: 'og:image', name: 'og:image', content: this.post.feature_image,
        },
        {
          hid: 'twitter:image', name: 'twitter:image', content: this.post.feature_image,
        },
      ] : [];

      return {
        title: this.post.title,
        titleTemplate: 'Ani\'Meaux - Blog - %s',
        meta: [
          {
            hid: 'description', name: 'description', content: this.post.excerpt,
          },
          {
            hid: 'og:description', name: 'og:description', content: this.post.excerpt,
          },
          {
            hid: 'twitter:description', name: 'twitter:description', content: this.post.excerpt,
          },
          {
            hid: 'og:title', name: 'og:title', content: this.post.title,
          },
          {
            hid: 'twitter:title', name: 'twitter:title', content: this.post.title,
          },
          ...hasImage,
        ],
      };
    },
  };
</script>

<style lang="scss">
  @import "@/assets/scss/variables/_colors.scss";

  .blog{
    &__featured-image{
      width: 100%;
      height: 400px;
      background-size: cover;
      background-position: center;
    }
    
    &__header{
      margin-bottom: 32px;

      .title-underline{
        &::after{
          background-color: $primary-text;
        }
      }
    }

    &__container{
      width: 70%;

      @media only screen and (max-width: 1024px) {
        width: 100%;
      }
    }
    
    &__content{
      h2{
        font-size: 24px;
        color: $primary-text;
        font-weight: 500;
      }
      
      p {
        font-size: 16px;
        line-height: 1.5;
        color: $primary-text;

        strong{
          font-weight: 500;
        }
      }

      .kg-card{
        margin: 0;
      }

      .kg-embed-card{
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 16px 0;
      }

      .kg-gallery-card{

        .kg-gallery-row{
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 16px;

          img{
            object-fit: cover;
          }
        }

        figcaption{
          color: $third-text;
          text-align: center;
          margin-top: 16px;
        }
      }

      .kg-image-card{
        &.kg-width-full{
          img{
            width: 100%;
            object-fit: cover;
          }

          figcaption{
            text-align: center;
          }
        }

        figcaption{
          color: $third-text;
        }
      }

      .kg-card {
        img{
          max-height: 80vh;
          max-width: 100%;
        }
      }
    }
  }
</style>
