<template>
  <modal-factory />
  <router-view />
</template>

<script>
import ModalFactory from './components/ModalFactory/index.vue'

export default {
  name: 'App',
  components: { ModalFactory }
}
</script>

<style lang="scss">

</style>