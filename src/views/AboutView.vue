<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import { vIntersectionObserver } from "@vueuse/components";
import ModalCertificates from "../components/ModalCertificates.vue";
import ContactComponent from "../components/ContactComponent.vue";
import { useSkillsIconsStore } from "../stores/skills";

const skillsIcons = useSkillsIconsStore();
const certificateUrl = ref<string>("");
const openModal: Ref<boolean> = ref(false);
const showCertificates = (path: string, param: boolean) => {
  certificateUrl.value = path;
  toggleModal(param);
};
const toggleModal = (param: boolean) => (openModal.value = param);

const root = ref(null);
const rootOne = ref(null);
const rootCertificates = ref(null);
const isVisible = ref(false);
const rootForm = ref(null);

function onIntersectionObserver([
  { isIntersecting },
]: IntersectionObserverEntry[]) {
  isVisible.value = isIntersecting;

  if (isVisible.value && rootOne) {
    for (let i = 0; i < rootOne.value.childNodes.length; i++) {
      rootOne.value.childNodes[i].classList.add("animate");
    }
  }
  if (isVisible.value && root) {
    for (let i = 0; i < root.value.childNodes.length; i++) {
      root.value.childNodes[i].classList.add("animate");
    }
  }
}
function onIntersectionObserver2([
  { isIntersecting },
]: IntersectionObserverEntry[]) {
  isVisible.value = isIntersecting;
  if (isIntersecting) {
    for (let i = 0; i < rootCertificates.value.childNodes.length; i++) {
      rootCertificates.value.childNodes[i].classList.add("square");
    }
  }
}
function onIntersectionObserver3([
  { isIntersecting },
]: IntersectionObserverEntry[]) {
  isVisible.value = isIntersecting;
  if (isIntersecting) {
    rootForm.value.classList.add("animate-form");
  }
}
</script>


