<script setup lang="js">

import {onMounted, ref} from "vue";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";
import MarcasActualizarModal from "@/components/marcas/MarcasActualizarModal.vue";
import MarcasModal from "@/components/marcas/MarcasModal.vue";

const data = ref([])


onMounted(() => {
  fetchSituaciones()
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
        const pro = window.electronAPI.delete_situacion(id)
        pro.then(()=>{
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          fetchSituaciones()
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

const fetchSituaciones = () => {
  try {
    const promesa = window.electronAPI.get_situaciones()
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
          <th class="flex justify-end">
<!--            <SituacionesModal @add-marca="fetchSituaciones()"/>-->
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="item.id_situa">
          <td>
            {{ item.nom_situa }}
          </td>
          <td class="flex justify-end gap-2">
<!--            <button class="btn btn-outline btn-info btn-xs modal-button">details</button>-->
<!--            <SituacionesActualizarModal :id="`${item.id_situa}`"/>-->
            <button class="btn btn-outline btn-error btn-xs" @click="handleDelete(item.id_situa)">eliminar</button>
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