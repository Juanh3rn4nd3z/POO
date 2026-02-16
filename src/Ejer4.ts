let persona= {
    nombre: "Juan",
    edad:  "19 años",
    accion: " soy muy amable",
    saludar(): void {




console.log ("Hola,yo soy " + this.nombre);

console.log ("tengo " + this.edad);

console.log ("y" + this.accion);
    }
};
persona.saludar();