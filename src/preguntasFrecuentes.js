preguntasFrecuentes.js
Quién tiene acceso

Propiedades del sistema
Tipo
JavaScript
Tamaño
495 bytes
Almacenamiento usado
495 bytes
Ubicación
Movies
Propietario
Eric Mena
Modificado
28 jun 2020 por Eric Mena
Abierto
17:39 por mí
Creado
31 may 2022
Sin descripción
Los usuarios con acceso de lectura pueden descargar este elemento
const fs = require('fs')

let preguntasFrecuentes = {
    db:'./data/faqs.json',
    titulo: 'Preguntas Frecuentes',
    leerJSON: function(){
        let faqsJSON = fs.readFileSync(this.db, 'utf-8');
        let faqs = JSON.parse(faqsJSON);
        return faqs
    },
    cantidad: function(){
        return this.leerJSON().total_faqs
    },
    listarFaqs: function(){
        let faqs = this.leerJSON();
        return faqs.faqs
    }
}
module.exports = preguntasFrecuentes