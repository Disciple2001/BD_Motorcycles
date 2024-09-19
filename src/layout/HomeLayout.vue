<script setup lang="ts">

import NavBar from "@/components/NavBar.vue";
import ClienteAsideMenu from "@/components/ClienteAsideMenu.vue";
</script>

<template>
  <div class="flex flex-col h-lvh">
    <header class="flex">
      <NavBar/>
    </header>
    <aside class="flex h-full bg-gray-800">
      <div class="bg-base-100 w-48 ">
        <ClienteAsideMenu/>
      </div>
      <div class="w-full p-8 homeBackground">
        <slot/>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.homeBackground{
  background-image: url("src/assets/images/clientHomeImage.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}

</style>