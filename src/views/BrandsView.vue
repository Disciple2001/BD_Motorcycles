<script setup lang="ts">
import BrandsTable from "@/components/marcas/MarcasTabla.vue";
import AdminLayout from "@/layout/AdminLayout.vue";
</script>

<template>
  <AdminLayout>
    <div class="p-4 h-full">
      <div class="h-full">
        <strong>Brands </strong>
        <BrandsTable/>
      </div>
    </div>
  </AdminLayout>
</template>

<style scoped>

</style>