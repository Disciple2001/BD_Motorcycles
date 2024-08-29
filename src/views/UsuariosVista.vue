<script setup lang="ts">
import UsuariosTabla from "@/components/usuarios/UsuariosTabla.vue";
import AdminLayout from "@/layout/AdminLayout.vue";
</script>

<template>
  <AdminLayout>
    <div class="p-4 h-full">
      <div class="h-full">
        <strong>Usuarios </strong>
        <UsuariosTabla/>
      </div>
    </div>
  </AdminLayout>
</template>

<style scoped>

</style>