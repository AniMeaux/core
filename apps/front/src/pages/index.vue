<template>
  <section class="has-header">
    <home-warning v-if="!loading && isWarningVisible" />
    <home-carousel />
    <div class="wrap">
      <div class="home-content">
        <div class="home-content-main">
          <!-- <h1 class="display-1">
            Ani'Meaux
          </h1> -->
          <section>
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
          </section>
          <section id="teaming">
            <a href="https://www.teaming.net/ani-meaux" rel="noindex nofollow">
              <img src="~/assets/img/logo-teaming.png" width="180" alt="Logo Teaming" />
            </a>
            <div class="teaming-container">
              <h2 class="headline">
                Faire don d'1 € par mois à Ani'Meaux
              </h2>
              <p class="body-1">
                Teaming est une plateforme online pour récolter des fonds destinés à des causes sociales par le biais de micro-dons d'1 € par mois. La philosophie de Teaming se base sur l'idée que seul, un euro n'a pas beaucoup d'utilité, mais que si nous unissons nos efforts, nous pouvons faire de grandes choses.
              </p>
              <a href="https://www.teaming.net/ani-meaux" rel="noindex nofollow" class="teaming-button">
                Rejoindre le groupe Ani'Meaux
              </a>
            </div>
          </section>
          <section id="zooplus">
            <div>
              <a href="https://marketing.net.zooplus.fr/ts/i3971185/tsc?amc=con.zooplus.391263.404652.6883&tst=!!TIMESTAMP!!" title="Profitez de promotions de offres spéciales" target="_blank" rel="nofollow">
                <img src="https://marketing.net.zooplus.fr/ts/i3971185/tsv?amc=con.zooplus.391263.404652.6883&tst=!!TIMESTAMP!!" border=0 width="300" height="250" alt="zooplus.fr" />
              </a>
            </div>
            <div>
              <h2 class="headline">
                ZooPlus
              </h2>
              <p class="body-1">
                Vous avez des achats à faire pour vos petits compagnons mais vous ne savez pas où les faire ? Zooplus est site d'achat en ligne où vous trouverez tout ce dont vous avez besoin à moindre coût ! Chiens, chats, nac... Tous y trouverons leur bonheur !
              </p>
              <p class="body-1">
                5% sont offerts sur votre première commande et, à chaque commande passée à partir du lien ci-dessous, vous faites une bonne action : 4% du montant de votre commande nous est reversé ! N'attendez plus !
              </p>
            </div>
          </section>
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
  
  #teaming{
    display: grid;
    grid-template-columns: 3fr 5fr;
    grid-gap: 16px;
    border: 1px solid lightgray;

    & > a{
      margin: auto;
    }

    .teaming-container{
      padding: 16px;
    }

    .teaming-button{
      display: inline-block;
      padding: 6px 12px;
      margin-bottom: 0;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.42857143;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-image: none;
      border: 1px solid transparent;
      border-radius: 4px;
      
      color: #fff;
      background: -moz-linear-gradient(top,#8cd8ff 0,#05abff 100%);
      background: -webkit-gradient(linear,left top,left bottom,color-stop(0,#8cd8ff),color-stop(100%,#05abff));
      background: -webkit-linear-gradient(top,#8cd8ff 0,#05abff 100%);
      background: -o-linear-gradient(top,#8cd8ff 0,#05abff 100%);
      background: -ms-linear-gradient(top,#8cd8ff 0,#05abff 100%);
      background: linear-gradient(to bottom,#8cd8ff 0,#05abff 100%);
      border: 1px solid #0daaff;
      text-decoration: none;
      font-size: 18px;
    }

    @media only screen and (max-width: 783px) {
      grid-template-columns: 100%;
    }
  }
  
  #zooplus{
    display: grid;
    grid-template-columns: 3fr 5fr;
    grid-gap: 16px;
    margin-top: 32px;

    background-color: #6DB03C;
    padding: 16px;

    @media only screen and (max-width: 783px) {
      grid-template-columns: 100%;

      img{
        width: 100%;
        height: auto;
      }
    }

    h2, p{
      color: white;
    }
  }
</style>
