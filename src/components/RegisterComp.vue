<script setup>
import {reactive, computed, onUpdated} from 'vue'
import {useStore} from 'vuex'
import {useVuelidate} from '@vuelidate/core'
import {required, email, minLength, helpers, sameAs} from '@vuelidate/validators'
import {useRouter} from 'vue-router'

const router = useRouter()
const store = useStore()
const isAdmin = computed(() => store.getters.isAdmin)
const isRegistered = computed(() => store.getters.isRegistered)
const isLoading = computed(() => store.getters.isLoading)
const loginSuccess = computed(() => store.getters.loginSuccess)
const state = reactive({
    user:
    {   
        name:"",
        email:"",
        password:"",
        isAdmin:false
    },
    password2 :"",
})

const alpha = helpers.regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);

const rules = computed (() => {
        return {
            user:{
                name: { required : helpers.withMessage(" Name is required ", required) },
                email: { required : helpers.withMessage(" Email is required ", required) , email: helpers.withMessage(" Email must be valid ", email)},
                password:{ required, alpha : helpers.withMessage(" Password must include uppercase and lowercase letters numbers and/or symbols, at least 8 characters ", alpha)}
            },
            password2:{ required,  sameAs : helpers.withMessage(" Passwords must be identical ", sameAs(state.user.password))}
        }   
    })

const v$ = useVuelidate(rules, state)
const onSubmit = async () => {
  const result = await v$.value.$validate()
  result ?  registerUser() : console.log("error - form is not valid check inputs")
}


onUpdated(() => {
  if( loginSuccess.value && !isLoading.value && isRegistered.value){
    isAdmin.value ? router.push('/product-mgmt') : router.push('/')
      }
    })

const registerUser = () => { store.dispatch('userExists', state.user);}

</script>
<template>
        <form @submit.prevent="onSubmit">
            <div class="login-container">
                <div class="form-group">
                        <div class="intput-group mb-3">
                            <div class="input-grou-prepend">
                                <span class="input-group-text" >Name</span>
                            </div>
                            <input type="text" class="form-control" v-model="state.user.name" autocomplete="enter name" required name="name">
                        </div>
                </div>
                <div class="form-group">
                        <div class="intput-group mb-3">
                            <div class="input-grou-prepend">
                                <span class="input-group-text" >Email</span>
                            </div>
                            <input type="text" class="form-control" v-model="state.user.email" autocomplete="enter email" required name="email">
                        </div>
                </div>
                <div class="form-group">
                        <div class="intput-group mb-3">
                            <div class="input-grou-prepend">
                                <span class="input-group-text" >Enter password</span>
                            </div> 
                            <input type="password" class="form-control" v-model="state.user.password" autocomplete="enter password" required name="password1">
                        </div> 
                </div>
                <div class="form-group">
                        <div class="intput-group mb-3">
                            <div class="input-grou-prepend">
                                <span class="input-group-text" >Enter password</span>
                            </div>          
                            <input type="password" class="form-control" v-model="state.password2" autocomplete="re-enter password" required name="password2">
                        </div> 
                </div>
                <div class="col-md-12 text-center"><slot name="errors" v-for="error of v$.$errors" :key="error.$uid">{{ error.$message  }}</slot></div>
                <div v-if="isRegistered"><span>This email is already registered</span></div>
                <div class="col-md-12 text-center"><button class="btn btn-success mt-3" type="submit" :disabled="isLoading">Send</button></div>
            </div>
        </form>
</template>
<style>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
}
</style>