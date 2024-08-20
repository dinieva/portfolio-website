<script setup lang="ts">
import gsap from "gsap";
import PortfolioItemComponent from "../components/PortfolioItemComponent.vue";
import { usePortfolioStore } from "../stores/portfolio";

const portfolioStore = usePortfolioStore();

const beforeEnter = (el: any) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(60px)";
};

const enter = (el: any) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    delay: el.dataset.index * 0.2,
    duration: 1,
  });
};
</script>

<template>
  <h1
    class="portfolio-title text-3xl font-bold text-center underline underline-offset-[22px] pb-4 mt-10 animate-show duration-700"
  >
    Портфолио
  </h1>

  <transition-group
    appear
    @before-enter="beforeEnter"
    @enter="enter"
    name="list"
    tag="div"
    class="min-h-max flex items-stretch justify-between flex-wrap gap-5 p-10"
  >
    <PortfolioItemComponent
      v-for="(item, i) in portfolioStore.portfolioItems"
      :portfolioItem="item"
      :key="i"
      :data-index="i"
    />
  </transition-group>
</template>

<style>
.portfolio-title {
  text-decoration: underline 0.5px;
}
</style>