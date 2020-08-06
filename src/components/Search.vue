<template>
<div class="cities">
  <b-form-input v-model="selected" list="my-list-id" debounce="500"></b-form-input>
  <button type="button" class="btn btn-primary" v-on:click="searchForSchools">Search</button>
  

  <datalist id="my-list-id">
    <option>Manual Option</option>
    <option v-for="item in searchList" :key="item.primary_key"> {{ item.s }} </option>

  </datalist>
{{selected.mincode}}
</div>
</template>
<script>
import StudentSuccessDataService from "@/services/StudentSuccessDataService.js";
export default {
  name: 'Search',
  data() {
    return {
      selected: "",
      searchList: [],
      selectedSd: "",
      selectedMincode: "",
    }
  },
  methods: {
    searchForSchools(){
      if(this.selected.includes("School District")){
        this.selectedSd = this.searchList.find((school) => {
            return school.s.replace(/\s+/g,' ').trim() === this.selected.replace(/\s+/g,' ').trim(); // remove database spaces
        }).sd;
        console.log(this.selectedSd);
        this.$router.push({name: 'schoolDistrictByNumber', params:{ did: this.selectedSd}})
      }else{
        this.selectedMincode = this.searchList.find((school) => {
            return school.s === this.selected;
        }).mincode;
        this.$router.push({name: 'school', params:{ mincode: this.selectedMincode}})
      }
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