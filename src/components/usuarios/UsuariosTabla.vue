<script setup lang="js">

import {onMounted, ref} from "vue";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";
import UsuariosModal from "@/components/usuarios/UsuariosModal.vue";

const data = ref([])


onMounted(() => {
  fetchUsuarios()
})

const handleDelete = (id) =>{
  try{
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        const pro = window.electronAPI.delete_usuario(id)

        pro.then(()=>{

          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          fetchUsuarios()
        })
      } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    })
  }catch(err){
    console.log(err)
  }
}

const fetchUsuarios = () => {
  try {
    const promesa = window.electronAPI.get_usuarios()
    promesa.then((value) => data.value = value)
  } catch (err) {
    console.log(err)
  }
}


</script>

<template>
  <div class="scrollable-table">
    <table class="table bg-gray-900">
      <thead class="th bg-blue-950">
        <tr class="">
          <th class="">Nombre</th>
          <th class="">Edad</th>
          <th class="">Telefono</th>
          <th class="">Sexo</th>
          <th class="flex justify-end">
            <UsuariosModal @add-usuario="fetchUsuarios()"/>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data">
          <td>
            {{ item.nom_usuario }}
          </td>
          <td>
            {{ item.edad }}
          </td>
          <td>
            {{ item.num_tel }}
          </td>
          <td>
            {{ item.sexo }}
          </td>
          <td class="flex justify-end gap-2">
<!--            <button class="btn btn-outline btn-info btn-xs modal-button">details</button>-->
<!--            <ModelosActualizarModal :id="`${item.id_modelo}`"/>-->
            <button class="btn btn-outline btn-error btn-xs" @click="handleDelete(item.id_usuario)">eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>



.scrollable-table{
  height: 300px;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
}

.th{
  position: sticky;
  top:0;
}


.table{
  border-radius: 0;
}

::-webkit-scrollbar{
  width: 5px;
}

::-webkit-scrollbar-track{
  background-color: lightslategray;
}

::-webkit-scrollbar-thumb{
    background: linear-gradient(red, blue);
    border-radius: 10px;
}

</style>

<!--tbody tr{-->
<!--scroll-snap-align: start;-->
<!--}-->

<!--.th{-->
<!--position: sticky;-->
<!--top:0;-->
<!--}-->