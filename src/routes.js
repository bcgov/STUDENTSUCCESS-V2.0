import Home from './views/Home.vue'
import Glossary from './views/Glossary.vue'
import SchoolDistrictDirectory from './views/SchoolDistrictDirectory.vue'
import SchoolDistrict from './views/SchoolDistrict.vue'

//import School from './views/School.vue'
//import SchoolDistrictSchoolsDirectory from './views/SchoolDistrictSchoolsDirectory.vue'

export const routes = [
    { path:'/', name:'home', components: {
      default: Home,
    }},
    { path:'/glossary', name:'glossary', component: Glossary},
    { path:'/school-district', component: SchoolDistrictDirectory, children:[
        //{ path: '', component: SchoolDistrictDirectory },
        { path: ':did', name:'schoolDistrictByNumber', component: SchoolDistrict }
    ]}
  //  { path: '/school-district/:did', name: 'schoolDistrictByNumber', component: SchoolDistrict
  //    children: [
  //    { name:'one', path: '', component: SchoolDistrict },
  //    { name:'two', path: 'schools', component: SchoolDistrictSchoolsDirectory },
  //    { name:'three', path: 'schools/:sid', component: School },
  //    ]
  //  }, 
]

