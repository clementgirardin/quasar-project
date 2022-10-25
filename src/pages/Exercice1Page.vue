<template>
  <router-link :to="{ path: '/' }">Home page</router-link>
  <!--
   Exercice 1
   1) Créer les données (data) name et age
   2) Reliez ces données aux deux champs de saisie <input /> correspondants
   3) Afficher le nom et l'âge dans le cadre beige <div class="description"> (première ligne en gras)
   4) Utilisez une propriété calculée pour afficher l'âge plus 10 ans (deuxième ligne en gras)
   5) Afficher le nombre de caractères du nom (troisième ligne en gras)
   6) Afficher le nom en majuscules (quatrième ligne en gras)
   7) N'affichez le cadre beige que si un nom et un âge valide ont été saisis.
      Sinon, affichez le cadre rouge <div class="no-details">

   8) Utilisez v-show pour afficher les messages d'erreur à côté des champs
      si le nom comporte plus de 15 caractères et l'âge dépasse 100 ans
      ou est plus petit que 1.

   9) Ajouter la classe CSS "error" aux champs de saisie s'ils enfreignent les mêmes règles

   10) Lorsque vous cliquez sur le bouton "Générer une personne",
       vous générez un nom aléatoire (à partir d'un tableau que vous créerez) et
       un âge aléatoire compris entre 1 et 100 ans.
       Ces nouvelles valeurs doivent être mise à jour partout dans la vue.

   11) Créer une directive qui donnera le focus au champ nom lors du chargement de la page

   12) Faites en sorte qu'une personne aléatoire soit générée lors du premier chargement de la page
   -->
  <q-page padding>
    <div class="form q-mb-lg">
      <div class="row q-mb-md">
        <label>Nom:</label>
        <input v-model="nom" type="text">
        <label class="error">Maximum 15 caractères
        </label>
      </div>
      <div class="row q-mb-md">
        <label>Age:</label>
        <input v-model="age" type="number">
        <label class="error">Veuillez entrer un âge compris entre 1 et 100</label>
      </div>
      <div class="row">
        <button>Générer une personne</button>
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

export default defineComponent({
  data: function () {
    return {
      name: 'Exercie1Page',
      nom: '',
      age: 0
    }
  }

  // computed: {
  //   // eslint-disable-next-line vue/return-in-computed-property
  //   nomAgeValide: function () {
  //     // eslint-disable-next-line no-undef
  //     if (nom.length > 0 && age > 0) {
  //
  //     }
  //   }
  // }
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
