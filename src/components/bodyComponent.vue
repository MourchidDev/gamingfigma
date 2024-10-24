<script setup>
import titreDesc from './titreDesc.vue'
import footerComponent from './footerComponent.vue'
import { onMounted, ref } from 'vue'
const datas = ref([])
// const newTitre = ref("");
// const emit= defineEmits(["Titre"])
async function getData() {
  const response = await fetch('/public/data.json')
  datas.value = await response.json()
  console.log(datas.value)
}
onMounted(() => {
  getData()
})
const newTitre = ref('')

function AfficheTitre(title) {
  newTitre.value = title
  console.log(newTitre.value)
}
</script>


<template>
  <div id="flex">
    <div id="divgauche">
      <div id="position">
        <titreDesc :msgTitle="newTitre" />
      </div>
      <div id="marge">
        <footerComponent />
      </div>
    </div>

    <div id="divDroite">
      <header>
        <nav>
          <ul
            id="flex"
            v-for="data in datas"
            :key="data.id"
            @click="AfficheTitre(data)"
          >
            <li>
              {{ data.Categorie }}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  </div>
</template>


<style scoped>
#flex {
  display: flex;
}
#divDroite {
  width: 50%;
}
#divgauche {
  /* background-color: #fff; */
  width: 40%;
  margin: 0px 20px 0px;

  /* background-color: #3c8b2c; */
}
#marge {
  position: absolute;
  left: 100px;
  bottom: 0px;
  /* margin-left: 100px; */
  /* background-color: #fff; */
  margin-block: 250px;
}
nav {
  display: flex;
  /* background-color: #974a4a1f; */
  justify-content: flex-end;
}
li {
  list-style: none;
  cursor: pointer;
  text-shadow: 2px 2px 4px black;
}
li:hover {
  box-shadow: 0px 0px 5px rgba(231, 137, 30, 0.973);
}
ul {
  font-size: 20px;
  font-feature-settings: 'smcp', 'zero';
}
#position {
  position: absolute;
  /* background-color: #fff; */
  top: 120px;
  left: 30px;
  right: 530px;
  height: 550px;
  text-align: justify;
  font-size: larger;
}

li:active {
  border-bottom: 3px solid red;
  rotate: z 20deg;
}
</style>