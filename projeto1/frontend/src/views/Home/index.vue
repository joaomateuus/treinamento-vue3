<template>
  <CustomHeader 
    @create-account="handleAccountCreate"
    @login="handleLogin"
  />
  <Contact />
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">Feedbacker ₢ 2021</p>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import CustomHeader from './CustomHeader.vue';
import Contact from './Contact.vue';
import useModal from '../../hooks/useModal.js';

export default {
  components: { CustomHeader, Contact },
  //função que manipulamos tudo do script no vue3
  setup(){
    const router = useRouter();
    const modal = useModal();
    //hook do vue para pegar o token do login
    onMounted(()=>{
      const token = window.localStorage.getItem('token');
      if(token) {
        router.push({ name:'Feedback' });
      }
    })
    function handleLogin(){
      modal.open({
        component: 'ModalLogin'
      })

    }
    function handleAccountCreate(){

    }
    //temos que criar esse return no vue3
    return{
      handleLogin,
      handleAccountCreate
    }
  }
}
</script>

<style>

</style>