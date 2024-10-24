<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { setAuthentication } from '@/router'; 

const router = useRouter();
const loading = ref(false);

function logout() {
  loading.value = true; 
  setAuthentication(false); 
  
  
  setTimeout(() => {
    router.push('/'); 
    loading.value = false;
  }, 3000);
}
</script>

<template>
  <div class="logout-container">
    <button @click="logout" class="btn">Déconnexion</button>
    
    <div v-if="loading" class="loader"></div> 
  </div>
</template>

<style scoped>
.logout-container {
   
    align-items: center;
  justify-content: center;
    height: 100vh;
    background: rgba(154, 154, 165, 1.0);
    background: linear-gradient(270deg, rgba(154, 154, 165, 1.0), rgba(95, 101, 236, 1.0));
}

h2 {
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 20px;
}

.btn {
    width: 250px;
    height: 51px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: linear-gradient(to left, #9c9ca2 20%, #6066ec 70%);
    color: white;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    font-size: larger;
    font-weight: bold;
    text-decoration: none;
    margin-top: 20px;
    position: fixed;
    right: 10px;
    top: 12px;
}

.loader {
  border: 6px solid #f3f3f352; 
  border-top: 6px solid #259eee; 
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
 position: fixed;
 top: 50%;
  right: 50%;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
