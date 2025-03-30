// test.ts
import {Persona} from "./persona";

let persona = new Persona(
  "Manri", 
  25,
  "hombre",
  "manriboy@ufplus.cl",
  null,
  undefined, 
  "Calle 123"
);

let saludo = persona.saludar();

console.log(saludo)

persona.mostrarInfo();
