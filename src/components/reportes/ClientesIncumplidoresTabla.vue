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
    const promesa = window.electronAPI.get_clientesIncumplidores()
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
      <th class="" colspan="3">Fecha actual: {{fechaActual}}</th>
      <tr class="">
        <th class="">Nombre</th>
        <th>Fecha fin de contrato</th>
        <th>Fecha de entrega</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in data">
        <td>
          {{ item.nom_usuario }}
        </td>
        <td class="">
          {{ item.fecha_fin }}
        </td>
        <td class="">
          {{ item.fecha_entrega? item.fecha_entrega : "No entregado"  }}
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