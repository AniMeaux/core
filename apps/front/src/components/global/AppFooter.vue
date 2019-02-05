<template>
  <div class="app-footer">
    <div class="wrap">
      <div class="app-footer-navigation">
        <nav>
          <ul>
            <li v-for="(link, k) in links" :key="k">
              <nuxt-link :to="link.path" :title="link.title" class="menu">
                {{ link.title }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="app-footer-bottom">
        <div class="app-footer-content">
          <div class="name subhead-2">
            Association Ani<span class="green">'</span>Meaux
          </div>
          <div class="siret body-1">
            SIRET: 839 627 171
          </div>
          <div class="address body-1">
            81, Rue Du Faubourg Saint-Nicolas
          </div>
          <div class="address body-1">
            77100, MEAUX
          </div>
          <div class="contact">
            <a class="tel menu" :href="`tel:${getTelephone}`">
              {{ getTelephoneText }}
            </a>
            <a href="mailto:contact@animeaux.org" class="email menu">
              contact@animeaux.org
            </a>
          </div>
        </div>
        <div class="app-footer-logo" style="display: flex;">
          <nuxt-link to="/" style="margin: auto 0; margin-left:32px;">
            <img
              title="Ani'Meaux logo"
              src="~/assets/img/logo-simple.svg"
              alt="Logo Ani'Meaux"
              :height="60"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-footer',
    computed: {
      getTelephone() {
        return '+33612194392';
      },
      getTelephoneText() {
        return '06 12 19 43 92';
      },
    },
    data() {
      return {
        links: [
          // {
          //   title: 'Devenir membre',
          //   path: '/become-member',
          // },
          {
            title: 'Mentions légales',
            path: '/legal',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .app-footer{
    &-navigation{
      border-bottom: 1px solid lightgray;
      
      ul, li{
        margin: 0;
        padding: 0;
        list-style-type: none;

        a{
          text-decoration: none;
          display: flex;
          height: 45px;
          line-height: 45px;
          padding: 0 16px;
          margin: 0;
        }
      }

      ul{
        display: flex;
        justify-content: center;
      }

      margin-bottom: 16px;
    }

    &-logo{
      margin: auto 0;
    }

    &-bottom{
      display: flex;
      justify-content: space-between;
      margin-bottom: 32px;

      @media only screen and (max-width: 783px) {
        flex-direction: column;
        justify-content: flex-start;
        padding: 16px;
      }

      .name{
        margin: 0;
        
        .green{
          color: $green;
        }
      }

      .siret, .address{
        margin: 0;
      }

      .contact{
        display: flex;
        margin-top: 8px;

        a{
          color: $blue;
          text-decoration: none;
        }

        a:first-child{
          margin-right: 16px;
        }
      }
    }
  }
</style>
