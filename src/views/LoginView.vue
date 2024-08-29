<script setup lang="js">
import {ref} from "vue";
import { useRouter, useRoute } from 'vue-router'
import {useSesionStore} from "@/stores/sesion";
import 'animate.css';


const sesionStore = useSesionStore()


const incorrectUser = ref(false)
const router = useRouter()
const route = useRoute()

const usuario = ref({
  nom_usuario: "",
  password: "",
})


const handleSubmit = () => {
  const promesa = window.electronAPI.confirm_usuario(usuario._rawValue)

  promesa.then((value) =>{
    if(value.length !== 0){
      console.log(value[0])
      sesionStore.signIn(value[0])
      console.log(value[0].id_rol)

      if(value[0].id_rol === 1){
        router.push({ path: '/home' });
      }else{
        router.push({ path: '/admin' });
      }

    }else{
      console.log("No existe ese usuario")
      incorrectUser.value = true
      setTimeout(()=> incorrectUser.value = false , 4000)
    }

  })
}

</script>

<template>
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
  <div class="bg-no-repeat bg-cover bg-center relative background"><div class="absolute inset-0 z-0"></div>
    <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
      <div class="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
        <div class="self-start hidden lg:flex flex-col  text-white">
          <img src="" class="mb-3">
          <h1 class="mb-3 font-bold text-5xl">Hi Welcome to MotorCicles.inc </h1>
          <p class="pr-3">Make your road dream come true.</p>
        </div>
      </div>
      <div class="flex justify-center self-center  z-10 mr-5">
        <form @submit.prevent="handleSubmit()" class="p-12 bg-white mx-auto rounded-2xl w-100 ">
          <div class="mb-4">
            <h3 class="font-semibold text-2xl text-gray-800">Sign In </h3>
            <p class="text-gray-500">Please sign in to your account.</p>
          </div>
          <div class="space-y-5">
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700 tracking-wide">Username</label>
              <input type="text"  placeholder="Enter your username" class="input input-bordered w-full focus:outline-none focus:border-green-400" required v-model="usuario.nom_usuario"/>
            </div>
            <div class="space-y-2">
              <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input type="password" placeholder="Enter your password" class="input input-bordered w-full focus:outline-none focus:border-green-400" required v-model="usuario.password"/>
            </div>
            <div>
<!--              <div :class="{ invisible: !incorrectUser, 'text-red-500':true, 'animate__fadeOut':true}">Credenciales incorrectos</div>-->
              <div :class="{ invisible: !incorrectUser, 'text-red-500':true}">Credenciales incorrectos</div>

            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded">
                <label for="remember_me" class="ml-2 block text-sm text-gray-800">
                  Remember me
                </label>
              </div>
              <div class="text-sm">
                <a href="#" class="text-gray-600 hover:text-blue-600">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button type="submit" class="w-full flex justify-center bg-green-600  hover:bg-green-500 text-gray-100 p-3 rounded-md tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                Login
              </button>
              <button class="w-full flex justify-center bg-blue-700  hover:bg-blue-500 text-gray-100 p-3 rounded-md tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                Sign up
              </button>
            </div>
          </div>
          <div class="pt-5 text-center text-gray-400 text-xs">
              <span>
                Copyright © 2024
              </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

.background{
  background-image: url('src/assets/images/backiee-286271-landscape.jpg');
  background-size: cover;
}

.invisible{
  visibility: hidden;
}

</style>

<!--<div class="text-center background">-->
<!--<h1 class="text-5xl font-bold">MotorBikes.inc</h1>-->
<!--</div>-->
<!--<div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">-->
<!--<div class="text-center">-->
<!--  <h1 class="text-5xl font-bold">MotorBikes.inc</h1>-->
<!--</div>-->
<!--<form class="card-body">-->
<!--  <div class="form-control">-->
<!--    <label class="label">-->
<!--      <span class="label-text">Email</span>-->
<!--    </label>-->
<!--    <input type="email" placeholder="email" class="input input-bordered" required />-->
<!--  </div>-->
<!--  <div class="form-control">-->
<!--    <label class="label">-->
<!--      <span class="label-text">Password</span>-->
<!--    </label>-->
<!--    <input type="password" placeholder="password" class="input input-bordered" required />-->
<!--    <label class="label">-->
<!--      <a href="#" class="label-text-alt link link-hover">Forgot password?</a>-->
<!--    </label>-->
<!--  </div>-->
<!--  <div class="form-control mt-6">-->
<!--    <button class="btn btn-primary">Login</button>-->
<!--  </div>-->
<!--</form>-->
<!--</div>-->