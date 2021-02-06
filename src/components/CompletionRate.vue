<template>
  
  <div class="dashboard">
    <div id="completion-rate">
    
      <h3>Completion Rates</h3>
      <div class="hor">
        <iframe scrolling="no"  width="100%" height="200px" id="frameId-91" class="tableau-embed" v-bind:src="'//public.tableau.com/views/ESDR2/5_CompRate?:showVizHome=no&amp;:display_share=no&amp;:embed=true&amp;:toolbar=no&amp;:device=desktop&amp;SD=' + did"></iframe>   
      </div>
      <h3>Completion Rate Over Time for Indigenous and BC Residents</h3>
      <div>
        <iframe scrolling="no"  width="100%" height="200px" id="frameId-91" class="tableau-embed" v-bind:src="'//public.tableau.com/views/ESDR1/6_CompRate3?:showVizHome=no&:display_share=no&:embed=true&:toolbar=no&:device=desktop&SD=' + did + '&Student%20Group=ABORIGINAL,BC%20Residents'"></iframe>   
      </div>
      <h3>Completion Rate Over Time for Students with Special Needs and BC Residents</h3>
            <div>
        <iframe scrolling="no"  width="100%" height="200px" id="frameId-91" class="tableau-embed" v-bind:src="'//public.tableau.com/views/ESDR1/6_CompRate3?:showVizHome=no&:display_share=no&:embed=true&:toolbar=no&:device=desktop&SD=' + did + '&Student%20Group=SPECIAL%20NEEDS,BC%20Residents'"></iframe>   
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