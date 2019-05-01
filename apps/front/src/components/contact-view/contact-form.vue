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
          <input id="first_name" v-model="data.first_name" class="input" type="text" name="first_name">
        </div>
        <div class="field">
          <label class="label" for="last_name">
            Prénom
          </label>
          <input id="last_name" v-model="data.last_name" class="input" type="text" name="last_name">
        </div>
        <div class="field">
          <label class="label" for="email">
            Email
          </label>
          <input id="email" v-model="data.email" class="input" type="email" name="email">
        </div>
      </fieldset>
      <fieldset>
        <legend class="subhead-1">
          Votre message
        </legend>
        <div class="field">
          <label class="label" for="subject">
            Sujet
          </label>
          <select id="subject" v-model="data.subject" class="select" name="subject">
            <option value="question">
              Une question
            </option>
            <option value="adoption">
              Adopter
            </option>
            <option value="abandonment">
              Abandon
            </option>
            <option value="report">
              Signalement
            </option>
            <option value="other">
              Autre
            </option>
          </select>
        </div>
        <div class="field">
          <label class="label" for="message">
            Message
          </label>
          <textarea id="message" v-model="data.message" name="message" cols="30" rows="10" />
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
  name: 'ContactForm',
  data() {
    return {
      data: {
        first_name: null,
        last_name: null,
        subject: 'other'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables/_colors.scss";

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
