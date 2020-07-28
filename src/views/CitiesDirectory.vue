<template>
<div class="cities">
  <h1>City Directory</h1>
      <b-list-group v-for="item in citiesList" :key="item.phys_city">
        <b-list-group-item> {{ item.phys_city }} </b-list-group-item>
    </b-list-group>
</div>
</template>
<script>
import StudentSuccessDataService from "@/services/StudentSuccessDataService.js";
export default {
  name: 'CitiesDirectory',
  data() {
    return {
      citiesList: [],
    }
  },
  created() {
    StudentSuccessDataService.getAllCities()
      .then((response) => {
        //this.citiesList = response.data
        console.log(this.citiesList);
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