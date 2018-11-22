<template>
  <div class="form-personal-infos">
    <become-member-fieldset
      :legend="'Informations personnelles'"
      :number="1"
    >
      <div class="fields">
        <a-input
          type="text"
          value="test"
          name="last_name"
          label="Nom:"
          v-model="form.last_name"
        />

        <a-input
          type="text"
          name="first_name"
          label="Prénom:"
          v-model="form.first_name"
        />

        <a-input
          type="text"
          name="address"
          label="Adresse:"
          v-model="form.location.address"
        />

        <a-input
          type="text"
          name="postal_code"
          label="Code postal:"
          v-model="form.location.postal_code"
        />

        <a-input
          type="text"
          name="city"
          label="Ville:"
          v-model="form.location.city"
        />

        <a-input
          type="tel"
          name="phone"
          label="Numéro de téléphone:"
          v-model="form.telephone.number"
        />
      </div>
    </become-member-fieldset>
  </div>
</template>

<script>
  import BecomeMemberFieldset from '~/components/become-member-view/become-member-fieldset';
  import AInput from '~/components/ui/a-input';

  export default {
    name: 'form-personal-infos',
    data() {
      return {
        form: {
          last_name: null,
          first_name: null,
          location: {
            address: null,
            postal_code: null,
            city: null,
          },
          telephone: {
            number: null,
          },
        },
      };
    },
    components: {
      AInput,
      BecomeMemberFieldset,
    },
  };
</script>

<style lang="scss" scoped>
  .form-personal-infos{
    .fields{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 16px;
    }
  }
</style>