<template>
  <div class="form-association-infos">
    <become-member-fieldset
      :legend="'L\'association et vous'"
      :number="3"
    >
      <div class="fields">
        <a-input
          v-model="form.last_name"
          type="text"
          value="test"
          name="last_name"
          label="Nom:"
        />

        <a-input
          v-model="form.first_name"
          type="text"
          name="first_name"
          label="Prénom:"
        />

        <a-input
          v-model="form.location.address"
          type="text"
          name="address"
          label="Adresse:"
        />

        <a-input
          v-model="form.location.postal_code"
          type="text"
          name="postal_code"
          label="Code postal:"
        />

        <a-input
          v-model="form.location.city"
          type="text"
          name="city"
          label="Ville:"
        />

        <a-input
          v-model="form.telephone.number"
          type="tel"
          name="phone"
          label="Numéro de téléphone:"
        />
      </div>
    </become-member-fieldset>
  </div>
</template>

<script>
import BecomeMemberFieldset from '~/components/become-member-view/become-member-fieldset'
import AInput from '~/components/ui/a-input'

export default {
  name: 'FormAssociationInfos',
  components: {
    AInput,
    BecomeMemberFieldset
  },
  data() {
    return {
      form: {
        last_name: null,
        first_name: null,
        location: {
          address: null,
          postal_code: null,
          city: null
        },
        telephone: {
          number: null
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-association-infos{
    .fields{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 16px;
    }
  }
</style>
