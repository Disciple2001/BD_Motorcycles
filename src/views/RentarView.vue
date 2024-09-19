<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import AsideMenu from "@/components/AdminAsideMenu.vue";
import HomeLayout from "@/layout/HomeLayout.vue";
import {useSesionStore} from "@/stores/sesion";
import AdminLayout from "@/layout/AdminLayout.vue";
import MotosTabla from "@/components/motos/MotosTabla.vue";
import ContratosTabla from "@/components/contratos/ContratosTabla.vue";
import ContratosDeClienteTabla from "@/components/contratos/ContratosDeClienteTabla.vue";
import ContratosClientesModal from "@/components/contratos/ContratosClientesModal.vue";
import {ref} from "vue";


const sesionStore = useSesionStore()

const modalCompleted = ref( false)
const handleEvent = () => {
  modalCompleted.value = !modalCompleted.value;
}

</script>

<template>
  <HomeLayout>
    <div class="p-4 h-full">
      <div class="h-full">
        <div class="flex justify-between mb-2">
          <strong>Contratos</strong>
          <ContratosClientesModal @contract-created="handleEvent()"/>
        </div>
        <ContratosDeClienteTabla :modalCompleted/>
      </div>
    </div>
  </HomeLayout>
</template>

<style scoped>

</style>