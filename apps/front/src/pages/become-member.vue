<template>
  <div class="become-member has-header">
    <div class="wrap">
      <div class="become-member-content">
        <h1 class="headline title-underline">
          Devenir membre
        </h1>
        <become-member-form />
      </div>
    </div>
  </div>
</template>

<script>
  import BecomeMemberForm from '~/components/become-member-view/become-member-form';

  export default {
    name: 'become-member',
    components: {
      BecomeMemberForm,
    },
  };
</script>

<style lang="scss" scoped>
  .become-member{
    background-color: #F7F7F7;

    &-content{
      width: 70%;
      margin: auto;

      .headline{
        margin-top: 16px;
      }
    }

    &-form{
      background-color: white;
      border-radius: 3px 3px 0 0;
      margin-top: 32px;
    }
  }
</style>