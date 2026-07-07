<template>
  <Popup v-if="IsActive" :Header="txtH" conten="Body" @close="closePopup"/>
  <button @click="showPopup">Click</button>

  <!-- <NavBar /><br>
  <leftMenu /><br>
  <h1>{{ txt }}</h1> -->
</template>

<script>
import NavBar from './components/NavBar.vue';
import leftMenu from './components/leftMenu.vue';
import Popup from './components/Popup.vue';
export default {
  data() {
    return {
      IsActive:false,
      txtH:'Dynamic Header'
    }
  },
  methods:{
    showPopup(){
      this.IsActive=true
    },
    closePopup(){
      this.IsActive=false
    }
  },
  components:{
    NavBar,
    leftMenu,
    Popup
  }
}
</script>

<style scoped>
  button{
    padding: 18px;
  }
</style>