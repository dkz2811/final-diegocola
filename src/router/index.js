import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/store.js'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'store',
      component: () => import('/src/components/StoreComp.vue')
    },
    {
      path: '/log-in',
      name: 'login',
      component: () => import('/src/components/LogInComp.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('/src/components/RegisterComp.vue')
    },
    {
      path: '/customer-page',
      name: 'customer-page',
      component: () => import('/src/components/CustomerPage.vue')
    },
    {
      path: '/shopping-cart',
      name: 'shopping-cart',
      component: () => import('/src/components/CartComp.vue')
    },
    {
      path: '/product-mgmt',
      name: 'product-mgmt',
      component: () => import('/src/components/CrudProduct.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAdmin = store.getters.isAdmin;
  const isLogged = store.getters.isLogged;
  if ( to.path === "/product-mgmt"){
      if (isAdmin && isLogged) {
          next(); 
      } else {
          next("/log-in"); 
      }
  } else if(to.path === "/customer-page"){
      if(isLogged){
          next();
      }else{
          next("/log-in");
      }
  }else{
    next();
  }
});

export default router