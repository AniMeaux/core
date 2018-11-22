<template>
  <div>
    <header>
      <app-header/>
    </header>
    <main>
      <nuxt/>
    </main>
    <footer>
      <home-donation />
      <app-footer/>
    </footer>
  </div>
</template>

<script>
  import AppHeader from '~/components/global/AppHeader';
  import AppFooter from '~/components/global/AppFooter';
  import HomeDonation from '~/components/home-view/home-donation';

  export default {
    components: {
      AppHeader,
      AppFooter,
      HomeDonation,
    },
  };
</script>

<style>
</style>
