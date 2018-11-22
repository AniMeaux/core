<template>
  <section class="has-header">
    <home-warning v-if="!loading && isWarningVisible" />
    <home-carousel />
    <div class="wrap">
      <div class="home-content">
        <div class="home-content-main">
          <h1 class="display-1">
            Ani'Meaux
          </h1>
          <h2 class="headline">
            Qui sommes-nous ?
          </h2>
          <p class="body-1">
            Ani’Meaux est une association loi 1901, nouvellement créée dans le but de sauver des animaux en tout genres. Nous récupérons les animaux abandonnés ou errants, que nous plaçons dans une famille d’accueil adaptée à l’animal afin de lui prodiguer tous les soins nécessaires à son rétablissement, avant de leur trouver une nouvelle famille pour la vie.
          </p>
          <p class="body-1">
            Pour se faire, nous travaillons en équipe, soudée, tous bénévoles et passionnés. L’union fait la force ; plus nous serons nombreux et plus nos actions seront grandissantes.
          </p>
          <p class="body-1">
            Grâce à vos dons, financiers ou matériels, aussi infimes soient-ils, nous pouvons élargir notre champ d’action et agir dans les meilleures conditions pour la cause animale.
          </p>
        </div>
        <aside class="home-content-side">
          <home-facebook />
          <home-events />
        </aside>
      </div>
    </div>
    <home-newsletter/>
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  import HomeCarousel from '~/components/home-view/home-carousel';
  import HomeFacebook from '~/components/home-view/home-facebook';
  import HomeEvents from '~/components/home-view/home-events';
  import HomeNewsletter from '~/components/home-view/home-newsletter';
  import HomeWarning from '~/components/home-view/home-warning';

  export default {
    components: {
      HomeCarousel,
      HomeFacebook,
      HomeEvents,
      HomeNewsletter,
      HomeWarning,
    },
    methods: {
      ...mapActions(['setWarningVisible']),
    },
    computed: {
      ...mapGetters(['isWarningVisible']),
    },
    mounted() {
      this.$localForage.getItem('warningVisible')
        .then((res) => {
          this.loading = false;
          if (res !== null) {
            this.setWarningVisible(res);
          }
        });
    },
    data() {
      return {
        loading: true,
      };
    },
    head() {
      return {
        title: 'Association de protection animale',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Site officiel de l\'association de protection animale Ani\'Meaux, basé sur la ville de Meaux et ses environs.',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .home{
    &-content{
      position: relative;
      display: grid;
      grid-template-columns: 8fr 4fr;
      grid-gap: 20px;

      &-side, &-main{
        position: relative;
        top: -70px;
        
        background: white;
        padding: 16px;
      }

      &-main{
        padding: 16px 32px;
      }

      &-side{
        overflow: hidden;
      }

      @media only screen and (max-width: 783px){
        grid-template-columns: 100%;
      }
    }
  }
</style>
