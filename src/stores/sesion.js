import { defineStore } from 'pinia'

export const useSesionStore = defineStore('sesion', {
    state: () => {
        return {
            isLoged: false,
            logedUser: {
                nom_usuario: null,
                id_usuario: null
            }
        }
    },
    persist: true,
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        signIn(usuario) {
            this.isLoged = true
            this.logedUser.nom_usuario = usuario.nom_usuario
            this.logedUser.id_usuario = usuario.id_usuario
        },
        signOut () {
            this.isLoged = false
            this.logedUser.nom_usuario = null
            this.logedUser.id_usuario = null
        },

    },
})