<script setup lang="ts">
import PortfolioItemComponent from "../components/PortfolioItemComponent.vue";
import { usePortfolioStore } from "../stores/portfolio";

const portfolioStore = usePortfolioStore();
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold text-center border-b pb-4 mt-10">
      Портфолио
    </h1>
    <div
      class="min-h-max flex items-stretch justify-between flex-wrap gap-5 p-10"
    >
      <PortfolioItemComponent
        v-for="item in portfolioStore.portfolioItems"
        :portfolioItem="item"
        :key="item"
      />
    </div>
  </div>
</template>

<style>
</style>