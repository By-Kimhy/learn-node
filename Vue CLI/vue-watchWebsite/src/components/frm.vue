<script setup>
import { txt, itemList, total } from './store';
import { ref, onMounted } from 'vue';
const txtId = ref(0);
const txtName = ref("");
const txtPrice = ref(0);
const getTotal=()=>{
        total.value=0;
        itemList.value.forEach(e=>{
            total.value +=e.price
        })
    }
const addItem = () => {
    if(txtName.value==""){
        alert("Please fill Name");
        document.getElementById("txtname").focus();
        return;
    }
        
    itemList.value.push(
        {
            id: txtId.value,
            name: txtName.value,
            price: txtPrice.value
        }
    )
    getAutoId();
    txtName.value="";
    txtPrice.value=0;
    getTotal();
    document.getElementById("txtname").focus();
};
const getAutoId = () => {
    txtId.value = itemList.value.length + 1;
};
onMounted(() => {
    getAutoId();
})
</script>
<template>
    <div class="frm">
        <h1>{{ txt }}</h1>
        <label>ID</label>
        <input type="text" v-model="txtId" readonly >
        <label>Name</label>
        <input type="text" v-model="txtName" id="txtname">
        <label>Price</label>
        <input type="number" v-model="txtPrice">
        <button @click="addItem">Post</button>
    </div>
</template>

<style scoped>
* {
    margin: 0%;
    padding: 0%;
}

.frm {
    width: 600px;
    margin: auto;
    padding: 18px;
    box-shadow: 1px 1px 3px #ccc;
    display: flex;
    flex-direction: column;
    row-gap: 6px;
}

input {
    padding: 9px;
    border: 1px solid #ccc;
}

button {
    padding: 9px;
    cursor: pointer;
}
</style>