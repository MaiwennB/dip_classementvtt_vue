import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/Login';
import vueAdherent from '@/components/vueAdherent';
import vueAssociation from '@/components/vueAssociation';
import vuePiste from '@/components/vuePiste';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/adherent',
      name: 'vueAdherent',
      component: vueAdherent,
    },
    {
      path: '/association',
      name: 'vueAssociation',
      component: vueAssociation,
    },
    {
      path: '/piste',
      name: 'vuePiste',
      component: vuePiste,
    },
  ],
});
