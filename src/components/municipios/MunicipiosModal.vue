<script setup lang="js">
import {onMounted, ref} from "vue";
  import Swal from 'sweetalert2'

  let formulario, firstInput;

  onMounted(()=>{
      formulario = document.getElementById("form")
      firstInput = document.getElementById("brand_name")
  })

  const isModalOpen = ref(false)

  const municipio = ref({
    nom_mun: "",
  })

  const handleSubmit = () => {
    console.log("entro")
    const pro = window.electronAPI.create_municipio(municipio._rawValue)

    pro.then((value) => {
      formulario.reset()
      firstInput.focus()
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Municipio Creado Exitosamente",
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  const cleanModal = () => {
    municipio.value.name = ""
  }


</script>

<template>
  <button class="btn modal-button btn-outline btn-ghost" @click="()=> isModalOpen = true">Añadir municipio</button>

  <div class="modal" :class="{ 'modal-open': isModalOpen }">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Insertar un municipio nuevo</h3>
        <form id="form" @submit.prevent="handleSubmit()">
          {{ municipio }}
          <div class="mb-5 flex flex-col w-full">
            <label form="nom_mun" class="label-text my-2">Nombre del municipio</label>
            <input id="nom_mun" class="input input-bordered w-full" type="text" v-model="municipio.nom_mun" required>
          </div>
          <div class="flex justify-end gap-2">
            <button type="submit" class="btn">Insertar municipio</button>
            <button type="button" class="btn" @click="()=>isModalOpen = false">Close!</button>
          </div>
        </form>
    </div>
  </div>
</template>

<style scoped>

</style>