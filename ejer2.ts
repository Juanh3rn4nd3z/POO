import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const usuarios = [
  { usuario: "Juan-H", clave: "7777", rol: 1 },
  { usuario: "Randal", clave: "1234", rol: 2 },
  { usuario: "Neto", clave: "0000", rol: 3 }
];

rl.question("Usuario: ", (usuario: string) => {
  rl.question("Contraseña: ", (clave: string) => {

    const encontrado = usuarios.find(
      u => u.usuario === usuario && u.clave === clave
    );

    if (encontrado) {
      if (encontrado.rol === 1) {
        console.log("Login correcto - Rol: Administrador (Eres un alfa)");
      } else if (encontrado.rol === 2) {
        console.log("Login correcto - Rol: Cliente(Eres promedio)");
      } else if (encontrado.rol === 3) {
        console.log("Login correcto - Rol: Invitado(15 min y fuera joven)");
      }
    } else {
      console.log("Usuario o contraseña incorrectos");
    }

    rl.close();
  });
});