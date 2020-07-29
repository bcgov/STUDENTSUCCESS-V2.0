<template>

<div class="school">
 <h1>School {{this.sid}} </h1>
</div>
</template>
<script>

export default {
  name: 'School',
  data() {
    return {
        sid: this.$route.params.sid,
    }
  },
  watch: {
      '$route'(to){
          this.sid = to.params.sid;
      }
  },
}
</script>
