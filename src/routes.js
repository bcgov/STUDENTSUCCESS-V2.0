import Home from './views/Home.vue'
import Glossary from './views/Glossary.vue'
import SchoolDistrictDirectory from './views/SchoolDistrictDirectory.vue'
import SchoolDistrict from './views/SchoolDistrict.vue'

import School from './views/School.vue'
import SchoolDistrictSchoolsDirectory from './views/SchoolDistrictSchoolsDirectory.vue'

export const routes = [
    { path:'/', name:'home', components: {
      default: Home,
    }},
    { path:'/glossary', name:'glossary', component: Glossary},
    { path:'/school-districts', component: SchoolDistrictDirectory,},
    { path:'/school-district/:did', name: 'schoolDistrictByNumber',component: SchoolDistrict, children:[
        //{ path: '', component: SchoolDistrictDirectory },
        { path: 'schools', component: SchoolDistrictSchoolsDirectory },
        { path: 'schools/:sid', component: School },
    ]}
  //  { path: '/school-district/:did', name: 'schoolDistrictByNumber', component: SchoolDistrict
  //    children: [
  //    { name:'one', path: '', component: SchoolDistrict },
  //    { name:'two', path: 'schools', component: SchoolDistrictSchoolsDirectory },
  //    { name:'three', path: 'schools/:sid', component: School },
  //    ]
  //  }, 
]

