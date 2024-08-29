<script setup lang="ts">

import UsuariosTabla from "@/components/usuarios/UsuariosTabla.vue";
import AdminLayout from "@/layout/AdminLayout.vue";
import ClientesTabla from "@/components/reportes/ClientesTabla.vue";
import MotosResumenTabla from "@/components/reportes/MotosResumenTabla.vue";
</script>

<template>
  <AdminLayout>
    <div class="p-4 h-full">
      <div class="h-full">
        <strong>Motos</strong>
        <MotosResumenTabla/>
      </div>
    </div>
  </AdminLayout>
</template>

<style scoped>

</style>