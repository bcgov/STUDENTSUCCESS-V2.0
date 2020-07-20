<template>

<div class="schooldistrict">
  <b-alert show><div class="message"><strong><div v-html="did"></div></strong></div></b-alert>
  School District {{ did }}
  
  
  CHART
  FOOTER

</div>
</template>
<script>
export default {
  name: 'SchoolDistrict',
  props: {
    did: String
  },
    created() {
    //Check for any messages from routes
    this.did = this.$route.params.did;
  }
}
</script>