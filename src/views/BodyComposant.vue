<script setup>
import carrousselImg from '@/components/carrousselImg.vue';
import { onMounted, ref } from 'vue';

const datas = ref([]);

const getData = () =>{
    return fetch ('./public/data.json')
    .then (response => response.json())
    .then (dataTransform => datas.value = dataTransform)
    .catch(error => console.log(error));
};
onMounted (() => {
    console.log(getData());
})


</script>


<template>
<div>
<carrousselImg :datas="datas"></carrousselImg>
</div>
</template>

<style scoped>

</style>