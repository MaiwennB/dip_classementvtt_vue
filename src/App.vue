<template>
  <div id="app">
    <div class="header">
      <img class="logo " src="./assets/logo.png">
    </div>
    </br>
    <ul>
        <li id="menu">Classement</li>
        <li id="menu">Espace perso</li>
    </ul>
    </br>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  created() {
    this.$store.dispatch(`getAdherentsLogin`);
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  background-color: #5b775b;
  margin-bottom:20px;
  padding:25px
}
.logo{
  height: 150px;
  width: 150px;
  
}
h1{
  font-weight: bold;
  background-color: #5b775b;
  color: #a2d1bc;
}
h2 {
  margin:0px;
  font-weight: normal;
  background-color: #a2d1bc;
  color: #5b775b;
}
h3 {
  margin:0px;
  color: #5b775b;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#menu{
  padding: 20px;
  border:#2c3e50;
  background-color: #a2d1bc;
}
</style>
