<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
const props = defineProps(['title', 'redireccionar'])

const handleClick = () => {
  router.push(`/${props.redireccionar}`)
}

</script>

<template>
  <button @click="handleClick()" type="button" class="mb-1 bg-gray-900 w-full rounded-md text-center text-xl p-3">{{props.title}}</button>
</template>

<style scoped>

</style>