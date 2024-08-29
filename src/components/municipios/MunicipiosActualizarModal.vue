<script setup lang="js">
import {onMounted, ref} from "vue";
import Swal from 'sweetalert2'

const isUpdateModalOpen = ref(false)

const municipio = ref({
  nom_mun: "",
})

const prop = defineProps({
  id: 0
})



onMounted(()=>{
  const prom = window.electronAPI.get_municipio(prop.id)
  prom.then((value)=>{
    console.log(value)
    municipio.value.nom_mun = value[0].nom_mun

  })
  // console.log(marca)
})

const handleClick = () => {
  isUpdateModalOpen.value = true
  const prom = window.electronAPI.get_municipio(prop.id)

  prom.then((value)=>{
    console.log(value)
  })

}

const handleSubmit = () => {
  console.log("entro")
  const pro = window.electronAPI.update_municipio(prop.id, municipio._rawValue)

  pro.then((value) => {
    isUpdateModalOpen.value = false
    cleanModal()
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Municipio Actualizado Exitosamente",
      showConfirmButton: false,
      timer: 1500
    })
  })
}

const cleanModal = () => {
  municipio.value.nom_mun = ""
}


</script>

<template>
  <button class="btn btn-outline btn-info btn-xs modal-button" @click="handleClick()">detalles</button>

  <div class="modal" :class="{ 'modal-open': isUpdateModalOpen }">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Actualizar un municipio</h3>
      <form @submit.prevent="handleSubmit()">
        {{ municipio }}
        {{ prop.id }}
        <div class="mb-5 flex flex-col w-full">
          <label form="nom_mun" class="label-text my-2">Nombre del municipio</label>
          <input id="nom_mun" class="input input-bordered w-full" type="text" v-model="municipio.nom_mun" required>
        </div>
        <div class="flex justify-end gap-2">
          <button type="submit" class="btn">Actualizar municipio</button>
          <button type="button" class="btn" @click="()=> isUpdateModalOpen = false">Close!</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>