<template>
  <div>
    <h1>School District 63</h1>
    <router-link :to="{ name: 'schoolDistrictbyNumber', params: { did: 61 }}">Cloverdale</router-link>
    <router-link :to="{ name: 'schoolDistrictbyNumber', params: { did: 63 }}">Doncaster</router-link>
  </div>
</template>
<script>

export default {
  name: 'SchoolDistrictSchoolsDirectory',
}
</script>