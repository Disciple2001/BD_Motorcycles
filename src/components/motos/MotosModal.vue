<script setup lang="js">
import {onMounted, ref} from "vue";
  import Swal from 'sweetalert2'

  let formulario, firstInput;

  const marcas = ref([])
  const modelos = ref([])

  const colores = ["negro", "blanco","rojo", "azul", "verde"]


  onMounted(()=>{
      formulario = document.getElementById("form")
      firstInput = document.getElementById("matricula")

      const promesa = window.electronAPI.get_marcas()
      promesa.then((value) => marcas.value = value)
  })

  const isModalOpen = ref(false)

  const moto = ref({
    matricula: "",
    color: "",
    id_marca: "",
    id_modelo: "",
  })

  const handleSubmit = () => {
    const pro = window.electronAPI.create_moto(moto._rawValue)

    pro.then((value) => {
      cleanModal()
      firstInput.focus()
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Moto Creada Exitosamente",
        showConfirmButton: false,
        timer: 1500
      })
    }).catch((err)=>{
      console.log(err)
    })
  }

function cleanModal () {
  moto.value.matricula = "",
  moto.value.color = "",
  moto.value.id_marca = "",
  moto.value.id_modelo = ""
}

const fetchModelos = (id) =>{
    const promesa = window.electronAPI.get_modelos_marca(id)

    promesa.then((value)=>{
      modelos.value = value
    })

    moto.value.id_modelo = ""

}


</script>

<template>
  <button class="btn modal-button btn-outline btn-ghost" @click="()=> isModalOpen = true">Añadir Moto</button>

  <div class="modal" :class="{ 'modal-open': isModalOpen }">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Insertar una nueva moto</h3>
        <form id="form" @submit.prevent="handleSubmit()">
          {{ moto }}
          {{ marcas }}
          <div class="mb-5 flex flex-col w-full">
            <label for="matricula" class="label-text my-2">Matricula</label>
            <input id="matricula" class="input input-bordered w-full" type="text" v-model="moto.matricula" required>
          </div>
          <div class="mb-5 flex flex-col w-full">
            <label for="color" class="label-text my-2">Color</label>
            <select id="color" class="select select-bordered w-full" v-model="moto.color" required>
              <option disabled value="">Seleciona un color</option>
              <option v-for="color in colores" :value="color" :key="colores.indexOf(color)">
                {{ color }}
              </option>
            </select>
          </div>
          <div class="mb-5 flex flex-col w-full">
            <label for="marca" class="label-text my-2">Marca</label>
            <select @change="fetchModelos(moto.id_marca)" id="marca" class="select select-bordered w-full" v-model="moto.id_marca" required>
              <option disabled value="">Seleciona una marca</option>
              <option v-for="marca in marcas" :value="marca.id_marca" :key="marca.id_marca">
                {{ marca.nom_marca }}
              </option>
            </select>
            {{ }}
          </div>
          <div class="mb-5 flex flex-col w-full">
            <label for="modelo" class="label-text my-2">Modelo</label>
            <select :disabled='(moto.id_marca === "")' id="modelo" class="select select-bordered w-full" v-model="moto.id_modelo" required>
              <option disabled value="" >Seleciona un modelo</option>
              <option v-for="modelo in modelos" :value="modelo.id_modelo" :key="modelo.id_modelo">
                {{ modelo.nom_modelo }}
              </option>
            </select>
          </div>
          <div class="flex justify-end gap-2">
            <button type="submit" class="btn">Insertar moto</button>
            <button type="button" class="btn" @click="()=>isModalOpen = false">Close!</button>
          </div>
        </form>
    </div>
  </div>
</template>

<style scoped>

</style>