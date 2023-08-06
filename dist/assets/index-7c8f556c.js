import{x as ie,q as O,y as ce,z as P,A,f as S,B as de,c as h,l as g,C as $e,D as ve,E as z,G as B,H as M}from"./index-2f09cd4e.js";function H(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,e)}return n}function w(t){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?H(Object(n),!0).forEach(function(e){fe(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function fe(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function W(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(t).reduce((n,e)=>(a.includes(e)||(n[e]=g(t[e])),n),{})}function _(t){return typeof t=="function"}function ge(t){return $e(t)||ve(t)}function Q(t,a,n){let e=t;const s=a.split(".");for(let u=0;u<s.length;u++){if(!e[s[u]])return n;e=e[s[u]]}return e}function T(t,a,n){return h(()=>t.some(e=>Q(a,e,{[n]:!1})[n]))}function q(t,a,n){return h(()=>t.reduce((e,s)=>{const u=Q(a,s,{[n]:!1})[n]||[];return e.concat(u)},[]))}function X(t,a,n,e){return t.call(e,g(a),g(n),e)}function Y(t){return t.$valid!==void 0?!t.$valid:!t}function me(t,a,n,e,s,u,m){let{$lazy:i,$rewardEarly:d}=s,l=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],v=arguments.length>8?arguments[8]:void 0,$=arguments.length>9?arguments[9]:void 0,p=arguments.length>10?arguments[10]:void 0;const f=O(!!e.value),r=O(0);n.value=!1;const c=P([a,e].concat(l,p),()=>{if(i&&!e.value||d&&!$.value&&!n.value)return;let o;try{o=X(t,a,v,m)}catch(y){o=Promise.reject(y)}r.value++,n.value=!!r.value,f.value=!1,Promise.resolve(o).then(y=>{r.value--,n.value=!!r.value,u.value=y,f.value=Y(y)}).catch(y=>{r.value--,n.value=!!r.value,u.value=y,f.value=!0})},{immediate:!0,deep:typeof a=="object"});return{$invalid:f,$unwatch:c}}function he(t,a,n,e,s,u,m,i){let{$lazy:d,$rewardEarly:l}=e;const v=()=>({}),$=h(()=>{if(d&&!n.value||l&&!i.value)return!1;let p=!0;try{const f=X(t,a,m,u);s.value=f,p=Y(f)}catch(f){s.value=f}return p});return{$unwatch:v,$invalid:$}}function pe(t,a,n,e,s,u,m,i,d,l,v){const $=O(!1),p=t.$params||{},f=O(null);let r,c;t.$async?{$invalid:r,$unwatch:c}=me(t.$validator,a,$,n,e,f,s,t.$watchTargets,d,l,v):{$invalid:r,$unwatch:c}=he(t.$validator,a,n,e,f,s,d,l);const o=t.$message;return{$message:_(o)?h(()=>o(W({$pending:$,$invalid:r,$params:W(p),$model:a,$response:f,$validator:u,$propertyPath:i,$property:m}))):o||"",$params:p,$pending:$,$invalid:r,$response:f,$unwatch:c}}function ye(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a=g(t),n=Object.keys(a),e={},s={},u={};let m=null;return n.forEach(i=>{const d=a[i];switch(!0){case _(d.$validator):e[i]=d;break;case _(d):e[i]={$validator:d};break;case i==="$validationGroups":m=d;break;case i.startsWith("$"):u[i]=d;break;default:s[i]=d}}),{rules:e,nestedValidators:s,config:u,validationGroups:m}}const Re="__root";function Oe(t,a,n,e,s,u,m,i,d){const l=Object.keys(t),v=e.get(s,t),$=O(!1),p=O(!1),f=O(0);if(v){if(!v.$partial)return v;v.$unwatch(),$.value=v.$dirty.value}const r={$dirty:$,$path:s,$touch:()=>{$.value||($.value=!0)},$reset:()=>{$.value&&($.value=!1)},$commit:()=>{}};return l.length?(l.forEach(c=>{r[c]=pe(t[c],a,r.$dirty,u,m,c,n,s,d,p,f)}),r.$externalResults=h(()=>i.value?[].concat(i.value).map((c,o)=>({$propertyPath:s,$property:n,$validator:"$externalResults",$uid:`${s}-externalResult-${o}`,$message:c,$params:{},$response:null,$pending:!1})):[]),r.$invalid=h(()=>{const c=l.some(o=>g(r[o].$invalid));return p.value=c,!!r.$externalResults.value.length||c}),r.$pending=h(()=>l.some(c=>g(r[c].$pending))),r.$error=h(()=>r.$dirty.value?r.$pending.value||r.$invalid.value:!1),r.$silentErrors=h(()=>l.filter(c=>g(r[c].$invalid)).map(c=>{const o=r[c];return S({$propertyPath:s,$property:n,$validator:c,$uid:`${s}-${c}`,$message:o.$message,$params:o.$params,$response:o.$response,$pending:o.$pending})}).concat(r.$externalResults.value)),r.$errors=h(()=>r.$dirty.value?r.$silentErrors.value:[]),r.$unwatch=()=>l.forEach(c=>{r[c].$unwatch()}),r.$commit=()=>{p.value=!0,f.value=Date.now()},e.set(s,t,r),r):(v&&e.set(s,t,r),r)}function Ee(t,a,n,e,s,u,m){const i=Object.keys(t);return i.length?i.reduce((d,l)=>(d[l]=D({validations:t[l],state:a,key:l,parentKey:n,resultsCache:e,globalConfig:s,instance:u,externalResults:m}),d),{}):{}}function we(t,a,n){const e=h(()=>[a,n].filter(r=>r).reduce((r,c)=>r.concat(Object.values(g(c))),[])),s=h({get(){return t.$dirty.value||(e.value.length?e.value.every(r=>r.$dirty):!1)},set(r){t.$dirty.value=r}}),u=h(()=>{const r=g(t.$silentErrors)||[],c=e.value.filter(o=>(g(o).$silentErrors||[]).length).reduce((o,y)=>o.concat(...y.$silentErrors),[]);return r.concat(c)}),m=h(()=>{const r=g(t.$errors)||[],c=e.value.filter(o=>(g(o).$errors||[]).length).reduce((o,y)=>o.concat(...y.$errors),[]);return r.concat(c)}),i=h(()=>e.value.some(r=>r.$invalid)||g(t.$invalid)||!1),d=h(()=>e.value.some(r=>g(r.$pending))||g(t.$pending)||!1),l=h(()=>e.value.some(r=>r.$dirty)||e.value.some(r=>r.$anyDirty)||s.value),v=h(()=>s.value?d.value||i.value:!1),$=()=>{t.$touch(),e.value.forEach(r=>{r.$touch()})},p=()=>{t.$commit(),e.value.forEach(r=>{r.$commit()})},f=()=>{t.$reset(),e.value.forEach(r=>{r.$reset()})};return e.value.length&&e.value.every(r=>r.$dirty)&&$(),{$dirty:s,$errors:m,$invalid:i,$anyDirty:l,$error:v,$pending:d,$touch:$,$reset:f,$silentErrors:u,$commit:p}}function D(t){let{validations:a,state:n,key:e,parentKey:s,childResults:u,resultsCache:m,globalConfig:i={},instance:d,externalResults:l}=t;const v=s?`${s}.${e}`:e,{rules:$,nestedValidators:p,config:f,validationGroups:r}=ye(a),c=w(w({},i),f),o=e?h(()=>{const R=g(n);return R?g(R[e]):void 0}):n,y=w({},g(l)||{}),F=h(()=>{const R=g(l);return e?R?g(R[e]):void 0:R}),G=Oe($,o,e,m,v,c,d,F,n),b=Ee(p,o,v,m,c,d,F),N={};r&&Object.entries(r).forEach(R=>{let[C,E]=R;N[C]={$invalid:T(E,b,"$invalid"),$error:T(E,b,"$error"),$pending:T(E,b,"$pending"),$errors:q(E,b,"$errors"),$silentErrors:q(E,b,"$silentErrors")}});const{$dirty:V,$errors:ee,$invalid:x,$anyDirty:te,$error:ne,$pending:L,$touch:I,$reset:re,$silentErrors:ae,$commit:k}=we(G,b,u),se=e?h({get:()=>g(o),set:R=>{V.value=!0;const C=g(n),E=g(l);E&&(E[e]=y[e]),A(C[e])?C[e].value=R:C[e]=R}}):null;e&&c.$autoDirty&&P(o,()=>{V.value||I();const R=g(l);R&&(R[e]=y[e])},{flush:"sync"});async function le(){return I(),c.$rewardEarly&&(k(),await M()),await M(),new Promise(R=>{if(!L.value)return R(!x.value);const C=P(L,()=>{R(!x.value),C()})})}function ue(R){return(u.value||{})[R]}function oe(){A(l)?l.value=y:Object.keys(y).length===0?Object.keys(l).forEach(R=>{delete l[R]}):Object.assign(l,y)}return S(w(w(w({},G),{},{$model:se,$dirty:V,$error:ne,$errors:ee,$invalid:x,$anyDirty:te,$pending:L,$touch:I,$reset:re,$path:v||Re,$silentErrors:ae,$validate:le,$commit:k},u&&{$getResultsForChild:ue,$clearExternalResults:oe,$validationGroups:N}),b))}class be{constructor(){this.storage=new Map}set(a,n,e){this.storage.set(a,{rules:n,result:e})}checkRulesValidity(a,n,e){const s=Object.keys(e),u=Object.keys(n);return u.length!==s.length||!u.every(i=>s.includes(i))?!1:u.every(i=>n[i].$params?Object.keys(n[i].$params).every(d=>g(e[i].$params[d])===g(n[i].$params[d])):!0)}get(a,n){const e=this.storage.get(a);if(!e)return;const{rules:s,result:u}=e,m=this.checkRulesValidity(a,n,s),i=u.$unwatch?u.$unwatch:()=>({});return m?u:{$dirty:u.$dirty,$partial:!0,$unwatch:i}}}const j={COLLECT_ALL:!0,COLLECT_NONE:!1},U=Symbol("vuelidate#injectChildResults"),J=Symbol("vuelidate#removeChildResults");function Ce(t){let{$scope:a,instance:n}=t;const e={},s=O([]),u=h(()=>s.value.reduce((v,$)=>(v[$]=g(e[$]),v),{}));function m(v,$){let{$registerAs:p,$scope:f,$stopPropagation:r}=$;r||a===j.COLLECT_NONE||f===j.COLLECT_NONE||a!==j.COLLECT_ALL&&a!==f||(e[p]=v,s.value.push(p))}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],m);function i(v){s.value=s.value.filter($=>$!==v),delete e[v]}n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],i);const d=z(U,[]);B(U,n.__vuelidateInjectInstances);const l=z(J,[]);return B(J,n.__vuelidateRemoveInstances),{childResults:u,sendValidationResultsToParent:d,removeValidationResultsFromParent:l}}function Z(t){return new Proxy(t,{get(a,n){return typeof a[n]=="object"?Z(a[n]):h(()=>a[n])}})}let K=0;function je(t,a){var n;let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(e=t,t=void 0,a=void 0);let{$registerAs:s,$scope:u=j.COLLECT_ALL,$stopPropagation:m,$externalResults:i,currentVueInstance:d}=e;const l=d||((n=ie())===null||n===void 0?void 0:n.proxy),v=l?l.$options:{};s||(K+=1,s=`_vuelidate_${K}`);const $=O({}),p=new be,{childResults:f,sendValidationResultsToParent:r,removeValidationResultsFromParent:c}=l?Ce({$scope:u,instance:l}):{childResults:O({})};if(!t&&v.validations){const o=v.validations;a=O({}),ce(()=>{a.value=l,P(()=>_(o)?o.call(a.value,new Z(a.value)):o,y=>{$.value=D({validations:y,state:a,childResults:f,resultsCache:p,globalConfig:e,instance:l,externalResults:i||l.vuelidateExternalResults})},{immediate:!0})}),e=v.validationsConfig||e}else{const o=A(t)||ge(t)?t:S(t||{});P(o,y=>{$.value=D({validations:y,state:a,childResults:f,resultsCache:p,globalConfig:e,instance:l??{},externalResults:i})},{immediate:!0})}return l&&(r.forEach(o=>o($,{$registerAs:s,$scope:u,$stopPropagation:m})),de(()=>c.forEach(o=>o(s)))),h(()=>w(w({},g($.value)),f.value))}export{je as u};
