<script setup lang="ts">
import { useSesionStore } from '@/stores/sesion'
// import NavBar from "@/components/NavBar.vue";
// import {RouterView} from "vue-router";
// import AsideMenu from "@/components/AdminAsideMenu.vue";
import LoginView from "@/views/LoginView.vue";

const store = useSesionStore()

</script>

<template>
<!--  <LoginView/>-->
  <RouterView />
<!--  <div class="flex flex-col h-lvh">-->
<!--    <header class="flex">-->
<!--      <NavBar/>-->
<!--    </header>-->
<!--    <aside class="flex h-full bg-gray-800">-->
<!--      <div class="bg-base-100 w-48 ">-->
<!--        <AsideMenu/>-->
<!--      </div>-->
<!--      <div class="w-full p-8">-->
<!--        <RouterView/>-->
<!--      </div>-->
<!--    </aside>-->
<!--  </div>-->
</template>

<style >

</style>
