<template>
  <div class="header">
    <Navigation/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
export default {
  name: 'Header',
  props: {
    msg: String
  },
  components: {
    Navigation

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
