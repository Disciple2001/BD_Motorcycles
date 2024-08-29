<script setup lang="ts">
import MotosTabla from "@/components/motos/MotosTabla.vue";
import AdminLayout from "@/layout/AdminLayout.vue";
</script>

<template>
  <AdminLayout>
    <div class="p-4 h-full">
      <div class="h-full">
        <strong>Motos </strong>
        <MotosTabla/>
      </div>
    </div>
  </AdminLayout>
</template>

<style scoped>

</style>