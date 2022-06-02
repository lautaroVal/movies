sucursales.js
Quién tiene acceso

Propiedades del sistema
Tipo
JavaScript
Tamaño
530 bytes
Almacenamiento usado
530 bytes
Ubicación
Movies
Propietario
Eric Mena
Modificado
28 jun 2020 por Eric Mena
Abierto
17:40 por mí
Creado
31 may 2022
Sin descripción
Los usuarios con acceso de lectura pueden descargar este elemento
const fs = require('fs')

let sucursales = {
    db:'./data/theaters.json',
    titulo: 'Nuestras Salas',
    leerJSON: function(){
        let theatersJSON = fs.readFileSync(this.db, 'utf-8');
        let salas = JSON.parse(theatersJSON);
        return salas
    },
    cantidad: function (){
        return this.leerJSON().total_theaters
    },
    listarSalas: function (){
        let theaters = this.leerJSON();
        return theaters.theaters
        }
        
    }




module.exports = sucursales