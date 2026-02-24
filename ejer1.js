"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Ingresa la nota del estudiante: ", (respuesta) => {
    const nota = Number(respuesta);
    if (nota >= 9 && nota <= 10) {
        console.log("Excelente (Eres un pro BB)");
    }
    else if (nota >= 7 && nota < 9) {
        console.log("Bueno");
    }
    else if (nota >= 6 && nota < 7) {
        console.log("Regular");
    }
    else if (nota < 6) {
        console.log("Reprobado(Eres un noob)");
    }
    else {
        console.log("Nota inválida (Ni a 0 llegas)");
    }
    rl.close();
});
//# sourceMappingURL=ejer1.js.map