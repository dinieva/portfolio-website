<template>
  <div class="flex flex-col justify-center gap-5 items-center w-screen py-6">
    <h1 class="text-3xl font-bold text-center pb-4 mt-10">Обратная связь</h1>
    <h3 class="text-center px-2.5 py-6">
      Если у вас возникли вопросы или есть предложение по сотрудничеству,
      пожалуйста, заполните форму ниже.
    </h3>

    <form
      action="#"
      method="POST"
      enctype="text/plain"
      class="flex flex-col items-center w-6/12 text-gray-600 outline-indigo-800 smPhone:w-full smPhone:p-10"
      @submit.prevent="sendMessage($event)"
    >
      <div
        class="flex justify-center w-full gap-2 smPhone:flex smPhone:flex-col smPhone:flex-wrap"
      >
        <div class="flex-1 mt-2.5 smPhone:w-full smPhone:flex-wrap">
          <input
            type="text"
            name="name"
            id="name"
            v-model.trim="name"
            @focus="inputClickCatcher($event)"
            @blur="toggleErrorSpan($event), validateName(name)"
            placeholder="Имя"
            class="p-6 border rounded-xl border-fuchsia-500 outline-0 w-full bg-[#312e81] text-white-200 shadow shadow-fuchsia-500"
            :class="{ error: notValidName }"
            aria-describedby="name-error"
            required
          />
          <span
            class="message-error"
            id="name-error"
            :class="{ show: notValidName }"
            aria-live="polite"
            >Мне бы хотелось узнать ваше имя. Разрешены символы латиницы,
            кириллицы,пробел
          </span>
        </div>
        <div class="flex-1 mt-2.5 smPhone:w-full smPhone:flex-wrap">
          <input
            type="email"
            name="email"
            v-model.trim="email"
            @focus="inputClickCatcher($event)"
            @blur="toggleErrorSpan($event), validateEmail(email)"
            placeholder="Эл.адрес"
            class="p-6 border rounded-xl border-fuchsia-500 outline-0 w-full bg-[#312e81] text-white-200 shadow shadow-fuchsia-500"
            :class="{ error: notValidEmail }"
            aria-describedby="email-error"
            required
          />
          <span
            class="message-error"
            id="email-error"
            :class="{ show: notValidEmail }"
            aria-live="polite"
            >Для получения ответа,пожалуйста,введите адрес электронной почты.
          </span>
        </div>
      </div>
      <div
        class="flex justify-center w-full gap-2 smPhone:flex smPhone:flex-col smPhone:flex-wrap"
      >
        <div class="flex-1 mt-2.5 smPhone:w-full smPhone:flex-wrap">
          <input
            type="tel"
            name="phoneNumber"
            v-model.trim="phoneNumber"
            placeholder="Тел."
            @focus="inputClickCatcher($event)"
            @blur="toggleErrorSpan($event), validatePhoneNumber(phoneNumber)"
            @input="validatePhoneNumber(phoneNumber)"
            class="mr-2.5 xs:mr-0 p-6 border rounded-xl border-fuchsia-500 outline-0 w-full bg-[#312e81] text-white-200 shadow shadow-fuchsia-500"
            :class="{ error: notValidPhone }"
            aria-describedby="phone-error"
            required
          />
          <span
            class="message-error"
            :class="{ show: notValidPhone }"
            id="phone-error"
            aria-live="polite"
            >Пожалуйста, проверьте номер телефона
          </span>
        </div>
        <div class="flex-1 mt-2.5 smPhone:w-full smPhone:flex-wrap">
          <input
            type="text"
            name="theme"
            v-model.trim="theme"
            @focus="inputClickCatcher($event)"
            @blur="toggleErrorSpan($event), validateTheme(theme)"
            placeholder="Тема"
            class="p-6 border rounded-xl border-fuchsia-500 outline-0 w-full bg-[#312e81] text-white-200 shadow shadow-fuchsia-500 smPhone:w-full smPhone:flex-wrap"
            required
            aria-describedby="theme-error"
          />
          <span
            class="message-error"
            :class="{ show: notValidTheme }"
            id="theme-error"
            aria-live="polite"
            >Вы не указали тему письма
          </span>
        </div>
      </div>

      <textarea
        v-model.trim="message"
        name="message"
        cols="30"
        rows="10"
        minlength="1"
        class="p-6 border rounded-xl border-fuchsia-500 outline-0 mt-2.5 bg-[#312e81] text-white-200 w-full shadow shadow-fuchsia-500"
        placeholder="Сообщение"
        @focus="inputClickCatcher($event)"
        @blur="toggleErrorSpan($event), validateMessage(message)"
        @input="validateMessage(message)"
        aria-describedby="message-error"
        required
      ></textarea>
      <span
        class="message-error"
        :class="{ show: notValidMessage }"
        id="message-error"
        aria-live="polite"
        >Боюсь, мне будет сложно вас понять. Вы уверены, что достаточно написали
        ?
      </span>

      <button
        type="submit"
        class="mt-8 outline outline-2 outline-offset-2 py-2.5 px-6 outline-indigo-800 bg-fuchsia-400 rounded-xl text-white-200 text-xl shadow-2xl hover:shadow-shadow"
        aria-describedby="message-success"
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
      <span
        class="message-success animate-pulse"
        :class="{ 'message-success__show': readyBtn }"
        id="message-success"
        aria-live="polite"
        >Спасибо за ваше обращение! Я скоро вам отвечу!
      </span>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import axios from "axios";
