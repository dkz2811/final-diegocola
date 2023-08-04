<script setup>
import ALabel from './ALabel.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

        const userLogOut = () => {
            store.dispatch('userLogOut');
        }
        const getNavBar = computed(() => store.getters.getNavBar);
        const isLogged = computed(() => store.getters.isLogged);
        const isLoading = computed(() => store.getters.isLoading);

</script>

<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" 
      v-for="link in getNavBar" :key="link.comp">
      <li class="nav-item" v-if="link.visible">
          <router-link
                    class="nav-link active" 
                    :to="link.to"><ALabel 
                    :title="link.title " 
                    :value="link.value"/>
            </router-link>
        </li>
      </ul>
      <div class="logout">
        <button class="btn btn-success mr3" type="button" @click="userLogOut" :disabled="isLoading" v-if="isLogged"> Log Out</button>
      </div>
    </div>
  </div>
</nav>
</template>
<style scoped>
.logout{
 margin-right: 10px;
}

</style>