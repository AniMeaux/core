<template>
  <div class="a-input">
    <label
      class="label"
      :for="name"
    >
      {{ label }}
    </label>
    <input
      :id="name"
      v-model="tempValue"
      class="input"
      :type="type"
      :name="name"
      :value="value"
      @input="setValue"
    >
  </div>
</template>

<script>
export default {
  name: 'AInput',
  props: {
    type: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    value: {
      type: null,
      default: null
    }
  },
  data() {
    return {
      tempValue: null
    }
  },
  methods: {
    setValue() {
      this.$emit('input', this.tempValue)
    }
  }
}
</script>

<style lang="scss" scoped>
  .a-input{
    display: grid;
    grid-template-rows: auto 1fr;
  }
</style>
