<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'SchoolDistrictSchoolsDirectory',
  components: {
    Header
  }
}
</script>
