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
            
          />
          <div class="title blog-post-title">
            {{ post.title }}
          </div>
          <div class="body-1 blog-post-caption">
            {{ post.excerpt }}
          </div>
        </nuxt-link>
      </div>
    </div>
    blog view
    <pre>
      {{ posts }}
    </pre>
  </div>
</template>

<script>
  export default {
    name: 'blog',
    data() {
      return {
        posts: [],
      };
    },
    async asyncData({ app }) {
      let response;
      try {
        response = await app.$axios.$get('https://blog.animeaux.org/ghost/api/v2/content/posts?key=dff6b48a732db0bc1ad086371e');
      } catch (e) {
        console.error('Could not fetch blog posts', e);
      }
      return {
        posts: response ? response.posts : [],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .blog{
    &__posts{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 16px;

      .blog-post{
        display: flex;
        flex-direction: column;
        text-decoration: none;

        &-image{
          height: 180px;
          background-color: rgba(black, 0.12);
          border-radius: 6px;
        }

        &-title{
          margin-top: 8px;
        }
      }
    }
  }
</style>
