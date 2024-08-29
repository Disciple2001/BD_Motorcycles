<script setup lang="ts">
import ModelosTabla from "@/components/modelos/ModelosTabla.vue";
import AdminLayout from "@/layout/AdminLayout.vue";
</script>

<template>
  <AdminLayout>
    <div class="p-4 h-full">
      <div class="h-full">
        <strong>Modelos </strong>
        <ModelosTabla/>
      </div>
    </div>
  </AdminLayout>
</template>

<style scoped>

</style>