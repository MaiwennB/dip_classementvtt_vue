<template>
  <div class="vueAdherent">
    <h1>Info personnelles</h1>
    <h3>Nom et Prénom : {{ nom }}</h3>
    <h3>Association : {{ asso }}</h3>
    <h1>Temps :</h1>
    
    <ul id="listePistes">
      <li v-for="item in temps">
        <h2>{{item.pisteNom}}</h2>
        <ul id="listeTemps">
          <li v-for="temps in item.pisteTemps">
            <h3>{{temps.chrono}} le {{temps.date}} </h3>
          </li>
        </ul>
        </br>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'vueAdherent',
  data() {
    return {
      nom: 'Maïwenn BIZOUARN',
      asso : 'Amichemin',
      temps : [
        {
          pisteNom: 'Kerestan', 
          pisteTemps:[
            {date:"13/04/2018",chrono:"08:36", nom:"Erwan LE BLAYOT"},
            {date:"12/04/2018",chrono:"12:03", nom:"Maïwenn BIZOUARN"}
          ],
        },
        {
          pisteNom: 'Mine d\'Hueulgoat', 
          pisteTemps:[
            {date:"13/04/2018",chrono:"08:36", nom:"Erwan LE BLAYOT"},
            {date:"12/04/2018",chrono:"12:03",nom:"Maïwenn BIZOUARN"}
          ],
        },
      ],
    };
  },
};
</script>
