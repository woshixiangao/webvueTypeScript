import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/login.vue';
import About from './views/About.vue';
import Container from './views/container.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'container',
      component: Container,
      children:[
        {
          path: 'home',
          name: 'home',
          component: Home,
        },
        {
          path: 'about',
          name: 'about',
          component: About,
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
