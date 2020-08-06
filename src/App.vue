<template>
  <div id="app">
    <Header/>
    <div class="container">
      <router-view></router-view>
    </div>
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
