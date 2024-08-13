<template>
  <div class="flex flex-col justify-center gap-5 items-center w-screen">
    <h1 class="text-3xl font-bold text-center pb-4 mt-10">
      Остались вопросы ?
    </h1>

    <form
      action="#"
      method="POST"
      enctype="text/plain"
      class="flex flex-col items-center w-6/12 text-gray-600 outline-indigo-800 smPhone:w-full smPhone:p-10"
      @submit.prevent="sendMessage($event)"
    >
      <div
        class="flex justify-center w-full gap-2 smPhone:w-full smPhone:flex-wrap"
      >
        <input
          type="text"
          name="name"
          v-model.trim="name"
          @input="validateName(name)"
          placeholder="Имя"
          class="mt-2.5 flex1 p-6 border rounded-xl border-fuchsia-500 outline-0 w-full bg-[#312e81] text-white-200 shadow shadow-fuchsia-500"
          :class="{ error: notValidName }"
          required
        />
        <input
          type="email"
          name="email"
          v-model.trim="email"
          @input="validateEmail(email)"
          placeholder="Эл.адрес"
          class="mt-2.5 flex1 p-6 border rounded-xl border-fuchsia-500 outline-0 w-full bg-[#312e81] text-white-200 shadow shadow-fuchsia-500"
          :class="{ error: notValidEmail }"
          required
        />
      </div>
      <div
        class="flex justify-center w-full gap-2 smPhone:w-full smPhone:flex-wrap"
      >
        <input
          type="tel"
          name="phoneNumber"
          v-model.trim="phoneNumber"
          placeholder="Тел."
          @input="validatePhoneNumber(phoneNumber)"
          class="mt-2.5 mr-2.5 xs:mr-0 flex1 p-6 border rounded-xl border-fuchsia-500 outline-0 w-full bg-[#312e81] text-white-200 shadow shadow-fuchsia-500"
          :class="{ error: notValidPhone }"
          required
        />
        <input
          type="text"
          name="theme"
          v-model.trim="theme"
          placeholder="Тема"
          class="mt-2.5 flex1 p-6 border rounded-xl border-fuchsia-500 outline-0 w-full bg-[#312e81] text-white-200 shadow shadow-fuchsia-500"
          required
        />
      </div>

      <textarea
        v-model.trim="message"
        name="message"
        cols="30"
        rows="10"
        minlength="1"
        class="p-6 border rounded-xl border-fuchsia-500 outline-0 mt-2.5 bg-[#312e81] text-white-200 w-full shadow shadow-fuchsia-500"
        placeholder="Сообщение"
        required
      ></textarea>
      <button
        type="submit"
        class="mt-8 outline outline-2 outline-offset-2 py-2.5 px-6 outline-indigo-800 bg-fuchsia-400 rounded-xl text-white-200 text-xl shadow-2xl hover:shadow-shadow"
        :disabled="
          notValidName ||
          notValidEmail ||
          message.length == 0 ||
          !theme ||
          notValidPhone
        "
      >
        Отправить
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import axios from "axios";
const name: Ref<string> = ref("");
const email: Ref<string> = ref("");
const phoneNumber: Ref<string> = ref("");
const theme: Ref<string> = ref("");
const message: Ref<string> = ref("");

const notValidName: Ref<boolean> = ref(false);
const notValidEmail: Ref<boolean> = ref(false);
const notValidPhone: Ref<boolean> = ref(false);

//  валидация имени
const validateName = (name: string) => {
  const pattern = /^[a-zа-яё\s]+$/iu;
  if (pattern.test(name)) {
    notValidName.value = false;
    return true;
  } else {
    notValidName.value = true;
    return false;
  }
};
// валидация эл.почты
const validateEmail = (email: string) => {
  const pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (pattern.test(email)) {
    notValidEmail.value = false;
    return true;
  } else {
    notValidEmail.value = true;
    return false;
  }
};
// валидация номера телефона
const validatePhoneNumber = (number: string) => {
  phoneNumber.value = number.replace(/\D/g, "").replace(/^[0-9]/, "+7");
  const pattern = /^((\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;
  if (pattern.test(number)) {
    notValidPhone.value = false;
    console.log("Phone number is valid");
    return true;
  } else {
    notValidPhone.value = true;
    console.log("Phone number is not valid");
    return false;
  }
};
// сброс полей формы
const formReset = () => {
  name.value = "";
  email.value = "";
  phoneNumber.value = "";
  theme.value = "";
  message.value = "";
};
// отправка формы в телеграмм бот
const apiKey = import.meta.env.VITE_API_KEY_TELEGRAMTOKEN;
/* interface $elements {
        name: HTMLInputElement;
        email: HTMLInputElement;
        phoneNumber:HTMLInputElement;
        theme: HTMLInputElement;
        message: HTMLInputElement;
    } */
const sendMessage = async (event: Event) => {
  const { name, email, phoneNumber, theme, message } = Object.fromEntries(
    new FormData(event.target).entries()
  );
  const text = `Имя: ${name}, Номер: ${phoneNumber}, Эл.адрес: ${email}, Тема: ${theme}, Текст сообщения: ${message}`;

  try {
    let response = await axios.post(
      `https://api.telegram.org/bot${apiKey}/sendMessage?chat_id=-904269586&parse_mode=html&text=${text}`,
      text
    );
    console.log("данные формы отправлены ", response);
  } catch (err) {
    console.log("Сообщение не было отправлено. Причина ошибки: ", err.message);
  } finally {
    formReset();
  }
};
</script>

<style scoped>
.error {
  border: 1px solid red;
  box-shadow: 2px 2px 2px red;
}
.contact-item {
  background: linear-gradient(
    90deg,
    rgba(240, 171, 252, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
.contact-item2 {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(240, 171, 252, 0.5) 100%
  );
}

button:disabled,
button[disabled] {
  opacity: 0.4;
}
</style>