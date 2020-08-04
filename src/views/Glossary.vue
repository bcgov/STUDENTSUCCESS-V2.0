<template>
  <div class="glossary">
    <h1>Glossary</h1>
   <!-- <ul v-for="data in glossaryData" :key="city.glossary_item">
      
    </ul>-->
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Glossary",
  data() {
    return {
      glossaryData: [],
    };
  },
  created() {
    axios
      .get("https://test.studentsuccess.gov.bc.ca/glossary-api")
      .then((res) => {
        //console.log(res)
        this.glossaryData = res.data;
        //const titles = []
        //for (let key in data){
        //  const title = data[key]
        //  title.en_title = key
        //  titles.push(title)
        // }
        // console.log(users)
        // this.email = users[0].email
        console.log(this.glossaryData);
      })
      .catch((error) => console.log(error));
  },
};
</script>