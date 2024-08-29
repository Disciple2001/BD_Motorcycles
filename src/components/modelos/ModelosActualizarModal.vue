<script setup lang="js">
import {onMounted, ref} from "vue";
import Swal from 'sweetalert2'

const isUpdateModalOpen = ref(false)

const modelo = ref({
  nom_modelo: "",
})

const prop = defineProps({
  id: 0
})



onMounted(()=>{
  const prom = window.electronAPI.get_modelo(prop.id)
  prom.then((value)=>{
    console.log(value)
    modelo.value.nom_modelo = value[0].nom_modelo

  })
  // console.log(marca)
})

const handleClick = () => {
  isUpdateModalOpen.value = true
  const prom = window.electronAPI.get_modelo(prop.id)

  prom.then((value)=>{
    console.log(value)
  })

}

const handleSubmit = () => {
  console.log("entro")
  const pro = window.electronAPI.update_modelo(prop.id, modelo._rawValue)

  pro.then((value) => {
    isUpdateModalOpen.value = false
    cleanModal()
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Modelo Actualizado Exitosamente",
      showConfirmButton: false,
      timer: 1500
    })
  })
}

const cleanModal = () => {
  modelo.value.nom_modelo = ""
}


</script>

<template>
  <button class="btn btn-outline btn-info btn-xs modal-button" @click="handleClick()">detalles</button>

  <div class="modal" :class="{ 'modal-open': isUpdateModalOpen }">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Actualizar un modelo</h3>
      <form @submit.prevent="handleSubmit()">
        {{ modelo }}
        {{ prop.id }}
        <div class="mb-5 flex flex-col w-full">
          <label form="nom_modelo" class="label-text my-2">Nombre del Modelo</label>
          <input id="nom_modelo" class="input input-bordered w-full" type="text" v-model="modelo.nom_modelo" required>
        </div>
        <div class="flex justify-end gap-2">
          <button type="submit" class="btn">Actualizar modelo</button>
          <button type="button" class="btn" @click="()=> isUpdateModalOpen = false">Close!</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>