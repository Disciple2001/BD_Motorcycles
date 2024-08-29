<script setup lang="js">
import {onMounted, ref} from "vue";
import Swal from 'sweetalert2'
import dayjs from 'dayjs'
import {useSesionStore} from "@/stores/sesion";

  let formulario, firstInput;

  const formasPago = ref([])
  const usuarios = ref([])
  const motos = ref([])

  const current_date = dayjs()
  const inputMinDate = current_date.add(1, 'day')

  const sesionStore = useSesionStore()



  onMounted(()=>{
      formulario = document.getElementById("form")
      firstInput = document.getElementById("matricula")

      const promesa = window.electronAPI.get_formasPago()
      promesa.then((value) => formasPago.value = value)

      const promesa2 = window.electronAPI.get_usuarios()
      promesa2.then((value) => usuarios.value = value)

      const promesa3 = window.electronAPI.get_motosDisponibles()
      promesa3.then((value) => motos.value = value)
  })

  const isModalOpen = ref(false)

  const contrato = ref({
    fecha_ini: current_date.format('YYYY-MM-DD'),
    fecha_fin: "",
    dias_prorro: 0,
    seguro: "false",
    id_formaPago: "",
    id_usuario: sesionStore.logedUser.id_usuario,
    id_moto: "",
    precio: 0
  })

  const handleSubmit = () => {


    calcularPrecio();

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: `You have to pay ${contrato.value.precio}$ for the rent`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, pay it",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        const pro = window.electronAPI.create_contrato(contrato._rawValue)

        pro.then(()=>{
          swalWithBootstrapButtons.fire({
            title: "Completed!",
            icon: "success"
          });
        }).catch(()=>{
          swalWithBootstrapButtons.fire({
            title: "Has been an error",
            icon: "error"
          });
        })

      } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          icon: "error"
        });
      }
    });


    // const pro = window.electronAPI.create_contrato(contrato._rawValue)
    //
    // pro.then((value) => {
    //   cleanModal()
    //   Swal.fire({
    //     position: "center",
    //     icon: "success",
    //     title: "Contrato Creado Exitosamente",
    //     showConfirmButton: false,
    //     timer: 1500
    //   })
    // }).catch((err)=>{
    //   console.log(err)
    // })


  }

function cleanModal () {
  contrato.value.fecha_ini = current_date.format('YYYY-MM-DD'),
  contrato.value.fecha_fin = "",
  contrato.value.dias_prorro = 0,
  contrato.value.seguro = "false",
  contrato.value.id_formaPago = "",
  contrato.value.id_usuario = "",
  contrato.value.id_moto = "",
  contrato.value.precio = 0
}
const calcularPrecio = () => {
  const fechaInicial = dayjs(contrato.value.fecha_ini);
  const fechaFinal = dayjs(contrato.value.fecha_fin);
  const diasDiferencia = fechaFinal.diff(fechaInicial, 'days');

  contrato.value.precio = diasDiferencia*10

  return diasDiferencia * 10
}

</script>

<template>
  <button class="btn modal-button btn-outline btn-ghost" @click="()=> isModalOpen = true">Alquilar moto</button>

  <div class="modal" :class="{ 'modal-open': isModalOpen }">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Crear un nuevo contrato</h3>
        <form id="form" @submit.prevent="handleSubmit()">
          {{ contrato }}
          <button type="button" @click="calcularPrecio">Clisss</button>
          <div class="mb-5 flex flex-col w-full">
            <label for="fecha_ini" class="label-text my-2">Fecha inicial</label>
            <input id="fecha_ini" :disabled="true" class="input input-bordered w-full" :value="current_date.format('YYYY-MM-DD')" type="date" required>
          </div>
          <div class="mb-5 flex flex-col w-full">
            <label for="fecha_fin" class="label-text my-2">Fecha final</label>
            <input
                id="fecha_fin"
                class="input input-bordered w-full"
                type="date"
                v-model="contrato.fecha_fin"
                required
                :min="inputMinDate.format('YYYY-MM-DD')"
            >
          </div>
          <div class="mb-5 flex flex-col w-full">
            <label for="seguro" class="label-text my-2">Seguro</label>
            <div id="seguro" class="flex gap-2 items-center">
              <input id="one" value="false" type="radio" name="radio-1" class="radio" checked v-model="contrato.seguro"/>
              <label for="one">Descartar seguro</label>
              <input id="second" value="true" type="radio" name="radio-1" class="radio" v-model="contrato.seguro"/>
              <label for="second">Añadir seguro</label>
            </div>
          </div>
          <div class="mb-5 flex flex-col w-full">
            <label for="id_formaPago" class="label-text my-2">Forma de pago</label>
            <select id="id_formaPago" class="select select-bordered w-full" v-model="contrato.id_formaPago" required>
              <option disabled value="">Seleciona una forma de pago</option>
              <option v-for="formaPago in formasPago" :value="formaPago.id_formaPago" :key="formasPago.indexOf(formaPago)">
                {{ formaPago.nom_formaPago }}
              </option>
            </select>
          </div>
<!--          <div class="mb-5 flex flex-col w-full">-->
<!--            <label for="id_usuario" class="label-text my-2">Cliente</label>-->
<!--            <select id="id_usuario" class="select select-bordered w-full" v-model="contrato.id_usuario" required>-->
<!--              <option disabled value="">Seleciona un cliente</option>-->
<!--              <option v-for="usuario in usuarios" :value="usuario.id_usuario" :key="usuarios.indexOf(usuario)">-->
<!--                {{ usuario.nom_usuario }}-->
<!--              </option>-->
<!--            </select>-->
<!--          </div>-->
          <div class="mb-5 flex flex-col w-full">
            <label for="id_moto" class="label-text my-2">Moto</label>
            <select id="id_moto" class="select select-bordered w-full" v-model="contrato.id_moto" required>
              <option disabled value="">Seleciona una moto</option>
              <option v-for="moto in motos" :value="moto.id_moto" :key="motos.indexOf(moto)">
                {{ moto.matricula }}
              </option>
            </select>
          </div>
<!--          <div class="mb-5 flex flex-col w-full">-->
<!--            <label for="marca" class="label-text my-2">Marca</label>-->
<!--            <select @change="fetchModelos(moto.id_marca)" id="marca" class="select select-bordered w-full" v-model="moto.id_marca" required>-->
<!--              <option disabled value="">Seleciona una marca</option>-->
<!--              <option v-for="marca in marcas" :value="marca.id_marca" :key="marca.id_marca">-->
<!--                {{ marca.nom_marca }}-->
<!--              </option>-->
<!--            </select>-->
<!--            {{ }}-->
<!--          </div>-->
<!--          <div class="mb-5 flex flex-col w-full">-->
<!--            <label for="modelo" class="label-text my-2">Modelo</label>-->
<!--            <select :disabled='(moto.id_marca === "")' id="modelo" class="select select-bordered w-full" v-model="moto.id_modelo" required>-->
<!--              <option disabled value="" >Seleciona un modelo</option>-->
<!--              <option v-for="modelo in modelos" :value="modelo.id_modelo" :key="modelo.id_modelo">-->
<!--                {{ modelo.nom_modelo }}-->
<!--              </option>-->
<!--            </select>-->
<!--          </div>-->
          <div class="flex justify-end gap-2">
            <button type="submit" class="btn">Crear contrato</button>
            <button type="button" class="btn" @click="()=>isModalOpen = false">Close!</button>
          </div>
        </form>
    </div>
  </div>
</template>

<style scoped>

</style>