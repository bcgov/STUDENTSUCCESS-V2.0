<template>
  <div class="glossary">
    <h1>Glossary</h1>
    hello world
  </div>
</template>
<script>
import axios from 'axios';
export default {
  
  name: 'Glossary',
  created () {
    axios.get('https://test.studentsuccess.gov.bc.ca/glossary-api')
      .then(res => {
          //console.log(res)
          const data = res.data
          const titles = []
          for (let key in data){
            const title = data[key]
            title.en_title = key
            titles.push(title)
          }
          // console.log(users)
          // this.email = users[0].email
          console.log(titles);
      })
      .catch(error => console.log(error))
  }
}
</script>