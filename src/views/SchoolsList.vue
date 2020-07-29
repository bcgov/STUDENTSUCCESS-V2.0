<template>

<div class="school-list">

  <div v-if="schools.length">
    <h1 v-if="type=='district'">District {{ keyword }} Schools</h1>
    <h1 v-if="type=='city'">{{ keyword }} School</h1>
    <b-list-group v-for="item in schools" :key="item">
        <b-list-group-item><router-link :to="{ name: 'school', params: { sid: item.school_code }}">{{item.school_name}} {{item.school_code}}</router-link></b-list-group-item>
    </b-list-group>  
    

  </div>
  <hr>
  
  <router-view></router-view>
</div>
</template>
<script>
import StudentSuccessDataService from "@/services/StudentSuccessDataService.js";
export default {
  name: 'SchoolDistrict',
  prop: ['type','keyword'],
  data() {
    return {
        type: this.$route.params.type,
        keyword: this.$route.params.keyword,
        schools: [],
        
    }
  },
  created() {
    StudentSuccessDataService.getSchoolsByDistrict(this.keyword)
      .then((response) => {
        console.log(response.data);
        this.schools = [{"school_name": this.keyword + " school 1", "school_code": 123456  },{"school_name": this.keyword + " school 2", "school_code": 123457  },{"school_name": this.keyword + " school 3", "school_code": 123458  },{"school_name": this.keyword + " school 4", "school_code": 123459  }];
        
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