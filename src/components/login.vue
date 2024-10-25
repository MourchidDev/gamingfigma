<script setup> 
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { setAuthentication } from '@/router'; 

const router = useRouter();

const userEmail = ref('');
const password = ref('');
const data = ref([]);
const loading = ref(false); 
const isMoving = ref(false);

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

function moving() {
  isMoving.value = true;
  setTimeout(() => {
    isMoving.value = false;
  }, 2000); 
}

onMounted(() => {
  fetchUser();
  userEmail.value = ''; 
  password.value = ''; 
});

// SCRIPT SIGNUP
// const user = ref(null);
let password1 = ref("");
let password2 = ref("");
// const userExist = ref(false);

async function saveUser(newUser) {
  const resp = await fetch('public/users-data.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });
  return resp.ok;
}

async function connectUsers() {
  const userExists = data.value.some(user => user.email === userEmail.value);

  if (!userExists) {
    if (password1.value === password2.value) {
      const newUser = {
        email: userEmail.value,
        password: password1.value,
      };
      const success = await saveUser(newUser);
      if (success) {
        router.push('/home');
        alert("User registered successfully!");
      } else {
        alert("Failed to register user. Please try again.");
      }
    } else {
      alert("Passwords do not match.");
    }
  } else {
    alert("The entered email already exists.");
  }
}

function submitSignup() {
  connectUsers();
}

onMounted(() => {
  fetchUser();
});


function moveToLogin() {
  const logo = document.getElementById('logo');
  logo.classList.add('logoMoved');

  const signupContainer = document.querySelector('.signup-container');
  signupContainer.classList.add('signupMove');

  setTimeout(() => {
    logo.classList.remove('logoMoved');
    signupContainer.classList.remove('signupMove');
    // Redirection vers le formulaire de connexion
    router.push('/login'); // Remplacez par la route de votre formulaire de connexion
  }, 2000); // Doit correspondre à la durée de l'animation
};

</script>

<template>
  <div class="main-container">
    <!-- <div class="login-container" > -->
    <div class="login-container" :class="{ loginMove: isMoving }">
      <div id="logo" :class="{ logoMove: isMoving }">
        <img src="/src/assets/Images/logo1.jpg" alt="logo1" class="img">
      </div>
      <h2>Connexion</h2>
      <form @submit.prevent="submit">
        <p>
          <input type="email" v-model="userEmail" placeholder="Email" required> 
          <i class="fa fa-envelope"></i>
        </p>
        <p>
          <input type="password" v-model="password" placeholder="Password" required>
          <svg class="faa" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
            <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/>
          </svg>
        </p>
        <div class="remember-me">
          <input type="checkbox" id="remember">
          <label for="remember">Remember me</label>
        </div>
        <button type="submit" class="btn">Connexion  <div v-if="loading" class="loader"></div></button>
      </form>
      <div class="forgot-password">
        <a class="link" href="#">Mot de passe oublié ?</a>
      </div>
      <div class="sign-up">
        <p class="create" @click="moving()">Créer un nouveau compte !</p>
      </div>
    </div>
  <!-- </div> -->
  
  <!-- <div> -->
  <div class="main-signup-container" >
    <div class="signup-container" :class="{ signupMove: isMoving }">
      <div :class="{ logobMoved: isMoving }">
        <img id="logob" src="/src/assets/Images/logo1.jpg" alt="img" class="imgb">
      </div>
      <h2 class="h2">Sign Up</h2>
      <form @submit.prevent="submitSignup">
        <input type="text" placeholder="Username" required>
        <p>
          <input v-model="userEmail" type="email" placeholder="Email" required> 
          <i class="fa fa-envelope"></i>
        </p>
        <p>
          <input v-model="password1" type="password" placeholder="Password" required>
          <svg class="faas" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
            <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/>
          </svg>
        </p>
        <input v-model="password2" type="password" placeholder="Confirm Password" required>
        <button type="submit" class="btns">Sign</button>
      </form>
      <div class="login-link">
        <p class="created"  @click="moving()">Already have an account? </p>
      </div>
    </div>
  </div>
</div>
</template>



<style scoped>

/* ****************************************
*
*Help TOM*/
#logo{
  position: absolute;
  top: 45px;
  left: -50.9%;
}
.logoMove{
  top: 45px;
  left: -0%;
  animation-name: example;
  animation-duration: 2s;
}
@keyframes example {
  from {left: -50%;}
  to {left: 30%;}
}

