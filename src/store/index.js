import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    adherents: [],
    loginAdh:''

  },
  getters: {
    count(state) {
      return state.adherents.length;
    },
    adherents(state) {

      return state.adherents;
    },
  },
  mutations: {
    POPULATE_ADHERENTS(state, adherents) {
      state.adherents = adherents;
    },
    ADHERENTS_LOGIN(state, adherents) {
      state.adherents = adherents;
    },
  },
  actions: {
    getAdherents(context) {
      api.get(`/adherents`)
        .then((response) => {
          context.commit(`POPULATE_ADHERENTS`, response.data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    getAdherentsLogin(context,state) {
        api.post(`/login`,{loginAdh:state[0],})
          .then((response) => {
            state.adherents = context.commit(`ADHERENTS_LOGIN`, response.data);
          })
          .catch((e) => {
            this.errors.push(e);
          });
      },
  },
});
