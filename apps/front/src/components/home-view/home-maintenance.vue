<template>
  <div class="home-maintenance">
    <div class="wrap">
      <div class="home-maintenance-content">
        <h2 class="subhead-2">
          Maintenance
        </h2>
        <p class="body-1">
          Notre site est actuellement en maintenance. Il se peut que certaines fonctionnalités ne fonctionnent pas entièrement. <nuxt-link to="/contact">Contactez-nous</nuxt-link> directement pour avoir des informations sur nos animaux à l'adoption.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMaintenance'
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables/_colors.scss";

  .home-maintenance{
    background-color: #e09f0d;
    padding: 14px 24px;

    .wrap{
      display: flex;
    }

    h2, p{
      color: white;
      margin: 0;
    }

    p{
      a{
        color: white;
      }
    }
  }
</style>
