<template>
  <router-link :to="{ path: '/' }">Home page</router-link>
  <!--

   11) Créer une directive qui donnera le focus au champ nom lors du chargement de la page

   -->
  <q-page padding>
    <div class="form q-mb-lg">
      <div class="row q-mb-md">
        <label>Nom:</label>
        <input v-model="nom"  v-autofocus :class="{error : (nom.length > 15 || nom.length < 1)}" type="text">
        <label v-show="nom.length > 15 || nom.length < 1" class="error" >Maximum 15 caractères
        </label>
      </div>
      <div class="row q-mb-md">
        <label>Age:</label>
        <input v-model="age" :class="{error : (age > 100 || age < 1)}" type="number">
        <label v-show="age < 1 || age > 100" class="error">Veuillez entrer un âge compris entre 1 et 100</label>
      </div>
      <div class="row">
        <button @click="randomPerson">Générer une personne</button>
      </div>
    </div>

    <div class="description q-mb-lg" v-if="nom.length > 0 && age > 0">
      <p>Mon nom est <b>{{ nom }}</b> et j'ai <b>{{ age }}</b> ans.</p>
      <p>Dans 10 ans, j'aurai <b>{{ age + 10 }}</b> ans.</p>
      <p>Mon nom se compose de <b>{{ nom.length }}</b> caractères.</p>
      <p>Mon nom en majuscules est <b>{{ nom.toUpperCase() }}</b>.</p>
    </div>

    <div class="no-details" v-else>
      <p>Veuillez entrer un nom et un âge valide !</p>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

const randomNames = [
  'Jean',
  'Ethan',
  'Vincent',
  'Louis',
  'Nathan',
  'Greg',
  'Julien',
  'Kevin',
  'Loris',
  'Simon'
]
export default defineComponent({
  name: 'Exercie1Page',
  data: function () {
    return {
      nom: '',
      age: 0,
      classError: ''
    }
  },

  methods: {
    randomPerson () {
      this.nom = randomNames[Math.floor(Math.random() * randomNames.length)]
      this.age = Math.floor(Math.random() * 100)
    }
  },

  directives: {
    autofocus: {
      inserted (el) {
        el.focus()
      }
    }
  },

  mounted () {
    this.randomPerson()
  }
})
</script>

<style>
.form {
  background: #eee;
  padding: 10px;
}

label {
  min-width: 70px;
}

label.error {
  font-size: 13px;
  color: red;
  margin-left: 5px;
  margin-top: 3px;
}

input {
  border: 1px solid #ccc;
}

input.error {
  border: 1px solid red;
  background: pink;
}

.description {
  background: antiquewhite;
  padding: 20px 20px 7px;
}

.no-details {
  background: lightcoral;
  padding: 20px 20px 7px;
}
</style>
