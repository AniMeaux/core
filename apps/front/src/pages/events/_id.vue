<template>
  <div>
    adopter
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Adopter',
      };
    },
    data() {
      return {
        title: '',
      };
    },
    validate({ params }) {
      return /^\d+$/.test(params.id);
    },
    asyncData() {

    },
    mounted() {
      const params = this.$route.params;
      this.$api.get(`/events/${params.id}`).then((res) => {
        // eslint-disable-next-line
        console.log('data', res);
      });
    },
  };
</script>
