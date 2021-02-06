<template>
  <div class="report">
    <div v-if="report=='contextual-information'">
      <ContextualInformation></ContextualInformation>
    </div>

    <div v-if="report=='completion-rate'">
      <CompletionRate></CompletionRate>
    </div>
    
    <div v-if="report=='foundation-skills-assessment'">
      <CompletionRate></CompletionRate>
    </div>
    <div v-if="report=='grade-to-grade-transitions'">
      <CompletionRate></CompletionRate>
    </div>
    <div v-if="report=='provincial-examinations'">
      <CompletionRate></CompletionRate>
    </div>
    <div v-if="report=='characteristics-of-students-entering-school'">
      <CompletionRate></CompletionRate>
    </div>
    <div v-if="report=='student-satisfaction'">
      <CompletionRate></CompletionRate>
    </div>
    <div v-if="report=='post-secondary-and-career-preparation'">
      <CompletionRate></CompletionRate>
    </div>          
    <div v-if="report=='transition-to-bc-post-secondary'">
      <CompletionRate></CompletionRate>
    </div>                
  </div>
</template>
<script>
import StudentSuccessDataService from "@/services/StudentSuccessDataService.js";
import CompletionRate from "@/components/CompletionRate.vue"
import ContextualInformation from "@/components/ContextualInformation.vue"


export default {
  name: 'SchoolDistrict',
  components: {
    CompletionRate: CompletionRate,
    ContextualInformation: ContextualInformation
  },
  data() {
    return {
        report: this.$route.params.report,
        districtInformation: [],
        schoolDistrictSchoolsList: [],
        crumbs: [
          {
            text: 'Home',
            href: '#'
          },
          {
            text: 'School District Directory',
            href: '/school-districts'
          },
          {
            text: "School District " + this.$route.params.did,
            active: true
          },
          {
            text: this.report,
            active: true
          }
        ]
    }
    
  },
  watch: {
      '$route'(to){
          this.did = to.params.did;
      }
  },
  created() {
    console.log(this.did);
    StudentSuccessDataService.getSchoolDistrictInformation(this.did)
      .then((response) => {
        this.districtInformation = response.data
        console.log('District Info: ' + this.districtInformation);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        //console.log('There was an error:', error.response)
      })
  },
   methods: {
  }
}
</script>
<style scoped>
  img{
    width: 300px;
    float:right;
  }
</style>