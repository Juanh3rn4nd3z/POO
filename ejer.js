"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
class Programa {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    iniciar() {
        this.pedirNumero();
    }
    pedirNumero() {
        this.rl.question("Ingresa un número: ", (respuesta) => {
            const numero = Number(respuesta);
            this.evaluarparoimpar(numero);
            this.cerrar();
        });
    }
    evaluarparoimpar(num) {
        if (num % 2 === 0) {
            console.log("numero par");
        }
        else {
            console.log("numero impar");
        }
    }
    cerrar() {
        this.rl.close();
    }
}
const app = new Programa();
app.iniciar();
//# sourceMappingURL=ejer.js.map