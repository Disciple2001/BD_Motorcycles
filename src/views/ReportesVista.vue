<script setup lang="ts">

import AdminLayout from "@/layout/AdminLayout.vue";
import ReporteCard from "@/components/ReporteCard.vue";
</script>

<template>
  <AdminLayout>
    <ReporteCard title="Resumen de Clientes" redireccionar="clientesResumen"/>
    <ReporteCard title="Resumen de Motos" redireccionar="motosResumen"/>
    <ReporteCard title="Resumen de Contratos" redireccionar="contratosResumen"/>
    <ReporteCard title="Situacion de las motos" redireccionar="situacionMotos"/>
    <ReporteCard title="Clientes incumplidores" redireccionar="clientesIncumplidores"/>
    <ReporteCard title="Resumen de marcas y models de motos" redireccionar="resumenMarcasModelos"/>
    <ReporteCard title="Resumen de marcas y models de motos por municipio" redireccionar="resumenMarcasModelosMunicipio"/>
    <ReporteCard title="Resumen de anual de beneficios" redireccionar="resumenAnual"/>
  </AdminLayout>
</template>

<style scoped>

</style>