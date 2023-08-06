import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/store.js'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/final-diegocola/',
      name: 'store',
      component: () => import('/src/components/StoreComp.vue')
    },
    {
      path: '/final-diegocola/log-in',
      name: 'login',
      component: () => import('/src/components/LogInComp.vue')
    },
    {
      path: '/final-diegocola/register',
      name: 'register',
      component: () => import('/src/components/RegisterComp.vue')
    },
    {
      path: '/final-diegocola/customer-page',
      name: 'customer-page',
      component: () => import('/src/components/CustomerPage.vue')
    },
    {
      path: '/final-diegocola/shopping-cart',
      name: 'shopping-cart',
      component: () => import('/src/components/CartComp.vue')
    },
    {
      path: '/final-diegocola/product-mgmt',
      name: 'product-mgmt',
      component: () => import('/src/components/CrudProduct.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAdmin = store.getters.isAdmin;
  const isLogged = store.getters.isLogged;
  if ( to.path === "/final-diegocola/product-mgmt"){
      if (isAdmin && isLogged) {
          next(); 
      } else {
          next("/final-diegocola/log-in"); 
      }
  } else if(to.path === "/final-diegocola/customer-page"){
      if(isLogged){
          next();
      }else{
          next("/final-diegocola/log-in");
      }
  }else{
    next();
  }
});

export default router