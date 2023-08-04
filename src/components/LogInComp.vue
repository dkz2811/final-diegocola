<script setup>
import { useStore } from 'vuex';
import { reactive,computed, onUpdated } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, helpers} from '@vuelidate/validators'
import { useRouter } from 'vue-router'

const router = useRouter();
defineProps({ states:Object })
const store  = useStore();
const loginSuccess = computed(()=> store.getters.loginSuccess)
const loginError = computed(()=> store.getters.loginError)
const isRegistered = computed(()=> store.getters.isRegistered)
const isLoading = computed(()=> store.getters.isLoading)
const isAdmin = computed(() => store.getters.isAdmin)

const state = reactive({
  login: {
    email: "",
    password: ""
    }})
    
const rules = computed (() => {
  return {
    login:{
      email: { required : helpers.withMessage("Email is required", required) , email: helpers.withMessage("Email must be valid", email)},
      password:{ required, minLength: minLength(3) }
      }
    }
  })

const v$ = useVuelidate(rules, state)
    
onUpdated(() => {
  if( loginSuccess.value && !loginError.value && !isLoading.value && isRegistered.value){
    isAdmin.value ? router.push('/product-mgmt') : router.push('/')
      }
    })
    
const onSubmit = async () => {
  const result = await v$.value.$validate()
  result ?  checkLogin() : console.log("error - form is not valid check inputs")
}
     
const checkLogin =() => {
  store.dispatch('logIn', state.login)
}
</script>
  
  <template>
    <div><p>Usuario admin para crud: admin@coder.com/Admin1234</p></div>
      <div class="login-container">
        <form @submit.prevent="onSubmit">
            <div class="form-group">
              <div class="intput-group mb-3">
                <div class="input-grou-prepend">
                <span class="input-group-text">
                  <label for="email">Email:</label>
                </span>
                </div>
              <input type="email"
              class="form-control"
              id="email"
              v-model="state.login.email"
              autocomplete="admin@coder.com"
              required name="email">
            </div>
            </div>
            <div class="form-group">
              <div class="intput-group mb-3">
                <div class="input-grou-prepend">
                <span class="input-group-text">
                  <label for="password">Password:</label>
                </span>
              </div>
              <input type="password" 
              class="form-control"
              id="password" 
              v-model="state.login.password"
              autocomplete="Admin123"
              required
              name="password">
            </div>
          </div>
          <div>
            <span v-if="loginSuccess"> Success! </span>
            <span v-if="loginError && isRegistered && !isLoading"> User or password are incorrect</span>
            <span v-if="loginError && !isRegistered && !isLoading"> User is not registered </span>
          </div>
          <button class="btn btn-success" type="submit" :disabled="isLoading">Login</button>
        </form>
      </div>  
    </template>
  <style scoped>
  .login-container {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
    }
  </style>