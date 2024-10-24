<script setup>
import {onMounted, ref} from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();

const user = ref(null)
const userEmail = ref('');
let password1 = "";
let password2 = "";
const password = ref('');
const userExist = ref(false);
const data = ref([]);

async function fetchUser() {
  const resp = await fetch('public/users-data.json');
   data.value = await resp.json();
  console.log(data.value);
}


async function connectUser() {
    console.log(user.value);
    user.value =  data.value.filter(el => el.email == userEmail.value)
    console.log(user.value);
  if(user.value.length <=0) {
    /* if(password.value == user.value[0].password) {
        // router.push('/home');
        alert ("mot de passe déjà utiliser");
    } else {
        router.push('/');
    } */
        if(password1 == password2){
            router.push("/");
        } else {
            alert("les mots de passe ne sont pas conformes");
        }
   
    }else{
        alert("L'email entrer existe déjà");
    }  

} 

  


function submit() {
    // console.log(userEmail.value);
    // router.push('/dashboard');
    connectUser();
}

onMounted(() => {
    fetchUser();
})
</script>


<template>
       <div class="main-signup-container">
           <div class="signup-container">
            <div>
                <img src="/src/assets/Images/logo1.jpg" alt="img" class="img">
            </div>
            <h2>Sign Up</h2>
            <form>
                <input type="text" placeholder="Username" required>
                <p><input v-model="emailUsers" type="email" placeholder="Email" required> <i class="fa fa-envelope"> </i></p>
                <p><input v-model="password1" type="password" placeholder="Password" required> <svg class="faa"  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg></p>
                <input v-model="password2" type="password" placeholder="Confirm Password" required>
                <button type="submit" @click="submit()" @keyup.enter="submit" class="btn" >Sign</button>
            </form>
            <div class="login-link">
                <p class="create"><RouterLink to="/"  @keyup.enter="submit">Already have an account? </RouterLink></p>
            </div>
               </div>
       </div>

</template>


<style scoped>

.main-signup-container {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    height: 100vh;
    background: linear-gradient(270deg, rgba(154, 154, 165, 1.0), rgba(95, 101, 236, 1.0));
    display: flex;
    justify-content: center;
    align-items: center;
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
    padding-right: 150px

}
h2 {
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
button {
    width: 200px;
    height: 45px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
    margin-left: 15%;
    margin-top: 13px;
    background: linear-gradient(to left, #9c9ca2 20%, #6066ec 70%);

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
.img {
    width: 550px;
    height: 320px;
    border-radius: 90px;
    box-shadow: 17px 9px 25px 25px rgba(83, 87, 181, 0.16),
                9px 4px 25px 3px rgba(83, 87, 181, 1);
    position: fixed;
    left: 450px;  
}
.fa{
    /* width: 100px; */
    position: fixed;
    right: 38%;
    top: 39%;
}
.faa{
    /* width: 100px; */
    position: fixed;
    right: 37.5%;
    top: 50.5%;
}
.btn {
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: larger;
    font-weight: bold;
    text-decoration: none;
    border-radius: 45px;
}
.create{
    position: fixed;
    right: 17%;
    bottom: 7%;
}

</style>
