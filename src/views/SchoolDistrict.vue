<template>

<div class="schooldistrict">
  <b-alert show><div class="message"><strong><div v-html="did"></div></strong></div></b-alert>
  School District {{ did }}
  <hr>
</div>
</template>
<script>
export default {
  name: 'SchoolDistrict',
  data() {
    return {
        did: this.$route.params.did
    }
  },
  watch: {
      '$route'(to){
          this.did = to.params.did;
      }
  },
}
</script>