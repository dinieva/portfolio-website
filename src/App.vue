<script setup lang="ts">
import { RouterView } from "vue-router";

import IconHome from "./components/icons/IconHome.vue";
import IconPerson from "./components/icons/IconPerson.vue";
import IconCases from "./components/icons/IconCases.vue";

import LogoComponent from "./components/LogoComponent.vue";
import LinksComponent from "./components/LinksComponent.vue";
import NavComponent from "./components/NavComponent.vue";
</script>

<template>
  <div
    class="flex flex-col justify-between min-h-screen max-w-screen-xl items-center p-4 overflow-hidden"
  >
    <!-- border-2 border-fuchsia-400 -->
    <header class="flex flex-row justify-start w-[100%]">
      <div class="flex-1 w-64"><LogoComponent /></div>

      <div class="flex-1 hidden md:block"><LinksComponent /></div>

      <!--  <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div> -->
    </header>

    <nav
      class="nav-items fixed flex flex-col right-0 items-center justify-center min-h-screen z-50"
    >
      <nav-component path="/">
        <template #icon> <IconHome /> </template
      ></nav-component>

      <nav-component path="/about"
        ><template #icon><IconPerson /></template
      ></nav-component>

      <nav-component path="/cases"
        ><template #icon><IconCases /></template
      ></nav-component>
    </nav>

    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <div :key="route.name">
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>

    <footer class="p-5">
      <LinksComponent class="md:hidden" />
    </footer>
  </div>
</template>

<style scoped>
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
