<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import AsideMenu from "@/components/AdminAsideMenu.vue";
import HomeLayout from "@/layout/HomeLayout.vue";
import {useSesionStore} from "@/stores/sesion";
import AdminLayout from "@/layout/AdminLayout.vue";
import MotosTabla from "@/components/motos/MotosTabla.vue";
import ContratosTabla from "@/components/contratos/ContratosTabla.vue";


const sesionStore = useSesionStore()
</script>

<template>
  <AdminLayout>
    <div class="p-4 h-full">
      <div class="h-full">
        <strong>Contratos</strong>
        <ContratosTabla/>
      </div>
    </div>
  </AdminLayout>
</template>
