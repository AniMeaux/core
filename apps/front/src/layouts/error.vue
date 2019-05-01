<template>
  <div>
    <header>
      <app-header />
    </header>
    <main>
      <component :is="errorComponent" />
    </main>
    <footer>
      <app-footer />
    </footer>
  </div>
</template>

<script>
import AppHeader from '~/components/global/AppHeader'
import AppFooter from '~/components/global/AppFooter'

import NotFound from '~/pages/404'
import InternalError from '~/pages/500'

export default {
  components: {
    AppHeader,
    AppFooter
  },
  props: {
    error: {
      type: [Object, String],
      default: null
    }
  },
  computed: {
    errorComponent() {
      return this.error.statusCode === 404 ? NotFound : InternalError
    }
  }
}
</script>
