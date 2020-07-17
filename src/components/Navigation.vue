<template>
  <div class="navigation">
   Navigation 
   <router-link to="/">Home</router-link>
   <router-link to="/glossary">Glossary</router-link>
   <router-link to="/school-district">School District Directory</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
