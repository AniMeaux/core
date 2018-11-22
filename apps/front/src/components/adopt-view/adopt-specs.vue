<template>
  <div class="adopt-specs">
    <h2 class="subhead-2">
      Caractéristiques
    </h2>
    <table class="body-1">
      <tbody>
        <tr>
          <td>
            Age:
          </td>
          <td>
            {{ data.age }}
          </td>
        </tr>
        <tr>
          <td>
            Sexe:
          </td>
          <td>
            {{ data.gender }}
          </td>
        </tr>
        <tr>
          <td>
            Espèce:
          </td>
          <td>
            {{ data.species }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'adopt-specs',
    props: {
      data: {
        type: Object,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .adopt-specs{
  }
</style>