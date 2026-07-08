<template>
  <div>
    <button @click="showPopup">Click</button>

    <Popup v-if="IsActive" :header="txtH" content="Body" @close="closePopup">
      <template v-slot:h2>
        <h2>Slot1</h2>
      </template>

      <h3>Slot2</h3>
    </Popup>
  </div>

</template>

<script>
import NavBar from './components/NavBar.vue';
import leftMenu from './components/leftMenu.vue';
import Popup from './components/Popup.vue';

export default {
  data() {
    return {
      IsActive: false,
      txtH: 'Dynamic Header'
    }
  },
  methods: {
    showPopup() {
      this.IsActive = true
    },
    closePopup() {
      this.IsActive = false
    }
  },
  components: {
    NavBar,
    leftMenu,
    Popup
  }
}
</script>

<style scoped>
button {
  padding: 18px;
}
</style>
