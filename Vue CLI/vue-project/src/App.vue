<template>
  <div class="form-row">
    <label for="" >Num1:</label>
    <input type="number" id="" ref="num1">
    <label for="" >Num2:</label>
    <input type="number" id="" ref="num2">
    <label for="">Total:</label>
    <input type="number" id="" ref="total">
    <button @click="sum">+</button>
  </div>
</template>
<script>
export default {
    //option API
  data() {
    return {};
  },
  methods: {
    sum(){
        const num1=this.$refs.num1;
        const num2=this.$refs.num2;
        this.$refs.total.value = parseFloat(num1.value)+ parseFloat(num2.value);
    }
  },
};
</script>

<style scoped>
input {
  padding: 18px;
}
.form-row {
  display: flex;
  align-items: center;
  gap: 8px; /* spacing between items */
}

.form-row label {
  margin-right: 4px;
}
</style>