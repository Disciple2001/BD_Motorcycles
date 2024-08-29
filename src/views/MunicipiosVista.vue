<script setup lang="ts">
import BrandsTable from "@/components/marcas/MarcasTabla.vue";
import MunicipiosTabla from "@/components/municipios/MunicipiosTabla.vue";
import AdminLayout from "@/layout/AdminLayout.vue";
</script>

<template>
  <AdminLayout>
    <div class="p-4 h-full">
      <div class="h-full">
        <strong>Municipios</strong>
        <MunicipiosTabla/>
      </div>
    </div>
  </AdminLayout>
</template>

<style scoped>

</style>