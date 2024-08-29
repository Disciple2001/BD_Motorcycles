import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import postgres from "postgres";

export const useDbConnection = defineStore('db_connection', {
    state: () => {
        let sqlDario = postgres('postgres://postgres:dario@localhost:5432/BD_rentalCar');
        return sqlDario
    },
    actions: {

    },
})