<template>
  <div
    v-if="open"
    class="grid grid-cols-1 place-items-center content-center bg-gray-800 bg-opacity-60 w-screen h-screen"
    @click="$emit('closeModal', false)"
  >
    <div
      class="w-[80vw] h-[80vh] m-auto bg-contain bg-no-repeat bg-center opacity-100 animate-wiggle"
      :style="{ 'background-image': 'url(' + modalContent + ')' }"
    ></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modalContent: string;
  open: boolean;
}>();

defineEmits<{
  (e: "closeModal", param: boolean): void;
}>();
</script>

<style scoped>
</style>