import Home from './views/Home.vue'
import Glossary from './views/Glossary.vue'
import CitiesDirectory from './views/CitiesDirectory.vue'
import SchoolDistrictDirectory from './views/SchoolDistrictDirectory.vue'
import SchoolDistrict from './views/SchoolDistrict.vue'
import SchoolList from './views/SchoolsList.vue'
import School from './views/School.vue'
import SchoolDistrictSchoolsDirectory from './views/SchoolDistrictSchoolsDirectory.vue'

export const routes = [
    { path:'/', name:'home', components: {
      default: Home,
    }},
    { path:'/glossary', name:'glossary', component: Glossary},
    { path:'/cities', component: CitiesDirectory,},
    { path:'/school/:mincode', name: 'school', component: School,},
    { path:'/school-districts', component: SchoolDistrictDirectory,},
    { path:'/schools/:type/:keyword', name:'schoolList', component: SchoolList},
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

