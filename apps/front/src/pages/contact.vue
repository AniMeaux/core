<template>
  <div class="contact has-header">
    <div class="wrap">
      <h1 class="display-1 title-underline">
        Nous contacter
      </h1>
      <div class="layout-aside">
        <div>
          <p class="body-1">
            Vous avez une question concernant notre association ou vous souhaitez nous faire part d'un animal en danger? <br />N'hésitez pas à nous contacter par <a href="mailto:contact@animeaux.org">mail</a>, <a href="tel:+33612194392">téléphone</a>, ou même Facebook.
          </p>
          <p class="body-1">
            Nous répondons aux messages très rapidement alors n'hésitez pas à nous faire coucou!
          </p>
          <!-- <contact-form /> -->
          <home-facebook :width="720" :tab="'messages'"/>
        </div>
        <!-- <div>
          <h2 class="subhead-1">
            Nous rejoindre sur Facebook
          </h2>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  import ContactForm from '~/components/contact-view/contact-form';
  import HomeFacebook from '~/components/home-view/home-facebook';

  export default {
    head() {
      return {
        title: 'Nous contacter',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Contactez-nous par email, téléphone ou Facebook pour toute demande d\'adoption, famille d\'accueil ou signalement',
          },
        ],
      };
    },
    components: {
      ContactForm,
      HomeFacebook,
    },
  };
</script>

<style lang="scss" scoped>
  .contact{
    background-color: #F7F7F7;

    .display-1{
      color: $lightblue;
      margin: 16px 0;

      &::after{
        background-color: $lightblue;
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
