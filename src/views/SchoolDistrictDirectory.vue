<template>
  <div class="schoolDistrictDirectory">
    <b-breadcrumb :items="crumbs"></b-breadcrumb>
    <h1>School district Directory</h1>
      <b-list-group v-for="item in schoolDistrictsList" :key="item.sd">
        <b-list-group-item><router-link :to="{ name: 'schoolDistrictByNumber', params: { did: item.sd }}">{{ item.district_name }} ({{ item.sd }})</router-link></b-list-group-item>
    </b-list-group>       
    <hr>
    <router-view></router-view>               
  </div>
</template>

<script>
import StudentSuccessDataService from "@/services/StudentSuccessDataService.js";
export default {
  name: 'SchoolDistrictDirectory',
  data() {
    return {
        schoolDistrictsList: [],
        crumbs: [
          {
            text: 'Home',
            href: '#'
          },
          {
            text: "School District Directory",
            active: true
          }
        ]

    }
  },
  created() {
    StudentSuccessDataService.getAllSchoolDistricts()
      .then((response) => {
        //console.log(response.data);
        this.schoolDistrictsList = response.data.school_districts;
        console.log(this.schoolDistrictsList);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        //console.log('There was an error:', error.response)
      })
  }
}
</script>