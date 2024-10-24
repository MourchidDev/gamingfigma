<script setup>
</script>


<template>
    <h1>Hope.Co</h1>
  <div id="deux"> <img src="../components/vector-timber-svgrepo-com.svg"/>
    <button> Jouer Mantenant</button>
  </div>
</template>


<style scoped>
div > button {
  height: 35px;
  border-radius: 20px;
  border-top-color: rgba(0, 255, 255, 0.397);
  border-bottom-color: rgba(255, 255, 255, 0.205);
  width: 150px;
  background-color: #ebf3e918;
  color: #FFFFFF;
  cursor: pointer;
}
img {
  width: 30px;
  
  /* background-color: #fff; */
}
#deux {
  display: flex;
  gap: 20px;
  /* background-color: #fff; */
  justify-content: space-around;
}
@keyframes winner {
  from {
    background-color: #3ac22e2f;
  }
  to {
    background-color: #37a2c2;
  }
}
button {
  animation-name: winner;
  animation-duration: 4s;
}
button:active{
    color: rgb(190, 117, 21);
    rotate: z 5deg;
}
h1{
    color:#FFFFFF;
    position:absolute;
    bottom: 620px;
    left: -45px;
    animation: titre 5s infinite;
  
}

</style>