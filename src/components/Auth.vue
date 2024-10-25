<script setup>
import { ref } from 'vue';
import Login from './login.vue'; 
import SignIn from './SignIn.vue'; 


const currentComponent = ref('Login'); 

function switchComponent() {
  currentComponent.value = currentComponent.value === 'Login' ? 'SignIn' : 'Login'; 
}
</script>

<template>
  <div class="auth-container" @click="switchComponent">
    <transition name="fade">
      <component :is="currentComponent" /> 
    </transition>
  </div>
</template>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(270deg, rgba(154, 154, 165, 1.0), rgba(95, 101, 236, 1.0));
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s; 
}
.fade-enter, .fade-leave-to {
  opacity: 0; 
}
</style>
