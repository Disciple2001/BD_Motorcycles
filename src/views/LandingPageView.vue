<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import AsideMenu from "@/components/AdminAsideMenu.vue";
import HomeLayout from "@/layout/HomeLayout.vue";
import {useSesionStore} from "@/stores/sesion";


const sesionStore = useSesionStore()
</script>

<template>
  <HomeLayout>
      <h1>Client</h1>
      {{ sesionStore.isLoged }}
      {{ sesionStore.logedUser.nom_usuario }}
      {{ sesionStore.logedUser.id_usuario }}
  </HomeLayout>
</template>
