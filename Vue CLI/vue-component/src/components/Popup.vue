<template>
    <teleport to='body'>
    <div class="popup">
        <div class="frm">
            <h1> {{ header }}</h1>
            <p>{{ content }}</p>
            <button @click="closePopup()">Close</button>
            <slot name="h2"></slot>
            <slot></slot>
        </div>
    </div>
    </Teleport>
</template>
<script>
export default {
    props: [
        'header',
        'content'
    ],
    data() {
        return {
            txt: "Hello Header"
        }
    },
    methods: {
        closePopup() {
            this.$emit("close")
        }
    }
}
</script>

<style scoped>
.popup {
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.2333);
    position: fixed;
    top: 0%;
    left: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.frm {
    width: 600px;
    height: 300px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

button {
    padding: 18px;
    background-color: red;
    color: white;
    border-radius: 5%;
    border: 0px
}
</style>