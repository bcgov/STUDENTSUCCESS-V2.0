<template>
<div class="cities">
  <h1>Search for School or District</h1>
  <b-form-input v-model="selectedCity" list="my-list-id"></b-form-input>
  <button v-on:click="searchForSchools">Search</button>
  

  <datalist id="my-list-id">
    <option>Manual Option</option>

    <option v-for="item in searchList" :key="item.mincode"> {{ item.s }} </option>
  </datalist>

</div>
</template>
<script>
import StudentSuccessDataService from "@/services/StudentSuccessDataService.js";
export default {
  name: 'Search',
  data() {
    return {
      selectedCity: "",
      selectedCitySchoolsList: [],
      searchList: []
    }
  },
   methods: {
     searchForSchools:{
       
     }
  },
  created() {
    StudentSuccessDataService.getAllSchoolsAndDistricts()
      .then((response) => {
        this.searchList = response.data
        console.log(this.schoolList);
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