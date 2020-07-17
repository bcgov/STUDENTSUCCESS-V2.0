import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SchoolDistrictDirectory from '../views/SchoolDistrictDirectory.vue'
import SchoolDistrict from '../views/SchoolDistrict.vue'
import Glossary from '../views/Glossary.vue'
import School from '../views/School.vue'

Vue.use(VueRouter)

  const routes = [
    { path:'/', name:'home', components: {
      default: Home,
    }},
    { path:'/glossary', name:'Glossary', components: {
      default: Glossary,
    }},
    { path:'/school-district', name:'SchoolDistrictDirectory', components: {
      default: SchoolDistrictDirectory,
    }},
    { path: '/school-district/:did', name: 'schoolDisctrictbyNumber', component: SchoolDistrict,
      children: [
      { path: 'schools', component: SchoolDistrict },
    ]},
]

const router = new VueRouter({
  routes
})

export default router
