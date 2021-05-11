<template>
  <div class="home">
    <b-breadcrumb :items="crumbs"></b-breadcrumb>
    <h1>Search for school</h1>
    <div class="search">
      <Search v-bind:searchList="this.schoolList"></Search>
    </div>
    
  </div>

</template>

<script>

import Search from '@/components/Search.vue';
export default {
  name: 'Home',
  components: {
    Search: Search
  },
  data() {
    return {
      crumbs: [
          {
            text: 'Home',
            active: true
          }
        ]
    }
  }
  
}
</script>
