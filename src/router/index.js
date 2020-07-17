import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SchoolDistrictDirectory from '../views/SchoolDistrictDirectory.vue'
import SchoolDistrict from '../views/SchoolDistrict.vue'
import Glossary from '../views/Glossary.vue'

Vue.use(VueRouter)

  const routes = [
    { path:'/', name:'home', components: {
      default: Home,
    }},
    { path:'/glossary', name:'glossary', components: {
      default: Glossary,
    }},
    { path:'/school-district', name:'SchoolDistrictDirectory', components: {
      default: SchoolDistrictDirectory,
    }},
    { path: '/shool-distict/:id', component: SchoolDistrict,
      children: [
      // UserHome will be rendered inside User's <router-view>
      // when /user/:id is matched
      { path: '', component: UserHome },
      
      // UserProfile will be rendered inside User's <router-view>
      // when /user/:id/profile is matched
      { path: 'profile', component: UserProfile },

      // UserPosts will be rendered inside User's <router-view>
      // when /user/:id/posts is matched
      { path: 'posts', component: UserPosts }
    ]},
]

const router = new VueRouter({
  routes
})

export default router
