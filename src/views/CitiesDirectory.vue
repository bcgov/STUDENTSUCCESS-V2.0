<template>
<div class="cities">
  <h1>City Directory</h1>
  <b-form-input v-model="selectedCity" list="my-list-id"></b-form-input>
  <button v-on:click="searchForSchools">Search</button>

  <datalist id="my-list-id">
    <option>Manual Option</option>
    <option v-for="city in citiesList" :key="city.phy_city"> {{ city.phy_city }}</option>
  </datalist>

  <h2>Schools in {{selectedCity}}</h2>
  <div class="list-of-cities">

    <b-list-group v-for="item in citiesList" :key="item">
        <b-list-group-item><router-link :to="{ name: 'schoolList', params: { type: 'city', keyword: item.phy_city }}">{{item.phy_city}} ({{item.totalschools}})</router-link></b-list-group-item>
    </b-list-group>    
  </div>
   

   <router-view></router-view>

</div>
</template>
<script>
import StudentSuccessDataService from "@/services/StudentSuccessDataService.js";
export default {
  name: 'CitiesDirectory',
  data() {
    return {
      selectedCity: "",
      citiesList: [],
      selectedCitySchoolsList: [],
    }
  },
  created() {
    this.selectedCity = "Select a city";
    StudentSuccessDataService.getAllCities()
      .then((response) => {
        this.citiesList = response.data
        console.log(this.citiesList);
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