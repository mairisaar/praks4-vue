import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Found from './views/Found.vue';
import Lost from './views/Lost.vue';
import Profile from './views/Profile.vue';
import Donate from './views/Donate.vue';
import About from './views/About.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/found',
      name: 'found',
      component: Found,
    },
    {
      path: '/lost',
      name: 'lost',
      component: Lost,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/donate',
      name: 'donate',
      component: Donate,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
