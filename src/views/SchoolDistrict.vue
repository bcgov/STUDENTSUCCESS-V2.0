<template>

<div class="schooldistrict">
  <b-breadcrumb :items="crumbs"></b-breadcrumb>
  <b-alert show><div class="message"><strong><div v-html="did"></div></strong></div></b-alert>
  <h1>School District {{ did }} ({{ districtInformation.district_name}})</h1>

<img v-bind:src="'https://studentsuccess.gov.bc.ca/img/maps/map_sd_' + this.did +'.png'"  alt="Small map graphic with School District 010 highlighted.">
<strong>District Office:</strong>   {{ districtInformation.courier_address }}<br>
<strong>Phone:</strong> {{ districtInformation.district_phone }}<br>
<strong>Website:</strong> {{  districtInformation.website }}<br>
<strong>Superintendent of Schools:</strong> {{ districtInformation.contact_email }}<br>


<strong>OTHER</strong>
  {{  districtInformation.contact_email }}
  {{  districtInformation.contact_fax }}
  {{  districtInformation.contact_first_name }}
  {{  districtInformation.contact_phone }}
  {{  districtInformation.contact_phone_extension }}
  {{  districtInformation.contact_title }}
  {{  districtInformation.contact_email }}
  {{ districtInformation.courier_address }}
  {{ districtInformation.courier_city }}
  {{ districtInformation.courier_postal_code }}
  {{ districtInformation.courier_province }}
  {{ districtInformation.district_fax }}
  {{ districtInformation.district_name }}
  {{ districtInformation.district_phone }}
  {{ districtInformation.phy_address_line_1 }}
  {{ districtInformation.phy_city }}
  {{ districtInformation.phy_postal_code }}
  {{ districtInformation.phy_province }}
  {{ districtInformation.position }}
  {{ districtInformation.sd  }}
  {{  districtInformation.website }}



  <hr>
  <div class="charts">
    <h2>Available Reports</h2>
    <ul>
      <li>
        <h2>Contextual Information</h2>
        <ul>
          <li><router-link :to="{ name: 'District Report', params: { report: 'contextual-information' }}">Contextual Information</router-link></li>
        </ul>
      </li>
      <li>
        <h2>Intellectual Development</h2>
        <ul>
          <li><router-link :to="{ name: 'District Report', params: { report: 'completion-rates' }}">Completion Rates</router-link></li>
          <li><router-link :to="{ name: 'District Report', params: { report: 'foundation-skills-assessment' }}">Foundation Skills Assessments</router-link></li>
          <li><router-link :to="{ name: 'District Report', params: { report: 'grade-to-grade-transitions' }}">Grade-to-Grade Transitions</router-link></li>
          <li><router-link :to="{ name: 'District Report', params: { report: 'provincial-examinations' }}">Provincial Examinations</router-link></li>
        </ul>
      </li>   
      <li>
       <h2>Human and Social Development</h2>
        <ul>
          <li><router-link :to="{ name: 'District Report', params: { report: 'characteristics-of-students-entering-school' }}">Characteristics of Students Entering School</router-link></li>
          <li><router-link :to="{ name: 'District Report', params: { report: 'student-satisfaction' }}">Student Satisfaction</router-link></li>
        </ul>
      </li>
      <li>
        <h2>Career Development</h2>
        <ul>
          <li><router-link :to="{ name: 'District Report', params: { report: 'post-secondary-and-career-preparation' }}">Post-Secondary and Career Preparation</router-link></li>
          <li><router-link :to="{ name: 'District Report', params: { report: 'transition-to-bc-post-secondary' }}">Transition to BC Post-Secondary</router-link></li>
        </ul>
      </li>            
    </ul>
  </div>

<router-link :to="{ name: 'schoolList', params: { type: 'district', keyword: this.did }}">View Schools in District {{ this.did }} </router-link>



  <router-view></router-view>    
  
</div>
</template>
<script>
import StudentSuccessDataService from "@/services/StudentSuccessDataService.js";
export default {
  name: 'SchoolDistrict',
  components: {

  },
  data() {
    return {
        did: this.$route.params.did,
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