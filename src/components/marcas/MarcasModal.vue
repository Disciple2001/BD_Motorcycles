<script setup lang="js">
import {onMounted, ref} from "vue";
  import Swal from 'sweetalert2'

  let formulario, firstInput;

  onMounted(()=>{
      formulario = document.getElementById("form")
      firstInput = document.getElementById("nom_marca")
  })

  const emit = defineEmits([
      'addMarca'
  ])

  const isModalOpen = ref(false)

  const marca = ref({
    nom_marca: "",
  })

  const handleSubmit = () => {
    console.log("entro")
    const pro = window.electronAPI.create_marca(marca._rawValue)

    pro.then((value) => {
      formulario.reset()
      firstInput.focus()
      emit('addMarca')
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Marca Creada Exitosamente",
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

</script>

<template>
  <button class="btn modal-button btn-outline btn-ghost" @click="()=> isModalOpen = true">Añadir Marca</button>

  <div class="modal" :class="{ 'modal-open': isModalOpen }">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Insertar una nueva marca</h3>
        <form id="form" @submit.prevent="handleSubmit()">
          {{ marca }}
          <div class="mb-5 flex flex-col w-full">
            <label form="nom_marca" class="label-text my-2">Nombre de marca</label>
            <input id="nom_marca" class="input input-bordered w-full" type="text" v-model="marca.nom_marca" required>
          </div>
          <div class="flex justify-end gap-2">
            <button type="submit" class="btn">Insertar marca</button>
            <button type="button" class="btn" @click="()=>isModalOpen = false">Close!</button>
          </div>
        </form>
    </div>
  </div>

<!--  <button class="btn" onclick="my_modal_1.showModal()">open modal</button>-->
<!--  <dialog id="my_modal_1" class="modal">-->
<!--    <div class="modal-box">-->
<!--      <h3 class="font-bold text-lg">Hello!</h3>-->
<!--      <p class="py-4">Press ESC key or click the button below to close</p>-->
<!--      <div class="modal-action">-->
<!--        <form method="dialog">-->
<!--          &lt;!&ndash; if there is a button in form, it will close the modal &ndash;&gt;-->
<!--          <button class="btn" @click="()=>console.log('hello')">Acept</button>-->

<!--          <button class="btn " >Close</button>-->
<!--        </form>-->
<!--        <button class="btn" onclick="my_modal_1.close()">close</button>-->
<!--      </div>-->
<!--    </div>-->
<!--  </dialog>-->

<!--  <dialog id="my_modal_2" class="modal">-->
<!--    <div class="modal-box">-->
<!--      <h3 class="font-bold text-lg">Insert a new Brand</h3>-->
<!--      <form @submit.prevent="">-->
<!--        <div class="mb-5 flex flex-col w-full">-->
<!--          <label class="label-text my-2">Brand name</label>-->
<!--          <input class="input input-bordered w-full" type="text" required>-->
<!--        </div>-->
<!--      </form>-->
<!--        <div class="flex position-end gap-2 justify-end">-->
<!--          <button class="btn">Insert Brand</button>-->
<!--          <button class="btn" onclick="my_modal_2.close()">Cancel</button>-->
<!--        </div>-->
<!--    </div>-->
<!--  </dialog>-->
</template>

<style scoped>

</style>