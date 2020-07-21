<template>
  <div id="app">
    <Header/>
    ROUTER VIEW START
    <router-view></router-view>
    ROUTER VIEW END
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
