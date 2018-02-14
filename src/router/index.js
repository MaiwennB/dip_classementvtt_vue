import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/Login';
import vueAdherent from '@/components/vueAdherent';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    // {
    //   path: '/vueAdherent',
    //   name: 'vueAdherent',
    //   component: vueAdherent,
    // },
  ],
});
