import {Client}  from 'pg'

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'BD_rentalCar',
    user: 'postgres',
    password: 'dario'
})

client.connect((err) => {
    if(err){
        console.error("connection error ", err.stack)
    }else{
        console.log("connected")
    }
})

module.exports = client;