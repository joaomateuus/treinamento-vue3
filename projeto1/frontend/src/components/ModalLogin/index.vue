<template>
  <div class="flex justify-between">
    <h1 class="text-4xl font-black text-gray-800">Entre na sua conta </h1>
    <button class="text-4xl text-gray-600 focus:outline-none" @click="close">&times;</button>
  </div>
  <div class="mt-16">
    <form @submit.prevent="handleSubmit">
      <label class="block">
        <span class="text-lg font-medium text-gray-800">E-mail</span>
          <input type="email" v-model="state.email.value" :class="{ 'border-brand-danger': !!state.email.errorMessage }"
          class="block w-full px-4 py-3 mt-1 text-large bg-gray-100 border-2 border-transparent rounded focus:outline-none"
          placeholder="joaomateus@gmail.com">
        <span v-if="!!state.email.errorMessage" class="block font-medium text-brand-danger">
          {{ state.email.errorMessage }}
        </span>
      </label>
      <label class="block">
        <span class="text-lg font-medium text-gray-800">Senha</span>
        <input type="password" v-model="state.password.value" class="block w-full px-4 py-3 mt-1 text-large bg-gray-100 border-2 border-transparent rounded focus:outline-none"
        :class="{
          'border-brand-danger': !!state.password.errorMessage
        }"
        placeholder="****">
        <span v-if="!!state.password.errorMessage" class="block font-medium text-brand-danger">
          {{ state.password.errorMessage }}
        </span>
      </label>

      <button :disabled="state.isLoading" :class="{ 'opacity-50': state.isLoading }" type="submit" 
      class="px-16 py-3 mt-12 ml-20 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline-none transition-all duration-150">
        Entrar
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue';
import useModal from '../../hooks/useModal';
import { useField } from 'vee-validate';
import { validateEmptyAndLength3 } from '../../utils/validators';

export default {
  name:'ModalLogin',
  setup() {
    const { value: emailValue, errorMessage: emailErrorMessage } = useField('email',);
    const { value: passwordValue, errorMessage: passwordErrorMessage } = useField('password', validateEmptyAndLength3);
    const modal = useModal();
    
    const state = reactive({
      hasErrors: false,
      isLoading: false,
      email: {
        value: emailValue,
        errorMessage: emailErrorMessage
      },
      password:{
        value: passwordValue,
        errorMessage: passwordErrorMessage,
      }
    })

    function handleSubmit(){

    }
  
    return {
      state,
      close: modal.close,
      handleSubmit,
    }
  
  }

}
</script>

<style />

