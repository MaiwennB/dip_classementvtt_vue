<template>
  <div class="hello">
        <FORM>
            <h3>Type de connection</h3>
            <input type="radio" name="typeconnect" id="connectAdh" :value="Adherent" checked>
            Adhérent
            <input type="radio" name="typeconnect" id="connectAsso" :value="Association">
            Association
            <h3>Connection </h3>
            Login : <input v-model="login">
            MDP : <input v-model="mdp">
            <button v-on:click="Connection(login,mdp)">Connection</button>
        </FORM>
        <!-- <router-link :to="vueAdherent">link to newlink</router-link> -->
  </div>
</template>

<script>
export default {
  name: 'login',
 
  data() {
    return {
      login: '',
      mdp: '',
    };
  },
   methods: {
    Connection: function (login,mdp) {

        if (document.getElementById('connectAdh').checked === true) {
          console.log('Connection en adh');
          console.log(login);
          console.log(mdp);
          this.$store.commit({
              type: 'POPULATE_ADHERENTS',
              adherent: login
          })
          this.$store.dispatch("getAdherentsLogin",[login]);
          

        }
        if (document.getElementById('connectAsso').checked === true) {
          console.log('Connection en asso');
          console.log(this.login);
          console.log(this.mdp);
        }
    },
  },
  computed:{
      adherents(){
          return this.$store.getters.adherents;
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
