<script setup>
import NavComp from "./components/NavComp.vue";
import { useStore } from "vuex";

const store = useStore();
const getUser = () => store.dispatch('getUser')
const setCartFromLocalStorage = () => store.dispatch('setCartFromLocalStorage')
getUser()
setCartFromLocalStorage()
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <NavComp/>
      </nav>
    </div>
  </header>
  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.container {
  position: relative;
  padding-top: 4rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: left;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: 0rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 0rem;
    margin-bottom: 2rem;
  }
}
</style>
