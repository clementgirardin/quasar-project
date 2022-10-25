<template>
  <router-link :to="{ path: 'hello' }">Hello page</router-link>
  <router-link :to="{ path: 'Exercice1Page' }">Exercice1 page</router-link>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
