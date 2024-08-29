<script setup lang="js">
import {onMounted, ref} from "vue";
  import Swal from 'sweetalert2'

  let formulario, firstInput;

  const marcas = ref([])


  onMounted(()=>{
      formulario = document.getElementById("form")
      firstInput = document.getElementById("nom_modelo")

      const promesa = window.electronAPI.get_marcas()
      promesa.then((value) => marcas.value = value)
  })

  const isModalOpen = ref(false)

  const modelo = ref({
    nom_modelo: "",
    id_marca: ""
  })

  const handleSubmit = () => {
    if(modelo.value.id_marca !== ""){
      const pro = window.electronAPI.create_modelo(modelo._rawValue)

      pro.then((value) => {
        cleanModal()
        firstInput.focus()
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Modelo Creado Exitosamente",
          showConfirmButton: false,
          timer: 1500
        })
      }).catch((err)=>{
        console.log(err)
      })
    }
  }

function cleanModal () {
  modelo.value.nom_modelo = "",
  modelo.value.id_marca = ""
}

</script>

<template>
  <button class="btn modal-button btn-outline btn-ghost" @click="()=> isModalOpen = true">Añadir Modelo</button>

  <div class="modal" :class="{ 'modal-open': isModalOpen }">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Insertar un nuevo modelo</h3>
        <form id="form" @submit.prevent="handleSubmit()">
          {{ modelo }}
          {{ marcas }}
          <div class="mb-5 flex flex-col w-full">
            <label form="nom_modelo" class="label-text my-2">Nombre de modelo</label>
            <input id="nom_modelo" class="input input-bordered w-full" type="text" v-model="modelo.nom_modelo" required>
          </div>
          <div class="mb-5 flex flex-col w-full">
            <label form="marca" class="label-text my-2">Marcas</label>
            <select class="select select-bordered w-full" v-model="modelo.id_marca">
              <option disabled value="">Seleciona una marca</option>
              <option v-for="marca in marcas" :value="marca.id_marca" :key="marca.id_marca">
                {{ marca.nom_marca }}
              </option>
            </select>
          </div>
          <div class="flex justify-end gap-2">
            <button type="submit" class="btn">Insertar modelo</button>
            <button type="button" class="btn" @click="()=>isModalOpen = false">Close!</button>
          </div>
        </form>
    </div>
  </div>
</template>

<style scoped>

</style>