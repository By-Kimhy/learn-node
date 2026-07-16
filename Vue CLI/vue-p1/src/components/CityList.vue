<script setup>
    import { ref } from 'vue';
    import { cityList } from './store';
    const cityInd = ref(-1);
    const districtInd = ref(-1);
    const AreaInd = ref(-1);
    const disData = ref([]);
    const AreaData = ref([]);
    const getDisData = () => {
        disData.value = cityList.value[cityInd.value]['sub'];
    }
    const getAreaData = () => {
        AreaData.value = disData.value[districtInd.value]['sub'];
    }
</script>
<template>
    <div class="container">
        <div class="row" style="padding-block: 15px;">
            <div class="col-xxl-4 col-xl-4 col-lg-4">
                <select class="form-control" @change="getDisData" v-model="cityInd">
                    <option value="-1">---- select city ----</option>
                    <option v-for="(city,i) in cityList" :key="i" :value="i">{{city.name}}</option>
                </select>
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4">
                <select class="form-control" @click="getAreaData" v-model="districtInd">
                    <option value="-1">---- select District ----</option>
                    <option v-for="(district,i) in disData" :key="i" :value="i">{{district.name}}</option>
                </select>
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4">
                <select class="form-control" v-model="AreaInd">
                    <option value="-1">---- select Area ----</option>
                    <option v-for="(area,i) in AreaData" :key="i" :value="i">{{area}}</option>
                </select>
            </div>
        </div>
    </div>
</template>