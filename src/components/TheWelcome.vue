<script setup lang="ts">
</script>

<template >
  <div class="justify-center items-center flex gap-10 flex-col lg:flex-row">
    <div class="flex-1 flex flex-col items-center justify-center">
      <div class="flex flex-col items-center justify-center text-center gap-6">
        <h1 class="text-3xl font-bold shadow-2xl font-sans hover:font-inter">
          Привет!
        </h1>
        <h2 class="text-3xl text-center">Mеня зовут Резеда.</h2>
        <h3
          class="text-3xl whitespace-pre-line relative text-fuchsia-600 md:before:absolute md:before:inset-0 md:before:bg-special md:before:animate-typewriter"
        >
          Добро пожаловать !
        </h3>
      </div>
      <div class="flex items-end justify-center"></div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <div
        class="bg-blue-300 rounded-full border-gray-300 lg:h-[500px] lg:w-[500px] hover:shadow-2xl relative h-[250px] w-[250px]"
      >
        <picture>
          <source
            srcset="../assets/photo-3.jpg"
            media="(min-width: 1000px)"
            class="object-cover shadow-3xl rounded-full absolute top-0 right-2 h-[100%] w-[100%]"
          />
          <img
            src="../assets/photo-1.jpg"
            alt="Картинка с размерами"
            class="object-cover shadow-3xl rounded-full absolute top-0 right-2 h-[100%] w-[100%]"
          />
        </picture>
      </div>
    </div>
  </div>
</template>
