<template>
  <div class="form-login-infos">
    <become-member-fieldset
      :legend="'Informations de connexion'"
      :number="2"
    >
      <div class="fields">
        <a-input
          type="email"
          name="email"
          label="Adresse e-mail:"
          v-model="form.email"
        />

        <a-input
          type="password"
          name="password"
          label="Mot de passe:"
          v-model="form.password"
        />
      </div>
    </become-member-fieldset>
  </div>
</template>

<script>
  import BecomeMemberFieldset from '~/components/become-member-view/become-member-fieldset';
  import AInput from '~/components/ui/a-input';

  export default {
    name: 'form-login-infos',
    data() {
      return {
        form: {
          email: null,
          password: null,
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
  .form-login-infos{
    .fields{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 16px;
    }
  }
</style>