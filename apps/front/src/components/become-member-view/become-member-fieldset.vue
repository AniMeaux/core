<template>
  <div class="become-member-fieldset">
    <fieldset>
      <legend class="subhead-2">
        <div class="fieldset-number">
          {{ number }}
        </div>
        {{ legend }}
      </legend>
      <slot />
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'BecomeMemberFieldset',
  props: {
    legend: {
      type: String,
      default: null
    },
    number: {
      type: Number,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables/_colors.scss";

  .become-member-fieldset{
    $size: 28px;

    margin-bottom: 32px;

    fieldset{
      border: none;
      margin: 0;
      padding: 0;
      padding-left: $size * 2;
      padding-right: 32px;

      legend{
        position: relative;
      }
    }

    .fieldset-number{

      position: absolute;
      left: -$size * 1.5;

      background-color: $blue;
      color: white;
      width: $size;
      height: $size;
      line-height: $size;
      border-radius: 100%;
      text-align: center;
    }
  }
</style>
