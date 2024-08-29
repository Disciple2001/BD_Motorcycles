const postgres = require('postgres')

const connection = postgres('postgres://postgres:dario@localhost:5432/BD_MotoRent')

function getConnection(){
    return connection
}

module.exports = { getConnection }