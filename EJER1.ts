// Codifique un Ejercicio donde el objeto necesite 5 atributos como: nombre,
// apellido, teléfono, correo, codIdentificacion. Solamente el ultimo atributo debe de
// tener su modificador como privado. Imprima en pantalla los atributos del objeto sin
// utilizar métodos

class Juan {
    nombre;
    apellido;
    telefono;
    correo;
    private codIdentificacion;

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
console.log((juan as any).codIdentificacion);