<template>
  <div
    class="card mt-5 bg-special1 max-w-72 m-auto text-center shadow-lg shadow-shadow p-4 rounded-md self-stretch flex flex-col justify-between items-center min-h-96 hover:scale-105 hover:-translate-y-3 transform-gpu transition duration-300 ease"
  >
    <div class="relative">
      <img
        :src="portfolioItem.imgPath"
        alt="site"
        class="rounded-md block object-contain block h-32"
      />
      <button
        class="group/item absolute top-0 left-0 bg-special1 bg-opacity-0 rounded-md w-full h-full hover:bg-opacity-70"
      >
        <a
          :href="portfolioItem.link"
          target="_blank"
          class="text-center inline-block group/edit invisible group-hover/item:visible"
          ><svg
            fill="#ffffff"
            width="22px"
            height="22px"
            viewBox="0 0 14 14"
            role="img"
            focusable="false"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            class="hover:scale-125"
          >
            <path
              style="fill-rule: evenodd"
              d="M 13,6.9999997 C 11.885345,4.8195117 9.6169996,3.3267484 7,3.3267484 c -2.6169992,0 -4.885345,1.4927633 -5.9999999,3.6732513 C 2.114655,9.1804887 4.3830008,10.673252 7,10.673252 c 2.6169996,0 4.885345,-1.4927633 6,-3.6732523 z m -6,2.448835 c 1.3524539,0 2.4488345,-1.096381 2.4488345,-2.448835 0,-1.352454 -1.0963806,-2.4488341 -2.4488345,-2.4488341 -1.3524539,0 -2.4488344,1.0963801 -2.4488344,2.4488341 0,1.352454 1.0963805,2.448835 2.4488344,2.448835 z m 0,-1.224417 c 0.6762273,0 1.2244172,-0.54819 1.2244172,-1.224418 0,-0.676227 -0.5481899,-1.224417 -1.2244172,-1.224417 -0.6762269,0 -1.2244172,0.54819 -1.2244172,1.224417 0,0.676228 0.5481903,1.224418 1.2244172,1.224418 z"
            />
          </svg>
        </a>
      </button>
    </div>

    <h1 class="mb-2">
      <b>"{{ portfolioItem.title }}"</b>
    </h1>
    <p class="title text-gray-400 mb-2 text-balance">
      {{ portfolioItem.descr }}
    </p>
    <i>{{ portfolioItem.technology }}</i>
  </div>
</template>

<script setup lang="ts">
defineProps({
  portfolioItem: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
</style>