.main-container {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  /* background: rgb(245, 12, 4); */
  /* background: rgba(154, 154, 165, 1.0); */
  /* background: linear-gradient(270deg, rgba(154, 154, 165, 1.0), rgba(95, 101, 236, 1.0)); */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
}

.loginMove {
  /* right: 15%;
  left:32.7%; */
  animation-name: bouge;
  animation-duration: 2s;  
}

@keyframes bouge {
  from {left:32.7%;}
  to {left:50.4%;}
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
    padding-right: 0px;
    position: absolute;
    /* right: 15%; */
    /* left:32.7%; */
    /* left:50.4%; */
 
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
    /* position: fixed;
    left: -350px;   */
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
    margin-block: 0px;
}
.create{
    position: fixed;
    right: 6%;
    bottom: 11%;
    cursor: pointer;
}
.link{
    position: fixed;
    left: 29%;
    bottom: 11%;
}


/****************
*STYLE SIGNUP
****************/
#logob{
  position: absolute;
  top: 45px;
  left: 78%;
}
.logobMoved{
  animation-name: droit;
  animation-duration: 2s;
}
@keyframes droit {
  from {left: 78%;}
  to {left: 5%;}
}
 .signupMove{
   animation-name: gauche;
  animation-duration: 2s;  
}

@keyframes gauche {
  from {left:33.5%;}
  to {left:22.7%;}
}    


.main-signup-container {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    height: 100vh;
    /* background-color: red; */
    /* background: linear-gradient(270deg, rgba(154, 154, 165, 1.0), rgba(95, 101, 236, 1.0)); */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.signup-container {
    /* border: solid red; */
    background-image: linear-gradient(to right, #6065c9, #9397d191, #fdfdff98, #dadae9, #e8e8f0, #e5e5f1, #e1e1f2, #dedef3, #cacaea, #bdbdd8b2, #9495c7, #7d80b9);
    padding: 40px;
    border-radius: 50px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    width: 400px;
    height: 350px;
    padding-left: 70px;
    padding-right: 150px;
    position: absolute;
    /* left: 33.5%; */
    /* left: 22.7%; */

}





.h2 {
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    font-weight: 900;
    margin-block: 0px;
    padding-left: 20%;
    margin-bottom: 0px;
    background: #999999;
    background: linear-gradient(to top, #999999 14%, #658FF9 56%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
input[type="text"], input[type="password"], input[type="email"] {
    outline: none;
    width: 300px;
    padding: 10px;
    margin: 10px 0;
    border: none;
    background: transparent;
    border-bottom: solid 1px;
   
}
input[type="text"]::placeholder, input[type="password"]::placeholder, input[type="email"]::placeholder {
    background-color: transparent;
    color-scheme: black;
}

.login-link {
    text-align: center;
    margin-top: 0px;
    color: black;
}
.login-link a {
    color: black;
    text-decoration: none;
}
p{
    margin-block: 0px;
}
.imgb {
    width: 550px;
    height: 320px;
    border-radius: 90px;
    box-shadow: 17px 9px 25px 25px rgba(83, 87, 181, 0.16),
                9px 4px 25px 3px rgba(83, 87, 181, 1);
    /* position: fixed;
    left: 450px;   */
   
}
.fa-envelope{
    /* width: 100px; */
    position: fixed;
    right: 38%;
    top: 39%;
}
.faas{
    /* width: 100px; */
    position: fixed;
    right: 37.5%;
    top: 50.5%;
}
.btns {
    width: 200px;
    height: 45px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    margin-left: 15%;
    margin-top: 13px;
    background: linear-gradient(to left, #9c9ca2 20%, #6066ec 70%);
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: larger;
    font-weight: bold;
    text-decoration: none;
    border-radius: 45px;
}
.created{
    position: fixed;
    right: 17%;
    bottom: 7%;
    cursor: pointer;
}



</style>
