<template>
  
  <div >
  <div class="slide-content restrain">
    <h2 class="ministry-blue slide-title">
    School District {{did}} (District Name)
    </h2>

      
      <h3 class="ministry-blue" id="report-subtitle">Contextual Information</h3>
  <p class="white report-meta">When reviewing this school system information, it is important to consider the factors that can influence student learning. Below are longitudinal and demographic student enrolment information that assists with planning and improvement efforts. All enrollment numbers are based on September 30th data collection.</p>
    <p class="white report-meta">For a more complete set including additional years and subpopulations view the open data for <a href="https://catalogue.data.gov.bc.ca/dataset/bc-schools-student-enrolment-and-fte-by-grade">Student Enrolment and FTE by Grade</a></p>
  </div>
    <div id="contextual-information">
      <h3>Community Socio-Economic Information</h3>
      <div class="hor">
        <iframe scrolling="no" width="100%"  height="300px" id="frameId-91" class="tableau-embed" v-bind:src="'//public.tableau.com/views/ESDR1/1_ComDemo?:showVizHome=no&:display_share=no&:embed=true&:toolbar=no&:device=desktop&SD=' + did"></iframe>   
      </div>
       <h3>Student Enrolment Over Time</h3>
      <div class="hor">
        <iframe scrolling="no" width="100%" height="300px" id="frameId-91" class="tableau-embed" v-bind:src="'//public.tableau.com/views/ESDR1/2_Enrolment?:showVizHome=no&:display_share=no&:embed=true&:toolbar=no&:device=desktop&SD=' + did"></iframe>   
      </div>
       <h3>Number of Students Across All Grades 2020/21</h3>
      <div class="hor">
        <iframe scrolling="no" width="100%" height="300px" id="frameId-91" class="tableau-embed" v-bind:src="'//public.tableau.com/views/ESDR1/3_StudByGrade?:showVizHome=no&:display_share=no&:embed=true&:toolbar=no&:device=desktop&SD=' + did "></iframe>   
      </div>
    </div>
  </div>
</template>
<script>

//import StudentSuccessDataService from "@/services/StudentSuccessDataService.js";
export default {
  data() {
    return {
      def: null,
      info: null,
      realinfo: null,
      index: 0,
      did: this.$route.params.did,
    };
  },
  //props: ['did'],
  watch: {
 
  },
  //Grabs the data when the component is mounted
  mounted() {

  },
  methods: {
    
  },
};
</script>