    const state = {
        navBar:[
            {title:"Store",comp:"StoreComp", to:"/", visible:true},
            {title:"Register",comp:"RegisterComp", to:"/register", visible:true},
            {title:"Log In",comp: "LogInComp", to:"/log-in", visible:true},
            {title:"Your Cart",comp: "CartComp", to: "/shopping-cart", value: 0, visible:true},
            {title:"ProductMgmt", comp: "CrudProduct", to: "/product-mgmt", visible:false}
        ],
    }
    const getters = {
        getNavBar: state => { return state.navBar },
    }
    const mutations = {
        resetNavBar: state => {
            state.navBar[1].visible = true;
            state.navBar[2].visible = true;
            state.navBar[3].visible = true;
            state.navBar[3].value = 0;
            state.navBar[4].visible = false;
            state.navBar[2].title = "Log In";
            state.navBar[2].to = "/log-in"; },
        setNavBar: (state, payload) => { 
            state.navBar[1].visible = false;
            payload.isAdmin ? state.navBar[4].visible = true : state.navBar[4].visible = false; 
            state.navBar[2].title = payload.name;
            state.navBar[2].to = "/customer-page";
        },
        setNavBarCart: (state, payload) => {
            state.navBar[3].value = payload;
        }
    }
   const actions = {
        setNavBar: (context, payload) => {
            context.commit('setNavBar', payload)
        },
        setNavBarCart: (context, payload) => {          
            context.commit('setNavBarCart', payload)
        }
    }
export default {
    state,
    getters,
    mutations,
    actions
}