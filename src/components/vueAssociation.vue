<template>
  <div class="vueAdherent">
    <h1>Info de l'association</h1>
    <h3>Association : {{ asso }}</h3>
    <h1>Nouvelle piste</h1>
    <FORM>
      Nom : <input></br>
      Url de la photo : <input></br>
      Description : <input></br>
      <button >Valider</button>
     </FORM>
    <h1>Info des pistes</h1>
    <ul id="listePistes">
      <li v-for="item in piste">
        <h2>{{item.pisteNom}}</h2>
        <h3>{{item.description}}</h3>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'vueAdherent',
  data() {
    return {
      asso : 'Amichemin',
      piste : [
        {
          pisteNom: 'Piste de la hulotte', 
          photo: "url photo",
          description: "Situé aux abord du lycée du Nivot cette piste cotoie celle du boc blanc.",
        },
        {
          pisteNom: 'Kerestant', 
          photo: "url photo",
          description: "A Commana pour ceux qui osent",
        },
      ],
    };
  },
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
  display: inline;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
