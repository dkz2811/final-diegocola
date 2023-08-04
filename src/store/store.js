import { createStore } from "vuex";
import cart from "./modules/cart";
import product from "./modules/product";
import user from './modules/user'
import navbar from './modules/navbar'

export default createStore({
    state: {
        BASE_URL: import.meta.env.VITE_MOCKAPI_URL,
    },
    modules: {
        cart,
        product,
        user,
        navbar
    },
});