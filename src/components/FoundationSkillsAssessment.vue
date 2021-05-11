<template>
  
  <div >
  <div class="slide-content restrain">
    <h2 class="ministry-blue slide-title">
    School District {{did}} (District Name)
    </h2>

      
      <h3 class="ministry-blue" id="report-subtitle">Foundation Skills Assessment</h3>
    <p class="white report-meta">The Foundation Skills Assessment (FSA) is a set of reading, writing and numeracy tests administered each year to students in grades 4 and 7, and was re-designed for the 2017/18 school year with new content, scoring, and timing during the year. The FSA is a valuable indicator of where individual students might have challenges in reading, writing and numeracy and can be used to help plan their education. It also provides a snapshot of how our education system is meeting the needs of students in these key areas.</p>
    <p class="white report-meta">For a more complete set including additional years and subpopulations view the open data for <a href="https://catalogue.data.gov.bc.ca/dataset/bc-schools-foundation-skills-assessment-fsa-">FSA</a></p>
  </div>

  <div class="chart-legend">
  <div class="typical-range">
    <div class="typical-range-graphic"></div>
    <div class="legend-desc">
              Typical range across B.C. (middle 50% of school districts)
          </div>
  </div>
  <div class="selected-districts">
    <div class="selected-districts-graphic"></div>
    <div class="legend-desc">
              Selected school district's most recent results 
          </div>
  </div>
  <div class="range-of-districts">
    <div class="range-of-districts-graphic"></div>
    <div class="legend-desc">
              Range of school district's results over time
          </div>
  </div>
</div>
    <div id="contextual-information">
      <h3>Foundation Skills Assessment</h3>
      <div class="hor">
        <iframe scrolling="no" width="100%"  height="300px" id="frameId-91" class="tableau-embed" v-bind:src="'//public.tableau.com/views/ESDR1/7_FSA?:showVizHome=no&amp;:display_share=no&amp;:embed=true&amp;:toolbar=no&amp;:device=desktop&amp;SD=' + did"></iframe>   
      </div>
       <h3>FSA Student Growth Over Time - Reading</h3>
      <div class="hor">
              <iframe scrolling="no" width="100%"  height="300px" id="frameId-91" class="tableau-embed" v-bind:src="'//public.tableau.com/views/ESDR1/8_FSA2?:showVizHome=no&amp;:display_share=no&amp;:embed=true&amp;:toolbar=no&amp;:device=desktop&amp;SD=' + did + '&amp;SKILL=Reading'"></iframe>   
        
      </div>
       <h3>FSA Student Growth Over Time - Writing</h3>
      <div class="hor">
              <iframe scrolling="no" width="100%"  height="300px" id="frameId-91" class="tableau-embed" v-bind:src="'//public.tableau.com/views/ESDR1/8_FSA2?:showVizHome=no&amp;:display_share=no&amp;:embed=true&amp;:toolbar=no&amp;:device=desktop&amp;SD=' + did + '&amp;SKILL=Writing'"></iframe>   
      </div>

             <h3>FSA Student Growth Over Time - Numeracy</h3>
      <div class="hor">
              <iframe scrolling="no" width="100%"  height="300px" id="frameId-91" class="tableau-embed" v-bind:src="'//public.tableau.com/views/ESDR1/8_FSA2?:showVizHome=no&amp;:display_share=no&amp;:embed=true&amp;:toolbar=no&amp;:device=desktop&amp;SD=' + did + '&amp;SKILL=Writing'"></iframe>   
      </div>
      <div class="fsa_chart_legend">
  <div class="fsa_chart_item">
    <div class="fsa_chart_color first"></div>
    <div class="fsa_chart_copy">Percent of students with the same performance levels in grades 4 and 7</div>
  </div>
  <div class="fsa_chart_item">
    <div class="fsa_chart_color second"></div>
    <div class="fsa_chart_copy">Percent of students with a higher level of performance in grade 7 than 4</div>
  </div>
  <div class="fsa_chart_item">
    <div class="fsa_chart_color third"></div>
    <div class="fsa_chart_copy">Percent of students with a lower level of performance in grade 7 than 4</div>
  </div>
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