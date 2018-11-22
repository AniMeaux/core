<template>
  <a href="https://www.facebook.com/events/228573844622300/" class="event-item">
    <h3 class="subhead-1 event-item-title">
      {{ name }}
    </h3>
    <span class="caption event-item-date">
      Du {{ getBegin }} au {{ getEnd }}
    </span>
    <p class="body-1 event-item-description">
      {{ description }}
    </p>
  </a>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'event-item',
    props: {
      id: {
        type: Number,
      },
      name: {
        type: String,
      },
      description: {
        type: String,
      },
      begin: {
      },
      end: {
      },
    },
    computed: {
      getBegin() {
        return moment(this.begin).format('DD MMMM');
      },
      getEnd() {
        return moment(this.end).format('DD MMMM');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .event-item{
    position: relative;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    padding: 16px;
    padding-left: 32px;

    &::before{
      position: absolute;
      content: " ";
      width: 3px;
      height: 3px;
      left: 16px;
      top: 24px;
      background: $primary-text;
      border-radius: 3px;
    }

    &:hover{
      background: rgb(245, 245, 245);
    }

    &-date, &-description{
      margin: 0;
    }

    &-date{
      color: $blue;
    }

    &-description{
      color: $secondary-text;
    }
  }
</style>

