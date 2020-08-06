<template>

<div class="school-list">

  <div v-if="schools.length">
    <h1 v-if="type=='district'">District {{ keyword }} Schools</h1>
    <h1 v-if="type=='city'">{{ keyword }} School</h1>
    <b-list-group v-for="item in this.schools" :key="item.mincode">
        <b-list-group-item><router-link :to="{ name: 'school', params: { mincode: item.mincode }}">{{item.school_name}} {{item.mincode}} <div v-if="item.independent=='0'">Public</div><div v-if="item.independent=='1'">Independent</div></router-link></b-list-group-item>
    </b-list-group>  

  </div>
  <hr>
  
  <router-view></router-view>
</div>
</template>
<script>
import StudentSuccessDataService from "@/services/StudentSuccessDataService.js";
export default {
  name: 'SchoolList',
  prop: ['type','keyword'],
  data() {
    return {
        type: this.$route.params.type,
        keyword: this.$route.params.keyword,
        schools: [],
        
    }
  },
  created() {
    if(this.type == "district"){
      StudentSuccessDataService.getSchoolsInDistrict(this.keyword)
        .then((response) => {
          this.schools = response.data.schools;
          
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          //console.log('There was an error:', error.response)
        })
    }
    if(this.type == "city"){
      StudentSuccessDataService.getSchoolsInCity(this.keyword)
        .then((response) => {
          this.schools = response.data;
          console.log(this.schools)
          
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          //console.log('There was an error:', error.response)
        })
    }    
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