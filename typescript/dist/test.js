"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// test.ts
const persona_1 = require("./persona");
let persona = new persona_1.Persona("Manri", 25, "hombre", "manriboy@ufplus.cl", null, undefined, "Calle 123");
let saludo = persona.saludar();
console.log(saludo);
persona.mostrarInfo();
