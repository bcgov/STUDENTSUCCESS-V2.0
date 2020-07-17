import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SchoolDistrictDirectory from '../views/SchoolDistrictDirectory.vue'
import SchoolDistrict from '../views/SchoolDistrict.vue'
import Glossary from '../views/Glossary.vue'
import School from '../views/School.vue'
import SchoolDistrictSchoolsDirectory from '../views/SchoolDistrictSchoolsDirectory.vue'

Vue.use(VueRouter)

  const routes = [
    { path:'/', name:'home', components: {
      default: Home,
    }},
    { path:'/glossary', name:'glossary', component: Glossary},
     { path:'/school-district', name:'SchoolDistrictDirectory', components: {
      default: SchoolDistrictDirectory,
    }},
    { path: '/school-district/:did', name: 'schoolDistrictByNumber', component: SchoolDistrict,
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
