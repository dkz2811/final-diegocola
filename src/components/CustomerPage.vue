<script setup>
import { useStore } from 'vuex';
import { reactive } from 'vue'; 

const store = useStore();
const state = reactive({ user: store.getters.getUser})
            
</script>
<template >
    <div>
       <div><p>User Name: {{ state.user.name  }}</p> </div>
       <div><p>User Email: {{ state.user.email  }}</p> </div>
       <div><p>User isAdmin: {{ state.user.isAdmin  }}</p> </div>
    </div>
</template>
<style >
    
</style>