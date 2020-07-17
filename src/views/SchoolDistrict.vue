<template>

<div class="schooldistrict">
  School District {{ did }}
  <div class="message"><strong><div v-html="did"></div></strong></div>
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