<script setup lang="ts">

import UsuariosTabla from "@/components/usuarios/UsuariosTabla.vue";
import AdminLayout from "@/layout/AdminLayout.vue";
import ClientesTabla from "@/components/reportes/ClientesTabla.vue";
import ContratosResumenTabla from "@/components/reportes/ContratosResumenTabla.vue";
</script>

<template>
  <AdminLayout>
    <div class="p-4 h-full">
      <div class="h-full">
        <strong>Contratosii</strong>
        <ContratosResumenTabla/>
      </div>
    </div>
  </AdminLayout>
</template>

<style scoped>

</style>