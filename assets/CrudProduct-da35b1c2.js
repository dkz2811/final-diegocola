import{_ as S,u as C,o as I,q as M,f as V,c as w,a,b as v,h as e,w as P,i as d,v as r,t as b,s as q,j as U,F as f,r as B,x as $,p as F,k as N}from"./index-d23a9866.js";import{O as E}from"./OneCard-d6634484.js";import{u as L}from"./index-aad49a78.js";const n=l=>(F("data-v-e7562769"),l=l(),N(),l),O={class:"float-child-left"},j=["state","onSubmit"],z={class:"login-container mb-1"},G={class:"form-group"},H={class:"intput-group mb-1"},T={class:"input-grou-prepend"},A=n(()=>e("label",{for:"model"},"Model",-1)),J={class:"form-group"},K={class:"intput-group mb-1"},Q={class:"input-grou-prepend"},R=n(()=>e("label",{for:"price"},"Price",-1)),W={class:"form-group"},X={class:"intput-group mb-1"},Y={class:"input-grou-prepend"},Z=n(()=>e("label",{for:"picture"},"Picture url",-1)),ee={class:"form-group"},te={class:"intput-group mb-1"},se={class:"input-grou-prepend"},ie=n(()=>e("label",{for:"stock"},"Stock",-1)),oe={class:"form-group"},ce={class:"intput-group mb-1"},de={class:"input-grou-prepend"},re=n(()=>e("label",{for:"brand"},"Marca",-1)),ne={class:"form-group"},ae={class:"intput-group mb-1"},le=n(()=>e("div",{class:"input-grou-prepend"},[e("label",{for:"specs"},"Specs")],-1)),pe={class:"float-child-right"},ue={__name:"CrudProduct",setup(l){const c=C();I(()=>c.dispatch("getDevices"));const m=M(null),t=V({formstate:{},device:{id:"",model:"",specs:"",price:0,picture:"",stock:0,brand:""}}),h=w(()=>c.getters.getDevices),_=L(t).value.$validate(),p=()=>{c.dispatch("getDevices")},g=async()=>{_?(t.device.id!==""?D():t.device.id==""&&x(),u()):console.log("error - form is not valid check inputs"),p()},k=async()=>{_&&(c.dispatch("deleteDevice",t.device),u(),p())},y=o=>{let i={id:o.id,model:o.model,price:o.price,picture:o.picture,stock:o.stock,brand:o.brand,specs:o.specs};t.device=i,m.value.focus()},D=()=>{let o={id:t.device.id,model:t.device.model,price:parseInt(t.device.price),picture:t.device.picture,stock:parseInt(t.device.stock),brand:t.device.brand,specs:t.device.specs.trim()};u(),c.dispatch("updateDevice",o),p()},x=()=>{let o={model:t.device.model,price:parseInt(t.device.price),picture:t.device.picture,stock:parseInt(t.device.stock),brand:t.device.brand,specs:t.device.specs.trim()};c.dispatch("addDevice",o),p()},u=()=>{t.device={id:"",model:"",specs:"",price:0,picture:"",stock:0,brand:""},t.formstate.$reset};return(o,i)=>(a(),v(f,null,[e("div",O,[e("form",{state:t.formstate,onSubmit:P(g,["prevent"])},[e("div",z,[e("div",G,[e("div",H,[e("div",T,[A,d(e("input",{id:"model",type:"text","onUpdate:modelValue":i[0]||(i[0]=s=>t.device.model=s),placeholder:"Model",required:"",name:"model"},null,512),[[r,t.device.model]])])])]),e("div",J,[e("div",K,[e("div",Q,[R,d(e("input",{id:"price",type:"number","onUpdate:modelValue":i[1]||(i[1]=s=>t.device.price=s),placeholder:"Price",required:"",name:"price"},null,512),[[r,t.device.price]])])])]),e("div",W,[e("div",X,[e("div",Y,[Z,d(e("input",{ref:"pic",id:"picture",type:"text","onUpdate:modelValue":i[2]||(i[2]=s=>t.device.picture=s),placeholder:"Picture",name:"picture"},null,512),[[r,t.device.picture]])])])]),e("div",ee,[e("div",te,[e("div",se,[ie,d(e("input",{id:"stock",type:"number","onUpdate:modelValue":i[3]||(i[3]=s=>t.device.stock=s),placeholder:"Stock",required:"",name:"stock"},null,512),[[r,t.device.stock]])])])]),e("div",oe,[e("div",ce,[e("div",de,[re,d(e("input",{id:"brand",type:"text","onUpdate:modelValue":i[4]||(i[4]=s=>t.device.brand=s),placeholder:"Brand",required:"",name:"brand"},null,512),[[r,t.device.brand]])])]),e("div",ne,[e("div",ae,[le,d(e("textarea",{ref_key:"textarea",ref:m,class:"textarea",id:"specs","onUpdate:modelValue":i[5]||(i[5]=s=>t.device.specs=s),placeholder:"Eech spec must be separeted by a comma ','",required:"",name:"specs",cols:"20",rows:"10"},null,512),[[r,t.device.specs]])])])]),e("div",null,[e("div",null,[e("span",null,b(t.device.id!=""?"Modify "+t.device.model:""),1)]),e("div",null,[e("button",{class:q(t.device.id==""?"btn btn-success":"btn btn-warning"),type:"submit"},b(t.device.id==""?"Create New":"Modify ID:"+t.device.id),3),e("button",{class:"btn btn-secondary",onClick:u},"Clear"),e("div",null,[t.device.id!=""?(a(),v("button",{key:0,type:"button",class:"btn btn-danger ml-3 mt-3",onClick:k},"Delete ")):U("",!0)])])])])],40,j)]),e("div",pe,[(a(!0),v(f,null,B(h.value,s=>(a(),v("div",{class:"float-child-card",key:s.id},[(a(),$(E,{button:"Modify",model:s.model,price:s.price,picture:s.picture,id:s.id,stock:s.stock,brand:s.brand,specs:s.specs,key:s.id,onGetSelectedItem:y},null,8,["model","price","picture","id","stock","brand","specs"]))]))),128))])],64))}},fe=S(ue,[["__scopeId","data-v-e7562769"]]);export{fe as default};