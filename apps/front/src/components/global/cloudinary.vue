<template>
  <picture class="cloudinary">
    <source
      v-for="(source, k) in getSources"
      :key="k"
      :media="source.media"
      :srcset="source.srcset"
    />

    <img
      v-lazy="getSrc"
      :alt="alt"
    />
  </picture>
</template>

<script>
  const env = require('~/config/env');

  export default {
    name: 'cloudinary',
    props: {
      publicId: {
        type: String,
        required: true,
      },
      transformations: {
        type: Object,
      },
      sources: {
        type: Array,
      },
      alt: {
        type: String,
      },
      width: {
        type: Number,
      },
    },
    methods: {
      getImageUrl(overrideTransformations = {}) {
        const transformations = Object.assign({}, this.transformations, overrideTransformations);

        return `${this.getRootUrl}${this.getTransformationString(transformations)}/${this.publicId}`;
      },
      getTransformationString(transformations) {
        const transformationArray = Object.keys(transformations)
          .map((key) => {
            return `${key}_${transformations[key]}`;
          });

        return transformationArray.join(',');
      },
    },
    computed: {
      getSources() {
        return this.sources.map(s => ({
          media: s.media,
          srcset: `${this.getImageUrl({ w: s.width })}, ${this.getImageUrl({ w: s.width, dpr: '2.0' })} 2x`,
        }));
      },
      getSrc() {
        return this.getImageUrl();
      },
      getRootUrl() {
        const isHttps = process.env.NODE_ENV === 'production' ? 'https' : 'http';

        return `${isHttps}://res.cloudinary.com/${env.CLOUDINARY.CLOUD_NAME}/image/upload/`;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .cloudinary{
    img{
      width: 100%;
    }
  }
</style>