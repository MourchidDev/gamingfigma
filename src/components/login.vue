<script setup> 
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { setAuthentication } from '@/router'; // Assure-toi d'importer la fonction

const router = useRouter();

const userEmail = ref('');
const password = ref('');
const data = ref([]);
const loading = ref(false); 

async function fetchUser() {
  const resp = await fetch('public/users-data.json');
  data.value = await resp.json();
}

async function connectUser() {
  const user = data.value.find(el => el.email === userEmail.value);
  if (user && password.value === user.password) {
    loading.value = true;
    setAuthentication(true); 

    setTimeout(() => {
    userEmail.value = "";
    password.value = "";
    router.push('/home'); 
    loading.value = false;
  }, 4000);

  } else {
    alert("Entrez vos identifiants");
  }
}

function submit() {
  connectUser();
}

onMounted(() => {
  fetchUser();
  userEmail.value = ''; 
  password.value = ''; 
});
</script>

<template>
  <div class="main-container">
      <div class="login-container">
        <div>
          <img src="/src/assets/Images/logo1.jpg" alt="logo1" class="img">
        </div>
      <h2>Connexion</h2>
      <form @submit.prevent="submit">
        <p><input type="email" v-model="userEmail" placeholder="Email" required> <i class="fa fa-envelope"></i></p>
        <p><input type="password" v-model="password" placeholder="Password" required>
            <svg class="faa"  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg></p>
        <div class="remember-me">
          <input type="checkbox" id="remember">
          <label for="remember">Remember me</label>
        </div>
        <button type="submit" class="btn">Connexion  <div v-if="loading" class="loader"> </div></button>
      </form>
      <div class="forgot-password">
        <a class="link" href="#">Mot de passe oublié ?</a>
      </div>
      <div class="sign-up">
        <p class="create" ><RouterLink to="/sign">Créer un nouveau compte !</RouterLink></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    height: 100vh;
    background: rgba(154, 154, 165, 1.0);
    background: linear-gradient(270deg, rgba(154, 154, 165, 1.0), rgba(95, 101, 236, 1.0));
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-container {
    background-image: linear-gradient(to left, #b9b9c4, #c5c5cf, #d0d0da, #dcdce5, #e8e8f0, #e5e5f1, #e1e1f2, #dedef3, #cacaea, #bdbdd8b2, #9495c7, #7d80b9);
    padding: 40px;
    border-radius: 50px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    width: 400px;
    height: 350px;
    padding-left: 250px;
    padding-right: 0px
 
}

h2 {
    font-family: "Poppins", sans-serif;
    font-size: 40px;
    font-weight: 900;
    background: linear-gradient(to top, #999999 14%, #658FF9 56%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-block: 0px;
}

input[type="email"], input[type="password"] {
    outline: none;
    width: 300px;
    padding: 10px;
    margin: 10px 0;
    border: none;
    background-color: transparent;
    border-bottom: solid 1px;
}

input[type="email"]::placeholder, input[type="password"]::placeholder {
    background-color: transparent;
    color: black;
}

button {
    width: 250px;
    height: 51px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: linear-gradient(to left, #9c9ca2 20%, #6066ec 70%);
    color: white;
    cursor: pointer;
    margin-top: 20px;
}

.btn {
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: larger;
    font-weight: bold;
    text-decoration: none;
    border-radius: 45px;
}

.remember-me {
    color: black;
    margin: 15px 0;
}

.forgot-password, .sign-up {
    margin-top: 15px;
}

.forgot-password a, .sign-up a {
    color: black;
    text-decoration: none;
}

.img {
    width: 550px;
    height: 320px;
    border-radius: 90px;
    box-shadow: 17px 9px 25px 25px rgba(83, 87, 181, 0.16),
            9px 4px 25px 3px rgba(83, 87, 181, 1);
    position: fixed;
    left: -350px;  
}

.loader {
  border: 6px solid #f3f3f352; 
  border-top: 6px solid #ffffff; 
  border-radius: 50%;
  width: 15px;
  height: 15px;
  animation: spin 2s linear infinite;
  position: fixed;
  top: 70%;
  right: 29%;
 } 

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.fa{
    /* width: 100px; */
    position: fixed;
    right: 13%;
    top: 29%;
}
.faa{
    /* width: 100px; */
    position: fixed;
    right: 12.5%;
    top: 40.5%;
}
p{
    margin-block: 0;
}
.create{
    position: fixed;
    right: 6%;
    bottom: 11%;
}
.link{
    position: fixed;
    left: 29%;
    bottom: 11%;
}
</style>
