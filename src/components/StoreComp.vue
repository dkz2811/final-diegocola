<script setup>
import OneCard from './OneCard.vue'
import { useStore} from 'vuex'
import {computed, onMounted} from 'vue'

const store = useStore();
onMounted(() => store.dispatch('getDevices'))

const getStockedDevices = computed(() => store.getters.getStockedDevices)
const getSelectedItem = (item) => {
            store.dispatch('addProductToShoppingList', item)
        }
</script>
<template >
    <div class="float-container">
            <div class="float-child" v-for="(dev) in getStockedDevices" :key='dev.id'>
                <OneCard
                button="Add to Cart"
                :model="dev.model"
                :price="dev.price"
                :picture="dev.picture"
                :id="dev.id"
                :stock="dev.stock"
                :specs="dev.specs"
                @getSelectedItem="getSelectedItem"
                ></OneCard>
            </div>
        </div>
</template>
<style scoped>
.float-container {
    padding: 2rem;
}

.float-child {
    width: 22%;
    float: left;
    padding: 3rem;
}  

</style>
