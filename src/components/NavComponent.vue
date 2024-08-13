<template>
  <button
    class="item mt-8 flex relative p-1.5 cursor-pointer transition duration-700 ease-in-out active:bg-fuchsia-600 focus:ring-violet-300 animate-pulse hover:shadow-lg hover:shadow-blue-400"
  >
    <i class="w-42px h-42px flex">
      <RouterLink
        :to="`${path}`"
        class="hover:scale-125 animate-pulse-bg-once from-bg-indigo-300 to-bg-fuchsia-500"
        ><slot name="icon"></slot
      ></RouterLink>
    </i>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  path: string;
}>();
</script>

<style scoped>
</style>