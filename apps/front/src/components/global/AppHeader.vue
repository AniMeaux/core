<template>
  <div
    class="app-header"
    :class="{
      scrolled
    }"
  >
    <div class="wrap">
      <a class="app-header-menu" @click.prevent="mobile = !mobile">
        <transition name="fade" mode="out-in">
          <i v-if="!mobile" key="menu" class="material-icons" aria-hidden="true">menu</i>
          <i v-else key="close" class="material-icons" aria-hidden="true">close</i>
        </transition>
      </a>
      <div class="app-header-logo">
        <nuxt-link to="/">
          <img
            class="mobile"
            title="Logo Ani'Meaux"
            alt="Logo Ani'Meaux"
            src="~/assets/img/logo-icon.svg"
            :height="60"
          >
          <img
            class="desktop"
            title="Logo Ani'Meaux"
            alt="Logo Ani'Meaux"
            src="~/assets/img/logo-simple.svg"
            :height="60"
          >
        </nuxt-link>
      </div>
      <nav class="app-header-navigation" :class="{ mobile: mobile }">
        <ul>
          <li v-for="(link, k) in links" :key="k">
            <nuxt-link
              :to="link.to"
              :title="link.title"
              :class="[link.color]"
              class="button"
              @click.native="mobile ? mobile = false : false"
            >
              <span>
                {{ link.name }}
              </span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <!-- <div class="app-header-buttons">
        <nuxt-link
          to="/become-member"
          class="btn btn-blue"
        >
          Devenir membre
        </nuxt-link>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      links: [
        {
          to: '/adopt',
          name: 'À adopter',
          title: 'Nos animaux à l\'adoption',
          color: 'blue'
        },
        {
          to: '/success',
          name: 'Nos réussites',
          title: 'Nos animaux adoptés',
          color: 'green'
        },
        {
          to: '/blog',
          name: 'Blog',
          title: 'Notre blog',
          color: 'red'
        },
        // {
        //   to: '/events',
        //   name: 'Agenda',
        //   title: 'Tous nos événements',
        //   color: 'red',
        // },
        {
          to: '/contact',
          name: 'Nous contacter',
          title: 'Des questions? Contactez-nous',
          color: 'lightblue'
        }
      ],
      mobile: false,
      scrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll() {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop
      this.scrolled = scrollPosition > 50
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables/_colors.scss";

  $header-height: 70px;
  $header-shadow-size: 2px;

  .app-header{
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;

    height: $header-height;
    background-color: white;

    &.scrolled{
      box-shadow: 0 3px 12px rgba(black, 0.08);
    }

    .wrap{
      display: flex;
    }

    &-menu{
      display: none;
      text-decoration: none;
      height: 100%;
      width: 45px;
      text-align: center;

      @media only screen and (max-width: 720px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }

    &-logo{
      display: flex;
      margin: auto 0;

      .mobile{
        display: none;
      }

      img{
        margin: auto 0;

        @media only screen and (max-width: 720px) {
          display: none;

          &.mobile{
            display: block;
          }
        }
      }
    }

    &-navigation{
      margin-left: 32px;

      &.mobile{
        position: fixed;
        display: flex;
        left: 0;
        top: 70px;
        width: 100%;

        background: white;
        margin: 0;
        box-shadow: 0 3px 3px rgba(black, 0.12);

        @media only screen and (max-width: 720px) {
          display: flex;
        }

        ul, li, a{
          flex-direction: column;
          width: 100%;
        }

        a{
          text-align: left;
          height: 45px;
          border: none;

          span{
            margin: auto 0;
          }
        }
      }

      @media only screen and (max-width: 720px) {
        display: none;
      }

      ul, li{
        margin: 0;
        padding: 0;
        list-style-type: none;
      }

      ul{
        display: flex;
      }

      a{
        display: flex;
        height: $header-height;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        vertical-align: middle;

        padding: 0 16px;
        color: $primary-text;

        border-bottom: 0px solid transparent;
        transition: border-bottom 200ms;

        span{
          margin: auto;
        }

        &.nuxt-link-active{
          border-bottom-width: 3px;
          &.blue{
            border-bottom-color: $blue;
          }

          &.green{
            border-bottom-color: $green;
          }

          &.yellow{
            border-bottom-color: $yellow;
          }

          &.red{
            border-bottom-color: $red;
          }

          &.lightblue{
            border-bottom-color: $lightblue;
          }
        }

        &:hover:not(.nuxt-link-active){
          border-bottom: 3px solid lightgray;
        }
      }
    }

    &-buttons{
      display: flex;
      justify-content: flex-end;
      flex: 1;

      .btn{
        height: 45px;
        line-height: 45px;
        text-decoration: none;
        padding: 0 16px;
        margin: auto 0;
      }
    }

    @media only screen and (max-width: 720px) {
      padding: 0 16px;
    }
  }
</style>
