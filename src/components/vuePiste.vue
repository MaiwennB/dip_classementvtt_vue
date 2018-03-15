<template>
  <div class="vueAdherent">
      Piste : 
      <select v-model="selected">
        <option v-for="option in options" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
      </br>
    
    <h2>Nouveau temps</h2>
    Date : <input></br>
    Temps : <input></br>
    <h2>Info des pistes</h2>
    <ul id="listeRecords">
      <li v-for="item in pisteTemps">
        <h4>{{item.chrono}} le {{item.date}} par  {{item.name}}</h4>
      </li>
      </br>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'vueAdherent',
  data() {
    return {
      asso : 'Amichemin',
      pisteTemps:[
            {date:"13/04/2018",chrono:"08:36",nom:"Erwan LE BLAYOT"},
            {date:"12/04/2018",chrono:"12:03",nom:"Quentin MENEZ"}
          ],
      options: [
      { text: 'Piste de la hulote', value: '0' },
      { text: 'Kerestan', value: '1' },
      { text: 'Piste du bouc blanc', value: '2' }
    ]
    };
  },
};
</script>


