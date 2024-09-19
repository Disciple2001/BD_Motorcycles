<script setup lang="js">
import {onMounted, ref} from "vue";
import Swal from 'sweetalert2'

const isUpdateModalOpen = ref(false)

const emit = defineEmits([
  'updateMarca'
])

const marca = ref({
  nom_marca: "",
})

const prop = defineProps({
  id: 0
})



onMounted(()=>{
  const prom = window.electronAPI.get_marca(prop.id)
  prom.then((value)=>{
    console.log(value)
    marca.value.nom_marca = value[0].nom_marca

  })
  // console.log(marca)
})

const handleClick = () => {
  isUpdateModalOpen.value = true
  const prom = window.electronAPI.get_brand(prop.id)

  prom.then((value)=>{
    console.log(value)
  })

}

const handleSubmit = () => {
  console.log("entro")
  const pro = window.electronAPI.update_marca(prop.id, marca._rawValue)

  pro.then((value) => {
    isUpdateModalOpen.value = false
    cleanModal()
    emit('updateMarca')
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Marca Actualizada Exitosamente",
      showConfirmButton: false,
      timer: 1500
    })
  })
}

const cleanModal = () => {
  marca.value.name = ""
}


</script>

<template>
  <button class="btn btn-outline btn-info btn-xs modal-button" @click="handleClick()">detalles</button>

  <div class="modal" :class="{ 'modal-open': isUpdateModalOpen }">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Actualizar una marca</h3>
      <form @submit.prevent="handleSubmit()">
        <div class="mb-5 flex flex-col w-full">
          <label form="nom_marca" class="label-text my-2">Nombre de marca</label>
          <input id="nom_marca" class="input input-bordered w-full" type="text" v-model="marca.nom_marca" required>
        </div>
        <div class="flex justify-end gap-2">
          <button type="submit" class="btn">Actualizar marca</button>
          <button type="button" class="btn" @click="()=> isUpdateModalOpen = false">Cerrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>