import { truncateSync } from "fs";
const name: Ref<string> = ref("");
const email: Ref<string> = ref("");
const phoneNumber: Ref<string> = ref("");
const theme: Ref<string> = ref("");
const message: Ref<string> = ref("");
const readyBtn: Ref<boolean> = ref(false);

const notValidName: Ref<boolean> = ref(false);
const notValidEmail: Ref<boolean> = ref(false);
const notValidPhone: Ref<boolean> = ref(false);
const notValidTheme: Ref<boolean> = ref(false);
const notValidMessage: Ref<boolean> = ref(false);

// пользовательское взаимодействие с инпутом при клике
const inputClickCatcher = (event: Event) => {
  event.target.classList.add("active");
};
//пояавление текста с ошибкой
function toggleErrorSpan(event: Event) {
  event.target.classList.remove("active");
}
//  валидация имени
const validateName = (name: string) => {
  const pattern = /^[a-zа-яё\s]+$/iu;
  return pattern.test(name)
    ? (notValidName.value = false)
    : (notValidName.value = true);
};
// валидация эл.почты
const validateEmail = (email: string) => {
  const pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return pattern.test(email)
    ? (notValidEmail.value = false)
    : (notValidEmail.value = true);
};
// валидация номера телефона
const validatePhoneNumber = (number: string) => {
  phoneNumber.value = number.replace(/\D/g, "").replace(/^[0-9]/, "+7");
  const pattern = /^((\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;
  if (pattern.test(number)) {
    notValidPhone.value = false;
    return true;
  } else {
    notValidPhone.value = true;
    return false;
  }
};
//валидация темы
const validateTheme = (theme: string) => {
  return theme.length > 0
    ? (notValidTheme.value = false)
    : (notValidTheme.value = true);
};
//валидация текстового поля
const validateMessage = (message: string) => {
  return message.length > 5
    ? (notValidMessage.value = false)
    : (notValidMessage.value = true);
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
    if (response.status == 200) {
      readyBtn.value = true;
      setTimeout(() => (readyBtn.value = false), 2000);
    }
  } catch (err) {
    console.log("Сообщение не было отправлено. Причина ошибки: ", err.message);
  } finally {
    formReset();
  }
};
</script>

<style scoped>
/* Для отображения span-элемента с ошибкой */
.message-error {
  display: none;
}
.show {
  display: block;
  color: #ffffff8c;
  text-align: center;
  padding: 10px;
  font-size: 14px;
  line-height: 22px;
}
.active {
  border: 1px solid rgba(238, 255, 0, 0.959);
  box-shadow: 2px 2px 2px rgb(123, 255, 0);
}
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
.message-success {
  display: none;
  font-style: italic;
  margin-top: 10px;
  text-align: center;
  color: #ffffff;
}
.message-success__show {
  display: block;
}
</style>