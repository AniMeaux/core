<template>
  <transition v-if="data" name="modal" mode="out-in">
    <div class="adopt-modal" v-if="visible">
      <div class="adopt-modal-content">
        <h2 class="subhead-2">
          Adoptez {{ data.name }} !
        </h2>
        <p class="body-1">
          Vous souhaitez adopter {{ data.name }} ? Vous pouvez nous contacter sur <a href="mailto:adoption@animeaux.org">adoption@animeaux.org</a> ou par <a href="tel:+33612194392">téléphone</a>.
        </p>
        <p class="body-1">
          Les adoptions se font obligatoirement sous contrat associatif.
        </p>
        <button class="btn" @click="close">
          Fermer
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'adopt-modal',
    props: {
      data: {
        type: Object,
        required: true,
      },
      visible: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .adopt-modal{
    position: fixed;
    display: flex;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;

    transition: opacity 200ms, transform 200ms;

    background-color: rgba(black, 0.05);

    &-content{
      margin: auto;
      background-color: white;
      width: 320px;
      min-height: 180px;
      box-shadow: 0 6px 12px rgba(black, 0.12);

      padding: 16px;
    }
  }

  .modal{  
    &-enter, &-leave-to{
      transform: scale(0.9);
      opacity: 0;
    }

    &-enter-to, &-leave{
      opacity: 1;
      transform: scale(1);
    }
  }
</style>