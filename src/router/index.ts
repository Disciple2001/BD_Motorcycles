import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/AdminView.vue'
import UsersView from "@/views/UsersView.vue";
import LoginView from "@/views/LoginView.vue";
import MunicipiosVista from "@/views/MunicipiosVista.vue";
import MarcasVista from "@/views/MarcasVista.vue";
import ModelosVista from "@/views/ModelosVista.vue";
import MotosVista from "@/views/MotosVista.vue";
import UsuariosVista from "@/views/UsuariosVista.vue";
import SituacionesVista from "@/views/SituacionesVista.vue";
import LandingPage from "@/views/LandingPageView.vue";
import AdminView from "@/views/AdminView.vue";
import LandingPageView from "@/views/LandingPageView.vue";
import ContratosVista from "@/views/ContratosVista.vue";
import ReportesVista from "@/views/ReportesVista.vue";
import ClientesResumen from "@/views/ClientesResumen.vue";
import MotosResumen from "@/views/MotosResumen.vue";
import ContratosResumen from "@/views/ContratosResumen.vue";
import SituacionMotos from "@/views/SituacionMotos.vue";
import ClientesIncumplidores from "@/views/ClientesIncumplidores.vue";
import ResumenMarcasModelos from "@/views/ResumenMarcasModelos.vue";
import ResumenMarcasModelosMunicipio from "@/views/ResumenMarcasModelosMunicipio.vue";
import ResumenAnual from "@/views/ResumenAnual.vue";
import RentarView from "@/views/RentarView.vue";

function SituacionVista() {

}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
    },
    {
      path: '/rentarView',
      name: 'rentarView',
      component: RentarView,
    },
    {
      path: '/reportes',
      name: 'reportes',
      component: ReportesVista,
    },
    {
      path: '/clientesResumen',
      name: 'clientesResumen',
      component: ClientesResumen,
    },
    {
      path: '/motosResumen',
      name: 'motosResumen',
      component: MotosResumen,
    },
    {
      path: '/contratosResumen',
      name: 'contratosResumen',
      component: ContratosResumen,
    },
    {
      path: '/situacionMotos',
      name: 'situacionMotos',
      component: SituacionMotos,
    },
    {
      path: '/resumenMarcasModelos',
      name: 'resumenMarcasModelos',
      component: ResumenMarcasModelos,
    },
    {
      path: '/resumenMarcasModelosMunicipio',
      name: 'resumenMarcasModelosMunicipio',
      component: ResumenMarcasModelosMunicipio,
    },
    {
      path: '/resumenAnual',
      name: 'resumenAnual',
      component: ResumenAnual,
    },
    {
      path: '/clientesIncumplidores',
      name: 'clientesIncumplidores',
      component: ClientesIncumplidores,
    },
    {
      path: '/home',
      name: 'home',
      component: LandingPageView,
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: UsuariosVista
    },
    {
      path: '/marcas',
      name: 'marcas',
      component: MarcasVista
    },
    {
      path: '/motos',
      name: 'motos',
      component: MotosVista
    },
    {
      path: '/contratos',
      name: 'contratos',
      component: ContratosVista
    },
    {
      path: '/modelos',
      name: 'modelos',
      component: ModelosVista
    },
    {
      path: '/municipios',
      name: 'municipios',
      component: MunicipiosVista
    },
    {
      path: '/situaciones',
      name: 'situaciones',
      component: SituacionesVista
    },
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
