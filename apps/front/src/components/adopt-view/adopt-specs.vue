<template>
  <div class="adopt-specs">
    <h2 class="subhead-2">
      Caractéristiques
    </h2>
    <table class="body-1">
      <tbody>
        <tr v-if="age">
          <td>
            Age:
          </td>
          <td>
            {{ age }}
          </td>
        </tr>
        <tr>
          <td>
            Sexe:
          </td>
          <td>
            {{ gender }}
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
  import moment from 'moment';

  export default {
    name: 'adopt-specs',
    props: {
      data: {
        type: Object,
      },
    },
    computed: {
      age() {
        return this.data.birthday ? moment(this.data.birthday).fromNow(true) : null;
      },
      gender() {
        return this.data.gender === 'male' ? 'male' : 'femelle';
      },
    },
  };
</script>

<style lang="scss" scoped>
  .adopt-specs{
  }
</style>