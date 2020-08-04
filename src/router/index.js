import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SchoolDistrictDirectory from '../views/SchoolDistrictDirectory.vue'
import SchoolDistrict from '../views/SchoolDistrict.vue'
import Glossary from '../views/Glossary.vue'
import CitiesDirectory from '../views/CitiesDirectory.vue'
import SchoolList from '../views/SchoolList.vue'
import School from '../views/School.vue'
import SchoolDistrictSchoolsDirectory from '../views/SchoolDistrictSchoolsDirectory.vue'

Vue.use(VueRouter)

  const routes = [
    { path:'/', name:'home', components: {
      default: Home,
    }},
    { path:'/cities', name:'citiesDirectory', component: CitiesDirectory},
    { path:'/glossary', name:'glossary', component: Glossary},
    { path:'/schools/city/district', name:'schoolList', component: SchoolList},
    { path:'/school-district', name:'schoolDistrictDirectory', components: SchoolDistrictDirectory},
    { path: '/school-district/:did', component: SchoolDistrict,

      children: [
      { name:'one', path: '', component: SchoolDistrict },
      { name:'two', path: 'schools', component: SchoolDistrictSchoolsDirectory },
      { name:'three', path: 'schools/:sid', component: School },
    ]}, 
]

const router = new VueRouter({
  routes
})

export default router
