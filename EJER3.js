"use strict";
// Codifique un Ejercicio en el cual se pueda verificar la edad de una persona
// utilizando solamente la fecha de nacimiento, y calcular su estado por medio de la
// edad, si es 0 a 2 años = bebe , mayor de 2 a 10 es niño/niña, mayor de 10 a 14 = pre
// adolescente, mayor de 14 a 17 = adolescente, mayor e igual a 18 a 30= joven, mayor de
// 30 a 50 = adulto, de 50 en adelante = adulto mayor.
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    fechaNacimiento;
    constructor(fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }
    calcularEdad() {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    }
    obtenerEstado() {
        const edad = this.calcularEdad();
        let estado;
        if (edad >= 0 && edad <= 2) {
            estado = "Bebé";
        }
        else if (edad > 2 && edad <= 10) {
            estado = "Niño/Niña";
        }
        else if (edad > 10 && edad <= 14) {
            estado = "Pre-adolescente";
        }
        else if (edad > 14 && edad <= 17) {
            estado = "Adolescente";
        }
        else if (edad >= 18 && edad <= 30) {
            estado = "Joven";
        }
        else if (edad > 30 && edad <= 50) {
            estado = "Adulto";
        }
        else {
            estado = "Adulto mayor";
        }
        console.log("Edad: " + edad);
        console.log("Estado: " + estado);
    }
}
const persona = new Persona(new Date(2005, 4, 15));
persona.obtenerEstado();
//# sourceMappingURL=EJER3.js.map