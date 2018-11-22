<template>
  <div class="become-member-form">
    <form-personal-infos />
    <form-login-infos />
    <form-association-infos />
    <form-subscription-infos />
  </div>
</template>

<script>
  import FormPersonalInfos from './become-member-form/form-personal-infos';
  import FormLoginInfos from './become-member-form/form-login-infos';
  import FormAssociationInfos from './become-member-form/form-association-infos';
  import FormSubscriptionInfos from './become-member-form/form-subscription-infos';

  export default {
    name: 'become-member-form',
    components: {
      FormPersonalInfos,
      FormLoginInfos,
      FormAssociationInfos,
      FormSubscriptionInfos,
    },
  };
</script>

<style lang="scss" scoped>
  .become-member-form{
    padding: 32px 0;
  }
</style>