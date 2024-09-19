<script setup lang="js">
import {onMounted, ref} from "vue";
  import Swal from 'sweetalert2'

  let formulario, firstInput;

  const municipios = ref([])
  const roles = ref([])
  const sexos = ["M", "F"]

const emit = defineEmits([
  'addUsuario'
])



onMounted(()=>{
      formulario = document.getElementById("form")
      firstInput = document.getElementById("nom_usuario")

      const promesa = window.electronAPI.get_municipios()
      promesa.then((value) => municipios.value = value)

      const promesa2 = window.electronAPI.get_roles()
      promesa2.then((value) => roles.value = value)
  })

  const isModalOpen = ref(false)

  const usuario = ref({
    nom_usuario: "",
    edad: "",
    sexo: "",
    num_tel: "",
    id_mun: "",
    id_rol: ""
  })

const handleSubmit = () => {
    const pro = window.electronAPI.create_usuario(usuario._rawValue)


    pro.then((value) => {
      emit('addUsuario')
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


function cleanModal () {
  usuario.value.nom_usuario = "",
  usuario.value.password = "",
  usuario.value.id_edad = "",
  usuario.value.sexo = "",
  usuario.value.num_tel = "",
  usuario.value.id_mun = "",
  usuario.value.id_rol = ""
}

</script>

<template>
  <button class="btn modal-button btn-outline btn-ghost" @click="()=> isModalOpen = true">Añadir Usuario</button>

  <div class="modal" :class="{ 'modal-open': isModalOpen }">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Añadir un nuevo usuario</h3>
        <form id="form" @submit.prevent="handleSubmit()">
          {{ usuario }}
          <div class="mb-5 flex flex-col w-full">
            <label for="nom_usuario" class="label-text my-2">Nombre de usuario</label>
            <input id="nom_usuario" class="input input-bordered w-full" type="text" v-model="usuario.nom_usuario" required>
          </div>
          <div class="mb-5 flex flex-col w-full">
            <label for="password" class="label-text my-2">Contraseña</label>
            <input id="password" class="input input-bordered w-full" type="text" v-model="usuario.password" required>
          </div>
          <div class="mb-5 flex flex-col w-full">
            <label for="edad" class="label-text my-2">Edad</label>
            <input id="edad" class="input input-bordered w-full" min="0" max="100" type="number" v-model="usuario.edad" required>
          </div>
          <div class="mb-5 flex flex-col w-full">
            <label for="num_tel" class="label-text my-2">Numero de telefono</label>
            <input id="num_tel" class="input input-bordered w-full" type="text" v-model="usuario.num_tel" required>
          </div>
          <div class="mb-5 flex flex-col w-full">
            <label for="id_mun" class="label-text my-2">Municipios</label>
            <select id="id_mun" class="select select-bordered w-full" v-model="usuario.id_mun" required>
              <option disabled value="">Seleciona un municipio</option>
              <option v-for="municipio in municipios" :value="municipio.id_mun" :key="municipio.id_mun">
                {{ municipio.nom_mun }}
              </option>
            </select>
          </div>
          <div class="mb-5 flex flex-col w-full">
            <label for="id_rol" class="label-text my-2">Rol</label>
            <select id="id_rol" class="select select-bordered w-full" v-model="usuario.id_rol" required>
              <option disabled value="">Seleciona un rol</option>
              <option v-for="rol in roles" :value="rol.id_rol" :key="rol.id_rol">
                {{ rol.nom_rol }}
              </option>
            </select>
          </div>
          <div class="mb-5 flex flex-col w-full">
            <label for="sexo" class="label-text my-2">Sexo</label>
            <select id="sexo" class="select select-bordered w-full" v-model="usuario.sexo" required>
              <option disabled value="">Seleciona un sexo</option>
              <option v-for="sexo in sexos" :value="sexo" :key="sexos.indexOf(sexo)">
                {{ sexo }}
              </option>
            </select>
          </div>
          <div class="flex justify-end gap-2">
            <button type="submit" class="btn">Añadir usuario</button>
            <button type="button" class="btn" @click="()=>isModalOpen = false">Close!</button>
          </div>
        </form>
    </div>
  </div>
</template>

<style scoped>

</style>