<template>
  <ModalCertificates
    :modalContent="certificateUrl"
    :open="openModal"
    @closeModal="toggleModal"
  />

  <div
    class="flex flex-col justify-center items-center gap-10 my-8 xs:gap-0"
    v-if="!openModal"
  >
    <h1
      class="text-3xl font-bold text-center border-b pb-4 mt-10 animate-show duration-700"
    >
      Обо мне
    </h1>
    <div
      class="flex flex-col justify-center gap-5 items-center w-2/3 py-9"
      ref="root"
      v-intersection-observer="[onIntersectionObserver, { root }]"
    >
      <p
        class="observe-right text-left text-xl leading-loose sm:text-justify smPhone:text-center"
      >
        Мне нравится создавать привлекательные внешне и удобные для
        пользователей интерфейсы веб-сайтов и приложений. Я стремлюсь к
        написанию чистого кода с понятной и удобной структурой сайта .
      </p>
    </div>

    <div
      class="flex flex-col justify-center gap-5 items-center w-2/3 py-9"
      ref="rootOne"
      v-intersection-observer="[onIntersectionObserver, { root }]"
    >
      <h3 class="observe-left text-3xl font-bold mt-2 text-center">
        Мой путь в веб-разработке
      </h3>

      <p
        class="observe-left text-left text-xl leading-loose sm:text-justify smPhone:text-center"
      >
        C фронтенд разработкой я познакомилась в 2021 году. С тех пор приходится
        много учиться, следить за трендами и уметь перестраиваться. Я испытываю
        огромную радость, когда я узнаю что-то новое, осваиваю инструменты,
        технологии и применяю их в разработке,. Мой путь обучения лежит через
        самообразование, онлайн-курсы, онлайн-интенсивы.
      </p>
    </div>
    <div class="flex flex-col justify-center gap-5 transition">
      <div class="flex1 grid gap-5 grid-cols-1 lg:grid-cols-2">
        <div
          class="flex flex-col gap-5 p-10 border-transparent w-[100%] lg:col-span-2"
        >
          <div
            class="grid lg:grid-cols-3 lg:gap-5 place-items-center grid-cols-1 gap-5 xs:gap-10"
            ref="rootCertificates"
            v-intersection-observer="[onIntersectionObserver2, { root }]"
          >
            <img
              src="/assets/certificates/glo.png"
              alt="certificates-glo"
              class="certificate-item max-w-44 max-h-48 cursor-pointer justify-self-center rotate-90 xs:rotate-0 transition ease-in-out duration-700 delay-150 hover:-translate-y-1 hover:scale-110"
              @click="
                showCertificates(
                  '/portfolio-website/assets/certificates/glo.png',
                  true
                )
              "
            />
            <img
              src="/assets/certificates/itlogia.jpg"
              alt="itlogia"
              class="certificate-item max-w-44 max-h-48 cursor-pointer self-auto justify-self-center transition ease-in-out duration-700 delay-150 hover:-translate-y-1 hover:scale-110"
              @click="
                showCertificates(
                  '/portfolio-website/assets/certificates/itlogia.jpg',
                  true
                )
              "
            />
            <img
              src="/assets/certificates/sololearn.jpg"
              alt="sololearn"
              class="certificate-item max-w-44 max-h-48 cursor-pointe justify-self-center transition ease-in-out duration-700 delay-150 hover:-translate-y-1 hover:scale-110"
              @click="
                showCertificates(
                  '/portfolio-website/assets/certificates/sololearn.jpg',
                  true
                )
              "
            />
            <img
              src="/assets/certificates/fintech.webp"
              alt="intech"
              class="certificate-item max-w-44 max-h-48 cursor-pointe justify-self-center transition ease-in-out duration-700 delay-150 hover:-translate-y-1 hover:scale-110"
              @click="
                showCertificates(
                  '/portfolio-website/assets/certificates/fintech.webp',
                  true
                )
              "
            />
          </div>
        </div>
        <div
          class="flex flex-col justify-center gap-5 p-10 lg:border-r-4 lg:border-blue-400 py-6"
        >
          <h3 class="text-3xl font-bold text-center">Моя деятельность</h3>
          <p class="text-center">Практикую веб-разработку на пет проектах.</p>
          <button
            class="outline outline-2 animate-pulse outline-offset-2 p-2 outline-indigo-800 rounded-lg bg-fuchsia-400"
          >
            <router-link to="/cases">Портфолио</router-link>
          </button>
        </div>
        <div class="flex flex-col gap-5 p-10 py-6">
          <h3 class="text-3xl font-bold text-center">Образование</h3>
          <div class="text-center">
            <p>2015г</p>
            <p>Казанский (Приволжский) федеральный университет, Казань</p>
            <p>Мировая Экономика, ВЭД</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center gap-5 items-center w-screen py-9">
      <h1 class="text-3xl font-bold text-center lg:my-10 observe">Навыки</h1>
      <div
        class="flex space-x-16 overflow-hidden group items-wrap max-w-5xl scroll-pl-6 snap-x relative w-[100%] lg:p-8 p-4 square"
      >
        <div
          class="flex flex-row lg:gap-5 gap-2 animate-ticker-scroll space-x-16 group-hover:paused"
        >
          <div
            class="w-24 h-24 max-w-none p-5 bg-special flex flex-col items-center justify-center grow-0 shrink-0 basis-auto rounded-md hover:scale-105 hover:shadow-2xl"
            v-for="(icon, idx) in skillsIcons.skillsIcons"
            :key="idx"
          >
            <img class="object-contain" :src="icon.icon" :alt="icon.title" />
            <p class="mt-2">{{ icon.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="form-wrapper" ref="rootForm">
      <contact-component v-intersection-observer="onIntersectionObserver3" />
    </div>
  </div>
</template>



<style scoped>
.items-wrap:before,
.items-wrap:after {
  content: "";
  height: 100%;
  top: 0;
  width: 5%;
  position: absolute;
  z-index: 1;
  pointer-events: none;
}
.items-wrap:before {
  left: 0;
  background: linear-gradient(
    90deg,
    rgba(240, 171, 252, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
.items-wrap:after {
  right: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(240, 171, 252, 0.5) 100%
  );
}

.observe-left,
.observe-right {
  width: 100%;
  transition: transform 0.5s ease-out;
}
.observe-left {
  transform-origin: left;
  transform: translateX(-100vw);
}
.observe-right {
  transform-origin: right;
  transform: translateX(100vw);
}

.observe-right.animate,
.observe-left.animate {
  transform: translateX(0);
}

.form-wrapper {
  transform: scale(0.25);
  transition: transform 1s ease-out;
}
.form-wrapper.animate-form {
  transform: scale(1);
}

.certificate-item.square {
  animation-name: wipe-enter;
  animation-duration: 1s;
  animation-iteration-count: forwards;
}

@keyframes wipe-enter {
  0% {
    transform: scale(0, 0.025);
  }
  50% {
    transform: scale(1, 0.025);
  }
}
</style>
