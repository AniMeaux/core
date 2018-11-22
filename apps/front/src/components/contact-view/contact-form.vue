<template>
  <div class="contact-form">
    <form>
      <fieldset>
        <legend class="subhead-1">
          Vos informations
        </legend>
        <div class="field">
          <label class="label" for="first_name">
            Nom
          </label>
          <input class="input" type="text" id="first_name" name="first_name" v-model="data.first_name" />
        </div>
        <div class="field">
          <label class="label"  for="last_name">
            Prénom
          </label>
          <input class="input" type="text" id="last_name" name="last_name" v-model="data.last_name" />
        </div>
        <div class="field">
          <label class="label"  for="email">
            Email
          </label>
          <input class="input" type="email" id="email" name="email" v-model="data.email" />
        </div>
      </fieldset>
      <fieldset>
        <legend class="subhead-1">
          Votre message
        </legend>
        <div class="field">
          <label class="label"  for="subject">
            Sujet
          </label>
          <select class="select" name="subject" id="subject" v-model="data.subject">
            <option value="question">Une question</option>
            <option value="adoption">Adopter</option>
            <option value="abandonment">Abandon</option>
            <option value="report">Signalement</option>
            <option value="other">Autre</option>
          </select>
        </div>
        <div class="field">
          <label class="label" for="message">
            Message
          </label>
          <textarea id="message" name="message" cols="30" rows="10" v-model="data.message"></textarea>
        </div>
      </fieldset>
      <div class="buttons">
        <button type="submit" class="btn btn-blue">
          Envoyer
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'contact-form',
    data() {
      return {
        data: {
          first_name: null,
          last_name: null,
          subject: 'other',
        },
      };
    },
  };
</script>

<style lang="scss" scoped>
  .contact-form{
    fieldset{
      border: 1px solid $divider;
      padding: 16px;
    }
    
    .field{
      display: flex;
      flex-direction: column;
    }

    select{
      height: 40px;
    }

    textarea{
      border: 1px solid $divider;
      border-radius: 3px;
    }

    .buttons{
      display: flex;
      justify-content: flex-end;
      padding: 16px;
    }
  }
</style>