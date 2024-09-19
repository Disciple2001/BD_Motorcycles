<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import AsideMenu from "@/components/AdminAsideMenu.vue";
import HomeLayout from "@/layout/HomeLayout.vue";
import {useSesionStore} from "@/stores/sesion";


const sesionStore = useSesionStore()
</script>

<template>
  <HomeLayout>
      <h1 class="text-xl">Bienvenido usuario {{ sesionStore.logedUser.nom_usuario }}</h1>

  </HomeLayout>
</template>
