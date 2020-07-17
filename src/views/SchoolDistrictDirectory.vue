<template>
  
  <div class="schoolDistrictDirectory">
    <h1>School district Directory</h1>

    <router-link :to="{ name: 'schoolDistrictbyNumber', params: { did: 61 }}">School District 61</router-link>
    <router-link :to="{ name: 'schoolDistrictbyNumber', params: { did: 63 }}">School District 63</router-link>
  </div>
</template>
<script>

export default {
  name: 'SchoolDistrictDirectory',
}
</script>