import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App.vue';
import { routes } from './routes';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';
import store from './store';
import { BootstrapVue } from 'bootstrap-vue'
import '@bcgov/bootstrap-theme/dist/css/bootstrap-theme.min.css';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
