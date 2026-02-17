// Codifique un Ejercicio donde se evalué el precio a pagar por un producto, los
// atributos pueden ser a su criterio, tomar en cuenta que se debe de manejar un
// parámetro descuento que seria un porcentaje, el parámetro se debe de enviar en la
// función no debe de inicializarse con el objeto. El método que cree debe de mostrar el
// siguiente mensaje:
// ****Cantidad de producto: cantidad*****
// ****Precio: $Precio******
// ****Descuento: $descuento****
// ****Iva: $iva****
// ****Total a pagar******

class Producto {
    cantidad: number;
    precio: number;
    iva: number;

    constructor(cantidad: number, precio: number) {
        this.cantidad = cantidad;
        this.precio = precio;
        this.iva = 0.13;
    }

    public calcular(descuento: number): void {
        let subtotal = this.cantidad * this.precio;
        let montoDescuento = subtotal * (descuento / 100);
        let montoIva = (subtotal - montoDescuento) * this.iva;
        let total = subtotal - montoDescuento + montoIva;

        console.log("Cantidad de producto: " + this.cantidad + "");
        console.log("Precio: $" + subtotal + "");
        console.log("Descuento: $" + montoDescuento + "");
        console.log("Iva: $" + montoIva + "");
        console.log("Total a pagar: $" + total + "");
    }
}

let producto = new Producto(3, 10);
producto.calcular(15);
