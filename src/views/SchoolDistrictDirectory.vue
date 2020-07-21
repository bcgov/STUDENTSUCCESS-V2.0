<template>
  <div class="schoolDistrictDirectory">
    <h1>School district Directory</h1>
    <b-list-group>
      <b-list-group-item><router-link :to="{ name: 'schoolDistrictByNumber', params: { did: 61 }}">School District 61</router-link></b-list-group-item>
      <b-list-group-item><router-link :to="{ name: 'schoolDistrictByNumber', params: { did: 63 }}">School District 63</router-link></b-list-group-item>
      <b-list-group-item><router-link :to="{ name: 'schoolDistrictByNumber', params: { did: 64 }}">School District 64</router-link></b-list-group-item>    
      <b-list-group-item><router-link :to="{ name: 'schoolDistrictByNumber', params: { did: 65 }}">School District 65</router-link></b-list-group-item>
      <b-list-group-item><router-link :to="{ name: 'schoolDistrictByNumber', params: { did: 66 }}">School District 66</router-link></b-list-group-item>
      <b-list-group-item><router-link :to="{ name: 'schoolDistrictByNumber', params: { did: 67 }}">School District 67</router-link></b-list-group-item>
      <b-list-group-item><router-link :to="{ name: 'schoolDistrictByNumber', params: { did: 68 }}">School District 68</router-link></b-list-group-item>
    </b-list-group>   
    <hr>
    <router-view></router-view>               
  </div>
</template>
<script>

export default {
  name: 'SchoolDistrictDirectory',
}
fdcdb915ff5863baf4
</script>