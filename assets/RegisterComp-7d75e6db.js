import{e as q,u as S,c as i,f as V,g as A,a as l,b as p,h as s,i as n,v as d,F as E,r as M,l as $,j as U,w as k,m as N,n as R,t as B}from"./index-8b47735a.js";import{u as C}from"./index-992b9cf0.js";import{c as r,r as u,e as L,s as T}from"./index-f3a7b22b.js";const z=["onSubmit"],D={class:"login-container"},F={class:"form-group"},P={class:"intput-group mb-3"},Z=s("div",{class:"input-grou-prepend"},[s("span",{class:"input-group-text"},"Name")],-1),j={class:"form-group"},G={class:"intput-group mb-3"},H=s("div",{class:"input-grou-prepend"},[s("span",{class:"input-group-text"},"Email")],-1),I={class:"form-group"},J={class:"intput-group mb-3"},K=s("div",{class:"input-grou-prepend"},[s("span",{class:"input-group-text"},"Enter password")],-1),O={class:"form-group"},Q={class:"intput-group mb-3"},W=s("div",{class:"input-grou-prepend"},[s("span",{class:"input-group-text"},"Enter password")],-1),X={class:"col-md-12 text-center"},Y={key:0},ss=s("span",null,"This email is already registered",-1),es=[ss],ts={class:"col-md-12 text-center"},os=["disabled"],ds={__name:"RegisterComp",setup(rs){const c=q(),a=S(),h=i(()=>a.getters.isAdmin),m=i(()=>a.getters.isRegistered),_=i(()=>a.getters.isLoading),w=i(()=>a.getters.loginSuccess),e=V({user:{name:"",email:"",password:"",isAdmin:!1},password2:""}),f=r.regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/),b=i(()=>({user:{name:{required:r.withMessage(" Name is required ",u)},email:{required:r.withMessage(" Email is required ",u),email:r.withMessage(" Email must be valid ",L)},password:{required:u,alpha:r.withMessage(" Password must include uppercase and lowercase letters numbers and/or symbols, at least 8 characters ",f)}},password2:{required:u,sameAs:r.withMessage(" Passwords must be identical ",T(e.user.password))}})),g=C(b,e),x=async()=>{await g.value.$validate()?y():console.log("error - form is not valid check inputs")};A(()=>{w.value&&!_.value&&m.value&&(h.value?c.push("/product-mgmt"):c.push("/"))});const y=()=>{a.dispatch("userExists",e.user)};return(v,o)=>(l(),p("form",{onSubmit:k(x,["prevent"])},[s("div",D,[s("div",F,[s("div",P,[Z,n(s("input",{type:"text",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=t=>e.user.name=t),autocomplete:"enter name",required:"",name:"name"},null,512),[[d,e.user.name]])])]),s("div",j,[s("div",G,[H,n(s("input",{type:"text",class:"form-control","onUpdate:modelValue":o[1]||(o[1]=t=>e.user.email=t),autocomplete:"enter email",required:"",name:"email"},null,512),[[d,e.user.email]])])]),s("div",I,[s("div",J,[K,n(s("input",{type:"password",class:"form-control","onUpdate:modelValue":o[2]||(o[2]=t=>e.user.password=t),autocomplete:"enter password",required:"",name:"password1"},null,512),[[d,e.user.password]])])]),s("div",O,[s("div",Q,[W,n(s("input",{type:"password",class:"form-control","onUpdate:modelValue":o[3]||(o[3]=t=>e.password2=t),autocomplete:"re-enter password",required:"",name:"password2"},null,512),[[d,e.password2]])])]),s("div",X,[(l(!0),p(E,null,M($(g).$errors,t=>N(v.$slots,"errors",{key:t.$uid},()=>[R(B(t.$message),1)])),128))]),m.value?(l(),p("div",Y,es)):U("",!0),s("div",ts,[s("button",{class:"btn btn-success mt-3",type:"submit",disabled:_.value},"Send",8,os)])])],40,z))}};export{ds as default};
