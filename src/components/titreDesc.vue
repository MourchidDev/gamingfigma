<script setup>
const prop = defineProps({
  msgTitle: String,
})
</script>


<template>
  <ul></ul>

  <h2>{{ msgTitle.Categorie }}</h2>

  <h1>{{ msgTitle.Titre }}</h1>

  <p>{{ msgTitle.Description }}</p>
</template>


<style scoped>
p {
  color: white;
  /* white-space: nowrap; */
  overflow: auto;
  scrollbar-width: none;
  text-overflow: clip;
  /* border: 1px solid; */
  height: 150px;
  font-size: 100%;
  position: absolute;
  bottom: 0px;
  width: 400px;
}
p {
  animation-duration: 5s;
  animation-name: trans;
}
@keyframes trans {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }
  to {
    translate: 0 0;
    scale: 100% 1;
  }
}

p:hover {
  overflow: auto;
  scrollbar-color: rgba(31, 31, 31, 0) rgba(14, 163, 76, 0);
  scrollbar-width: thin;
}

h1 {
    /* background-color: #fff; */
  height: 100px;
  color: #ffffff;
  text-align: justify;
  position: absolute;
  top: 55px;
  font-variant: small-caps;
  font-size: 55px;
  text-shadow: 2px 2px 3px black;
}
h2 {
  color: white;
  text-align: justify;

  position: absolute;
  top: -4px;

  border-top: 2px solid black;
  width: 80px;
}
</style>
