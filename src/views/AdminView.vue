<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import AsideMenu from "@/components/AdminAsideMenu.vue";
import HomeLayout from "@/layout/HomeLayout.vue";
import {useSesionStore} from "@/stores/sesion";
import AdminLayout from "@/layout/AdminLayout.vue";


const sesionStore = useSesionStore()
</script>

<template>
  <AdminLayout>
      <h1 class="text-black text-xl">Administrador {{ sesionStore.logedUser.nom_usuario }}</h1>
  </AdminLayout>
</template>
