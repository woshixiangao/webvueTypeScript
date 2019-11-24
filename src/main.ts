import Vue from 'vue';
import '@/styles/index.scss';
import App from './App.vue';
import Login from './views/login.vue';
import Home from './views/Home.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import VueAxios from 'vue-axios'
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAxios, axios)
router.beforeEach((to, from, next) => {
  console.log('路由进入了:'+to.path);
  // next({
  //   path: '/login'
  // })
  next();
})
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
