<template>
  <div class="home-events" v-if="items.length > 0">
    <h2 class="headline home-events-title">
      <i class="material-icons" aria-hidden="true">today</i>
      Evénements à venir
    </h2>
    <event-item
      v-if="items.length > 0"
      v-for="(item, k) in items"
      :key="k"
      :id="item.id"
      :name="item.name"
      :description="item.description"
      :url="item.url"
      :begin="item.begin_at"
      :end="item.end_at"
    />
  </div>
</template>

<script>
  import moment from 'moment';
  import EventItem from './home-events/event-item';

  /**
    component - homeEvents
   */
  export default {
    name: 'home-events',
    components: {
      EventItem,
    },
    data() {
      return {
        items: [],
        begin: moment('2018-07-07'),
      };
    },
    created() {
      this.$api.get('/events').then((res) => {
        if (res.ok) {
          this.items = res.data;
        }
      });
    },
  };
</script>

<style lang="scss" scoped>
  .home-events{
    margin-top: 16px;

    &-title{
      display: inline-flex;
      color: $blue;

      i{
        vertical-align: middle;
        padding-right: 16px;
        margin: auto 0;
      }
    }
  }
</style>

