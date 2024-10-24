<script setup>
import { defineProps } from 'vue'
import { ref } from 'vue'

const count = ref(0)
function incre() {
  if (count.value <= 10) {
    count.value = props.datas.length -
  }
}
function decre() {
  count.value--
  if (count.value <= 0) {
    count.value = props.datas.length
  }
}
const props = defineProps({
  datas: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="carroussel">
    <div class="slid-item">
      <div class="carrou-item0 fade">
        <div class="img">
          <!-- {{ datas[toto].photo }} -->
        </div>
        <div class="item-info">
          <h2>{{ datas[count]?.Categorie }}</h2>
          <h3>{{ datas[count]?.Titre }}</h3>
        </div>
      </div>

      <div v-for="dt in datas" :key="dt.id" class="carrou-item fade">
        <div class="img">
          <!-- {{ dt.photo }} -->
        </div>
        <div class="item-info">
          <h2>{{ dt.Categorie }}</h2>
          <h3>{{ dt.Titre }}</h3>
        </div>
      </div>
    </div>
    <div class="barre-progression">
      <div class="btn-progression">
        <button class="prev" @click="decre">
          <img src="../assets/icons/arrow_back.svg" />
        </button>
        <button class="next" @click="incre">
          <img src="../assets/icons/arrow_forward.svg" />
        </button>
      </div>
      <div class="barre-container">
        <div class="barre-item"></div>
      </div>
      <div class="item-num">
        <span>{{ count }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carroussel {
  max-width: 100%;
  width: 900px;
  height: 650px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  gap: 50px;
  position: absolute;
  left: 45%;
  bottom: 10%;
  overflow: hidden;
}
.slid-item {
  max-width: 100%;
  width: 805px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  gap: 65px;
  margin: 0 auto;
  background: transparent;
}

.carrou-item0 {
  position: absolute;
  z-index: 40;
  transform: scale(1.1);
  width: 250px;
  height: 448px;
  border-radius: 30px;
  border: 2px solid yellow;
  background-image: url('../assets/Rectangle2.svg');

  background-size: cover;
}

.carrou-item {
  width: 250px;
  height: 448px;
  border-radius: 30px;
  border: 2px solid yellow;
  background-image: url('../assets/Rectangle2.svg');

  background-size: cover;
}

.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

.item-info {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 100%;
  width: 210px;
  height: 106px;
  position: relative;
  top: 197px;
  text-align: justify;
  padding: 10px;
  color: white;
}

.barre-progression {
  max-width: 100%;
  width: 805px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}
.btn-progression {
  display: flex;
  gap: 10px;
  background: transparent;
}
.btn-progression button {
  border-radius: 55%;
  border: 2px solid darkgrey;
  background: none;
  padding: 10px;
  transition: 0.6s ease;
  user-select: none;
  cursor: pointer;
}
.btn-progression button img {
  background: transparent;
}

.barre-container {
  width: 100%;
  background-color: darkgrey;
  border-radius: 15px;
  height: 2px;
  position: relative;
}
.barre-item {
  border: 3px solid #ffd600;
  position: relative;
  bottom: 2px;
  width: 10%;
  height: 0px;
  transition: width 0.5s linear;
}
.item-num {
  width: 58px;
  height: 67px;
  position: relative;
  top: 10px;
  left: 15px;
}

.item-num span {
  font-family: DM Sans;
  font-size: 40px;
  font-weight: 500;
  line-height: 52.08px;
  text-align: center;
}
</style>
