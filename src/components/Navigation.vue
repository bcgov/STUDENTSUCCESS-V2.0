<template>
 <div>
  <b-navbar class="navbar-dark bg-primary-nav" toggleable="lg" type="dark" variant="info">
    <div class="container">
    <b-navbar-brand  href="#">Student Success</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
    <b-collapse is-nav>
      <b-navbar-nav>
        <b-nav-item class="nav-link" href="#"><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item class="nav-link" href="#"> <router-link to="/glossary">Glossary</router-link></b-nav-item>
        <b-nav-item class="nav-link" href="#"> <router-link to="/cities">Cities Directory</router-link></b-nav-item>
        <b-nav-item class="nav-link" href="#"><router-link to="/school-districts">School District Directory</router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <Search></Search>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</div>
 
</template>

<script>
import Search from '@/components/Search.vue';
export default {
  name: 'Navigation',
  props: {
    msg: String
  },
  components: {
    Search: Search
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-link a{ color: white !important;}
</style>
