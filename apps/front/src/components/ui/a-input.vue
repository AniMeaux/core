<template>
  <div class="a-input">
    <label
      class="label"
      :for="name"
    >
      {{ label }}
    </label>
    <input
      class="input"
      :type="type"
      :name="name"
      :id="name"
      :value="value"
      v-model="tempValue"
      @input="setValue"
    />
  </div>
</template>

<script>
  export default {
    name: 'a-input',
    props: {
      type: {
        type: String,
      },
      name: {
        type: String,
      },
      label: {
        type: String,
      },
      value: {
        type: null,
      },
    },
    data() {
      return {
        tempValue: null,
      };
    },
    methods: {
      setValue() {
        this.$emit('input', this.tempValue);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .a-input{
    display: grid;
    grid-template-rows: auto 1fr;
  }
</style>