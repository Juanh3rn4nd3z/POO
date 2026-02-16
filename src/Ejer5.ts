let comercio= {
    producto: "COMPUTADORA",
    marca:  "HP",
    funcion: " Funciona para gaming y para el ambito escolar llevelo ya!",
    precio: "$750",
    saludar(): void {




console.log ("Nombre " + this.producto);

console.log ("Marca " + this.marca);

console.log ("funcion " + this.funcion);

console.log ("precio" + this.precio);


    }
};
comercio.saludar();