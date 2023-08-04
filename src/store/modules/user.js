const state = {
      BASE_URL: import.meta.env.VITE_MOCKAPI_URL,
      loginSuccess:false,
      loginError: false,
      isLoading: false,
      login:{ 
        name: "",
        email: "",
        password: "",
        isAdmin: false
      },
      isRegistered: false,
      user: {
        id: '',
        name: '',
        email: '',
        isAdmin: false,
        isLogged: false,
        purchases: [],
        cart: []
      }
    }

    const getters = {
      getUrl: state => { return state.BASE_URL },
      getUserPurchases: state => { return state.user.purchases },
      isRegistered: state => { return state.isRegistered },
      loginSuccess: state => { return state.loginSuccess },
      loginError: state => { return state.loginError },
      getUser: state => { return state.user },
      isAdmin: state => { return state.user.isAdmin },
      isLogged: state => { return state.user.isLogged },
    }

    const mutations = { 
      isLoading: (state, payload) => { state.isLoading = payload },
      setUserCart: (state, payload) => { state.user.cart = payload }, 
      addRecipt: (state, payload) => { state.user.purchases.push(payload); },
      isLogged: (state, payload) => { state.user.isLogged = payload },
      loginSuccess: (state, payload) => { state.loginSuccess = payload },
      loginError: (state, payload) => { state.loginError = payload },
      isRegistered: (state, payload) => { state.isRegistered = payload },
      setUser: (state, payload) => { 
        state.user.id = payload.id;
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.isAdmin = payload.isAdmin;
        state.user.purchases = payload.purchases;
        state.user.isLogged = payload.isLogged;
      },
    } 

    const actions = {
      getUser: (context) => {
        let user = JSON.parse(localStorage.getItem('user')) || null
        if (user !== null) {
          context.commit('setUser', user)
          context.dispatch ('setLoginOkFlags', user)
        }
      },
      resetLoginFlags: (context) => {
        context.commit('isLoading', true)
        context.commit('loginSuccess', false)
        context.commit('loginError', false)
        context.commit('isRegistered', false)
      },
      setLoginOkFlags: (context, user) => {
        context.commit('setUser', user)
        context.commit('loginSuccess', true)
        context.commit('loginError', false)
        context.commit('isRegistered', true)
        context.commit('setNavBar', user)
      },
      userExists: (context, payload) => {
        fetch(`${context.state.BASE_URL}/users`)
        .then(res => res.json())
        .then(users => {
          let neverDoThisAllUsers = users;
          let user = neverDoThisAllUsers.find(user => user.email === payload.email)
          user ? context.commit('isRegistered', true) : context.dispatch("registerUser", payload)
        }).catch(err => console.log(err))
      },
      registerUser: (context, payload) => {
        let cart = []
        cart = context.getters.getShoppingCartFromLocalStorage
        fetch(context.state.BASE_URL + '/users', {
          method: "POST",
          body: JSON.stringify({name: payload.name, email: payload.email, password: payload.password, cart: cart}),
          headers: {"Content-type": "application/json"}})
          .then(res => res.json())
          .then(user => {
            context.dispatch ('setLoginOkFlags',  { id: user.id, name: user.name, email: user.email, isAdmin: user.isAdmin, purchases: user.purchases, isLogged: true })
            localStorage.setItem('user', JSON.stringify({ id: user.id, name: user.name, email: user.email, isAdmin: user.isAdmin, purchases: user.purchases, isLogged: true, cart: cart }));
          }).catch(err => console.log(err))
          .finally(() => context.commit('isLoading', false))
        },
        updateUser: (context) => {
          fetch(context.state.BASE_URL + '/users/' + context.state.user.id, {
            method: "PUT",
            body: JSON.stringify(context.state.user),
            headers: {"Content-type": "application/json"}})
            .then(res => res.json())
            .then(user => {
              console.log("user => updateUser", user)
            }).catch(err => console.log(err))
            .finally(() => context.commit('isLoading', false))
          },
          logIn: (context, payload) => {
            context.dispatch('resetLoginFlags')
            fetch(context.state.BASE_URL +'/users')
            .then(res => res.json())
            .then(users => {
              let user = users.find(user => user.email === payload.email);
              if(user){ 
                if(user.password === payload.password){
                  let x = { id: user.id, name: user.name, email: user.email, isAdmin: user.isAdmin, purchases: user.purchases, isLogged: true, cart: user.cart }
                  context.dispatch ('setLoginOkFlags', x )
                  localStorage.setItem('user', JSON.stringify(x));
                  x.cart.length > 0 ? context.dispatch('setCartFromBackEnd', x.cart) : context.dispatch('setCartFromLocalStorage')
                }else{
                  context.commit('loginError', true)
                  context.commit('loginSuccess', false)
                  context.commit('isRegistered', true)
                }
              }else{
                context.commit('isRegistered', false)
                context.commit('loginError', true)
                context.commit('loginSuccess', false)
              }
            })
            .catch(err => console.log(err)) 
            .finally(() => context.commit('isLoading', false))
          },
          userLogOut: (context) => { 
            let cart = JSON.parse(localStorage.getItem('cart')) || []
            context.commit('setUserCart', cart)
            context.dispatch('updateUser')
            context.commit('setUser', { id: '', name: '', email: '', isAdmin: false, purchases: [], isLogged: false, cart: [] })
            context.commit('clearCartLocal')
            context.commit('clearCart')
            context.dispatch('resetLoginFlags')
            context.commit('resetNavBar')
            localStorage.removeItem('user')
          },
        }

export default {
    state,
    getters,
    mutations,
    actions
}