"use strict";
// Codifique un Ejercicio donde el objeto necesite 5 atributos como: nombre,
// apellido, teléfono, correo, codIdentificacion. Solamente el ultimo atributo debe de
// tener su modificador como privado. Imprima en pantalla los atributos del objeto sin
// utilizar métodos
Object.defineProperty(exports, "__esModule", { value: true });
class Juan {
    nombre;
    apellido;
    telefono;
    correo;
    codIdentificacion;
    constructor() {
        this.nombre = "Juan";
        this.apellido = "Hernandez";
        this.telefono = 73686213;
        this.correo = "jh377583@gmail.com";
        this.codIdentificacion = 12345;
    }
}
let juan = new Juan();
console.log(juan.nombre + juan.apellido + juan.telefono + juan.correo);
console.log(juan.codIdentificacion);
//# sourceMappingURL=EJER1.js.map