<template>
  
  <div class="schoolDistrictDirectory">
    <Header/>
    <h1>School district Directory</h1>

    <router-link :to="{ name: 'schoolDistrictbyNumber', params: { did: 61 }}">School District 61</router-link>
    <router-link :to="{ name: 'schoolDistrictbyNumber', params: { did: 63 }}">School District 63</router-link>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'SchoolDistrictDirectory',
  components: {
    Header
  }
}
</script>