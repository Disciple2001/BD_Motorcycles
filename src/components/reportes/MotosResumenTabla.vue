<script setup lang="js">

import {onMounted, ref} from "vue";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";
import dayjs from "dayjs"
import UsuariosModal from "@/components/usuarios/UsuariosModal.vue";

const fechaActual = dayjs()

const data = ref([])


onMounted(() => {
  try {
    const promesa = window.electronAPI.get_motosResumen()
    console.log("Hola clientes")

    promesa.then((value) => {
      console.log(value)
        data.value = value
    })
  } catch (err) {
    console.log(err)
  }
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


</script>

<template>
  <div class="scrollable-table">
    <table class="table bg-gray-900">
      <thead class="th bg-blue-950">
      <th class="" colspan="5">Fecha actual: {{fechaActual}}</th>
      <tr class="">
        <th class="">Matricula</th>
        <th>Color</th>
        <th>Km</th>
        <th>Marca</th>
        <th>Modelo</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in data">
        <td>
          {{ item.matricula }}
        </td>
        <td class="">
          {{ item.color }}
        </td>
        <td class="">
          {{ item.km }}
        </td>
        <td class="">
          {{ item.nom_marca }}
        </td>
        <td class="">
          {{ item.nom_modelo }}
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