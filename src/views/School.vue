<template>

<div class="school">
  <b-breadcrumb :items="crumbs"></b-breadcrumb>
 <h1> {{schoolInformation.school_name}} </h1>
 {{ schoolInformation.phy_address_line_1 }}
<h2>Other information</h2>
 {{ schoolInformation }}
  <div class="charts">
    <h2>Available Reports</h2>
    <ul>
      <li>
        Contextual Information
        <ul>
          <li>Demographic Information</li>
        </ul>
      </li>
      <li>
        Intellectual Development
        <ul>
          <li>Completion Rate</li>
          <li>Foundation Skills Assessment</li>
          <li>Grade-to-Grade Transitions</li>
          <li>Provincial Examinations</li>
        </ul>
      </li>   
      <li>
       Human and Social Development
        <ul>
          <li>Characteristics of Students Entering School</li>
          <li>Student Satisfaction</li>
        </ul>
      </li>
      <li>
        Career Development
        <ul>
          <li>Post-Secondary and Career Preparation</li>
           <li>Transition to BC Post-Secondary</li>
        </ul>
      </li>            
    </ul>
  </div>
</div>
</template>
<script>
import StudentSuccessDataService from "@/services/StudentSuccessDataService.js";
export default {
  name: 'School',
  data() {
    return {
        mincode: this.$route.params.mincode,
        schoolInformation: [],
        crumbs: [
          {
            text: 'Home',
            href: '#'
          },
          {
            text: 'School District',
            href: '#'
          },
          {
            text: this.$route.params.mincode,
            active: true
          }
        ]
    }
  },
  watch: {
      '$route'(to){
          this.mincode = to.params.mincode;
      }
  },
  created() {
    this.mincode = this.$route.params.mincode;
    StudentSuccessDataService.getSchoolInformation(this.mincode)
      .then((response) => {
        this.schoolInformation = response.data.school;
        // eslint-disable-next-line no-unused-vars
        console.log(this.schoolInformation);
      })
      
      .catch((error) => {
        // eslint-disable-next-line no-unused-vars
        console.log('There was an error:', error.response)
      })
  },

}
</script>
