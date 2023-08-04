<script setup>
import OneCard from './OneCard.vue';
import {ref, computed, onMounted, reactive } from 'vue'
import {useStore} from 'vuex'
import {useVuelidate} from '@vuelidate/core'

const store = useStore();
onMounted(() => store.dispatch('getDevices'))
const textarea = ref(null)
const state = reactive({
            device:{ 
                id: "",
                model :"",
                specs: "",
                price: 0,
                picture: "",
                stock: 0,
                brand: "",
            }  
        })

const getStockedDevices = computed(() => store.getters.getStockedDevices)

const v$ = useVuelidate(state)
const result = v$.value.$validate()

const onSubmitHandler = async () => {
            if(result){
                if(state.device.id !== ""){ 
                    saveChanges();
                }else if(state.device.id == ""){
                    addDevice();
                }
                clearForm();
            }else{
                console.log("error - form is not valid check inputs")
            }
            store.dispatch('getDevices');
        }

const deleteDevice = async () =>{
            if(result){
                store.dispatch('deleteDevice', state.device);
                store.dispatch('getDevices');
                clearForm();
            }
        }  


const getSelectedItem = (item) => {
            let aDevice = {
                id: item.id,
                model: item.model,
                price: item.price,
                picture: item.picture,
                stock: item.stock,
                brand: item.brand,
                specs: item.specs
            } 
            state.device = aDevice;
            textarea.value.focus();
        }

const saveChanges = () => {
            let aDevice = {
                id: state.device.id,
                model: state.device.model,
                price: parseInt(state.device.price),
                picture: state.device.picture,
                stock: parseInt(state.device.stock),
                brand: state.device.brand,
                specs: state.device.specs.trim()
            } 
            store.dispatch('updateDevice', aDevice);
            store.dispatch('getDevices');
            clearForm();    
        }

const addDevice = () =>{
            let aDevice = {
                model: state.device.model,
                price: parseInt(state.device.price),
                picture: state.device.picture,
                stock: parseInt(state.device.stock),
                brand: state.device.brand,
                specs: state.device.specs.trim()
            } 
            store.dispatch('addDevice', aDevice);
            store.dispatch('getDevices');
        }

const clearForm = () =>{
            state.device = {
                id: "",
                model :"",
                specs: "",
                price: 0,
                picture: "",
                stock: 0,
                brand: "",
            }
            state.formstate.$reset;
        }
</script>

<template>
        <div class="float-child-left">
        <form @submit.prevent="onSubmitHandler">
            <div class="login-container mb-1">
                <div class="form-group">
                        <div class="intput-group mb-1">
                            <div class="input-grou-prepend">
                                <label for="model">Model</label>
                                <input id="model" type="text" v-model="state.device.model" placeholder="Model" required name="model"/>
                            </div>
                        </div>
                </div>
                <div class="form-group">
                        <div class="intput-group mb-1">
                            <div class="input-grou-prepend">
                                <label for="price">Price</label>
                                <input id="price" type="number" v-model="state.device.price" placeholder="Price" required name="price"/>
                            </div>
                        </div>  
                </div>
                <div class="form-group">
                        <div class="intput-group mb-1">
                            <div class="input-grou-prepend">
                                <label for="picture">Picture url</label>
                                <input  ref="pic" id="picture" type="text" v-model="state.device.picture" placeholder="Picture" name="picture"/>
                            </div>
                        </div>
                </div>
                <div class="form-group">
                        <div class="intput-group mb-1">
                            <div class="input-grou-prepend">
                                <label for="stock">Stock</label>
                                <input id="stock" type="number" v-model="state.device.stock" placeholder="Stock" required name="stock"/>
                            </div>
                        </div>
                </div>
                <div class="form-group">
                        <div class="intput-group mb-1">
                            <div class="input-grou-prepend">
                                <label for="brand">Marca</label>
                                <input id="brand" type="text" v-model="state.device.brand" placeholder="Brand" required name="brand"/>
                            </div>  
                        </div>
                    <div class="form-group">
                            <div class="intput-group mb-1">
                                <div class="input-grou-prepend">
                                    <label for="specs">Specs</label>
                                </div>
                                    <textarea 
                                    ref="textarea"
                                    class="textarea"
                                    id="specs" 
                                    v-model="state.device.specs" 
                                    placeholder="Eech spec must be separeted by a comma ','" 
                                    required name="specs" 
                                    cols="20" 
                                rows="10"></textarea>
                            </div>  
                    </div>
                </div>
                <div>
                    <div>
                        <span> 
                            {{ state.device.id != '' ? 'Modify '+ state.device.model : "" }}
                        </span>
                    </div>
                    <div>
                    <button 
                    :class="state.device.id == '' ? 'btn btn-success' : 'btn btn-warning'" 
                    type="submit"> {{ state.device.id == '' ? 'Create New' : 'Modify ID:' + state.device.id  }}
                </button>
                <button class="btn btn-secondary " @click="clearForm">Clear</button>
                <div>
                    <button v-if="state.device.id != ''"
                    type="button" 
                    class="btn btn-danger ml-3 mt-3 " 
                    @click="deleteDevice"
                    >Delete
                </button>
            </div>    
            </div>
        </div> 
    </div>
        </form>
    </div>
    <div class="float-child-right">
            <div class="float-child-card" v-for="dev in getStockedDevices" :key='dev.id' > 
                <OneCard
                button="Modify"
                :model="dev.model"
                :price="dev.price"
                :picture="dev.picture"
                :id="dev.id"
                :stock="dev.stock"
                :brand="dev.brand"
                :specs="dev.specs"
                @getSelectedItem="getSelectedItem"
                ></OneCard>
            </div>
        </div>
</template>

<style scoped>
button{
    margin-left: 1rem;
}
textarea {
    width: 21rem;
    min-height: 3rem;
    padding: 2px;
    resize: none;
    overflow: hidden;
    background-color: transparent;
    border-radius: 4px;
    font-family: "Inconsolata", monospace;
    font-size: 1rem;
    color: #000;
}
.float-container {
    padding: 2rem;
    border: 2px solid red;
}
.float-child-left {
    width: 33%;
    float: center;
    padding: 3rem;
    margin-left: 33%;
    margin-right: 33%;
    border: 1px solid  rgba(0,0,0,0.2);
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px; /* 5px rounded corners */ 
    max-height: 95rem;
}  
.float-child-right {
    width: 100%;
    float: left;
    padding: 1rem;
}  
.float-child-card {
    width: 25%;
    float: left;
    padding: 1rem;
}  
label {
        display: inline-block;
        width: 9rem;
        text-align: left;
      }
</style>