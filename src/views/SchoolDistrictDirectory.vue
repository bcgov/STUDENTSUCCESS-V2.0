<template>
  
  <div class="schoolDistrictDirectory">
    <Header/>
    <h1>School district Directory</h1>
    <router-link :to="{ name: 'schoolDistrictByNumber', params: { did: 61 }}">School District 61</router-link>
    <router-link :to="{ name: 'schoolDistrictByNumber', params: { did: 63 }}">School District 63</router-link>
    <router-link :to="{ name: 'schoolDistrictByNumber', params: { did: 64 }}">School District 64</router-link>    
    <router-link :to="{ name: 'schoolDistrictByNumber', params: { did: 65 }}">School District 65</router-link>
    <router-link :to="{ name: 'schoolDistrictByNumber', params: { did: 66 }}">School District 66</router-link>
    <router-link :to="{ name: 'schoolDistrictByNumber', params: { did: 67 }}">School District 67</router-link>
    <router-link :to="{ name: 'schoolDistrictByNumber', params: { did: 68 }}">School District 68</router-link>                
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