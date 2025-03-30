"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    nombre;
    edad;
    sexo;
    email;
    pais;
    region;
    direccion;
    constructor(nombre, edad, sexo, email, pais, region, direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.email = email;
        this.pais = pais;
        this.region = region;
        this.direccion = direccion;
    }
    saludar() {
        return "¡Hola! Mi nombre es " + this.nombre + " y tengo " + this.edad + " años.";
    }
    actualizarEmail(nuevoEmail) {
        this.email = nuevoEmail;
        console.log("Mi nuevo email es: " + this.email);
    }
    cambiarDireccion(nuevaDireccion) {
        this.direccion = nuevaDireccion;
        console.log("Mi nueva dirección es: " + this.direccion);
    }
    mostrarInfo() {
        console.log("Nombre: " + this.nombre + ", Edad: " + this.edad + ", Sexo: " + this.sexo + ", Email: " + this.email + ", Dirección: " + this.direccion);
    }
}
exports.Persona = Persona;
