<template>
  <div class="partners has-header">
    <div class="wrap">
      <h1 class="display-1 title-underline">
        Nos partenaires
      </h1>
      <div class="layout-aside">
        <div class="partners__list">
          <a href="https://medailleschien.com" target="_blank" rel="noopener nofollow">
            <img src="~/assets/img/partners/medailleschien.jpg" alt="MedaillesChien" height="300">
          </a>
          <a href="https://www.le-coin-des-animaux.fr" target="_blank" rel="noopener nofollow">
            <img src="~/assets/img/partners/coindesanimaux.jpg" alt="Coin des animaux" height="300">
          </a>
          <a href="https://aalak.fr/" target="_blank" rel="noopener nofollow">
            <img src="~/assets/img/partners/aalak.jpg" alt="Aalak" height="300">
          </a>
          <a href="https://www.ha-solidaire.com" target="_blank" rel="noopener nofollow">
            <img src="https://www.ha-solidaire.com/images/logo.png" alt="Ha-Solidaire" height="300">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
