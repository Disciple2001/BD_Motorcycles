<script setup lang="ts">

</script>

<template>
  <ul class="menu">
    <li>
      <details>
        <summary>Menu</summary>
        <ul>
          <li><RouterLink to="/contratos">Contratos</RouterLink></li>
          <li><RouterLink to="/usuarios">Usuarios</RouterLink></li>
          <li><RouterLink to="/marcas">Marcas</RouterLink></li>
          <li><RouterLink to="/modelos">Modelos</RouterLink></li>
          <li><RouterLink to="/motos">Motos</RouterLink></li>
          <li><RouterLink to="/municipios">Municipios</RouterLink></li>
          <li><RouterLink to="/situacion">Situacion</RouterLink></li>
        </ul>
      </details>
    </li>
    <li><RouterLink to="/reportes">Reportes</RouterLink></li>
    <li>
      <details>
        <summary>Options</summary>
        <ul>
          <li><a>Screen</a></li>
          <li><a>Audio</a></li>
        </ul>
      </details>
    </li>
  </ul>
</template>

<style scoped>

</style>