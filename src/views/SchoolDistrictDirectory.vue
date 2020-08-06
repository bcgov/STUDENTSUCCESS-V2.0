<template>
  <div class="schoolDistrictDirectory">
    <b-breadcrumb :items="crumbs"></b-breadcrumb>
    <h1>School District Directory</h1>
    <div class="school-district-list">
        <b-list-group v-for="item in schoolDistrictsList" :key="item.sd" class="list-striped">
          <b-list-group-item><router-link :to="{ name: 'schoolDistrictByNumber', params: { did: item.sd }}">{{ item.district_name }} ({{ item.sd }})</router-link></b-list-group-item>
      </b-list-group>       
    </div>
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
<style scoped>
  .school-district-list .list-striped:nth-child(2n+1) div{
    background-color: rgba(0,0,0,0.05)
  }
  .school-district-list  .list-striped:nth-child(2n) div{
    background-color: white;
  }
</style>