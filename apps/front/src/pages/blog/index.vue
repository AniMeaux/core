<template>
  <div class="blog has-header">
    <div class="wrap">
      <h1 class="display-1 title-underline">
        Blog
      </h1>
      <div class="blog__posts">
        <nuxt-link
          v-for="(post, k) in posts"
          :key="k"
          :to="`/blog/${post.slug}`"
          class="blog-post"
        >
          <div
            class="blog-post-image"
            :style="{
              backgroundImage: `url(${post.feature_image})`
            }"
          />
          <div class="title blog-post-title">
            {{ post.title }}
          </div>
          <div class="body-1 blog-post-caption">
            {{ post.excerpt }}
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      posts: []
    }
  },
  async asyncData({ app }) {
    let response
    try {
      response = await app.$axios.$get('https://blog.animeaux.org/ghost/api/v2/content/posts?key=dff6b48a732db0bc1ad086371e')
    } catch (e) {
      // eslint-disable-next-line
      console.error('Could not fetch blog posts', e)
    }
    return {
      posts: response ? response.posts : []
    }
  },
  head() {
    return {
      title: 'Blog',
      meta: [
        {
          hid: 'description', name: 'description', content: 'Retrouvez toute notre actualité, nos astuces ainsi que nos articles sur notre blog !'
        },
        {
          hid: 'og:description', name: 'og:description', content: 'Retrouvez toute notre actualité, nos astuces ainsi que nos articles sur notre blog !'
        },
        {
          hid: 'og:twitter', name: 'og:twitter', content: 'Retrouvez toute notre actualité, nos astuces ainsi que nos articles sur notre blog !'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables/_colors.scss";

  .blog{
    @media only screen and (max-width: 495px) {
      padding-left: 16px;
      padding-right: 16px;
    }

    .title-underline{
      color: $red;
      &::after{
        background-color: $red;
      }
    }

    &__posts{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 16px;
      padding-bottom: 32px;

      @media only screen and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media only screen and (max-width: 720px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media only screen and (max-width: 495px) {
        grid-template-columns: 1fr;
      }

      .blog-post{
        display: flex;
        flex-direction: column;
        text-decoration: none;

        &-image{
          height: 180px;
          background-color: rgba(black, 0.12);
          border-radius: 6px;
          background-size: cover;
          background-position: center;
        }

        &-title{
          margin-top: 8px;
        }
      }
    }
  }
</style>
