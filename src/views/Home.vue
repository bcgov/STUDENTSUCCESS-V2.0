<template>
  <div class="home">
    <div class="search">
      <Search v-bind:searchList="this.schoolList"></Search>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
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
    }
  }
  
}
</script>
