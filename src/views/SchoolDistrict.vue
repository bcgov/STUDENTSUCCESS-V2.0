<template>

<div class="schooldistrict">
  <b-alert show><div class="message"><strong><div v-html="did"></div></strong></div></b-alert>
  <h1>School District {{ did }} ({{ districtInformation.district_name}})</h1>


<img v-bind:src="'https://studentsuccess.gov.bc.ca/img/maps/map_sd_' + districtInformation.sd +'.png'"  alt="Small map graphic with School District 010 highlighted.">

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
  <router-view></router-view>    
  
</div>
</template>
<script>
import StudentSuccessDataService from "@/services/StudentSuccessDataService.js";
export default {
  name: 'SchoolDistrict',
  data() {
    return {
        did: this.$route.params.did,
        districtInformation: []
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
        console.log(this.districtInformation);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        //console.log('There was an error:', error.response)
      })
  }
}
</script>
<style scoped>
  img{
    width: 300px;
    float:right;
  }
</style>