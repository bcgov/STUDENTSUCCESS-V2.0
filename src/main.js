import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App.vue';
import { routes } from './routes';
import store from './store';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import '@bcgov/bootstrap-theme/dist/css/bootstrap-theme.min.css';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
