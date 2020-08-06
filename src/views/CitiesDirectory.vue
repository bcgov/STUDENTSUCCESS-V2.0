<template>
<div class="cities">
  <b-breadcrumb :items="crumbs"></b-breadcrumb>
  <h1>City Directory</h1>
  <h2>Search by Cities</h2>
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
      citiesList: [],
      crumbs: [
          {
            text: 'Home',
            href: '#'
          },
          {
            text: "Cities Directory",
            active: true
          }
      ],
    }
  },
  created() {
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