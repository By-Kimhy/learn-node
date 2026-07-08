<template>
    <div class="frm">
        <label>User name:</label>
        <input type="text" v-model="txtName">
        <label>Password:</label>
        <input type="text" v-model="txtPass">
        <label>Role:</label>
        <select v-model="txtRole">
            <option value="0"></option>
            <option value="1"> FrontEnd Developer</option>
            <option value="2">BackEnd Developer</option>
            <option value="3">Full-Stack Developer</option>
        </select>
        <label>Skill</label>
        <input type="text" v-model="txtSkill" @keypress="addSkill">
        <ul>
            <li v-for="(skill, i) in skillList" :key="i" @click="removeSkill(i)">{{ skill }}</li>
        </ul>
        <div>
            <input type="checkbox" v-model="txtTerm">
            <span>Accept Term and Condition</span>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        addSkill(e) {
            if (e.code == "Enter") {
                this.skillList.push(this.txtSkill)
            }
        },
        removeSkill(i){
            this.skillList.splice(i,1);
        }

    },
    data() {
        return {
            txtName: "",
            txtPass: "",
            txtRole: "",
            txtSkill: "",
            txtTerm: false,
            skillList: []
        }
    }
}
</script>


<style scoped>
*{
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.frm {
    width: 600px;
    padding: 9px;
    box-shadow: 1px 1px 6px dimgray;
    margin: auto;
    margin-top: 9px;
    display: flex;
    flex-direction: column;
}

.frm input,
.frm select {
    padding: 9px;
    box-sizing: border-box;
    border: 1px solid #ccc;
}
ul{
    margin-top: 6px;
    display: flex;
    gap: 6px;
}
ul li{
    cursor: pointer;
    background-color: antiquewhite;
    border-radius: 9%;
    text-decoration: none;
    padding: 6px;
}
</style>