/*alert("calcula las cuotas de tu 1050ti 3,6 y 12");
let productoUno = 66000;
let cliente =parseInt(prompt("en cuantas cuotas lo vas a pagar?"));
function calcular3Cuotas(){
        resultado = productoUno/3;
        alert("Te quedan 3 cuotas de " + resultado );
    }
    function calcular6Cuotas(){
        resultado = productoUno/6;
        alert("Te quedan 6 cuotas de " + resultado );
    }
    function calcular12Cuotas(){
        resultado = productoUno/12;
        alert("Te quedan 12 cuotas de " + resultado );
    }
if (cliente == 3){
    calcular3Cuotas();}
else if (cliente == 6) {
    calcular6Cuotas();
}
else if( cliente == 12){
    calcular12Cuotas();
}
class TodosLosProductos{
    constructor (producto, precio){
        this.producto = producto;
        this.precio = precio;
    }
    mostrarproducto() {
        console.log(this.producto + " " +this.precio);
    }
}
let producto1 = new producto("1050 ti 4gb",66000);
let producto2 = new producto("1660 super 6gb",160000);
let producto3 = new producto("rx550 2gb",30000);
let producto4 = new producto("rx570 4gb",95000);
producto1.mostrarproducto();
producto2.mostrarproducto();
producto3.mostrarproducto();
producto4.mostrarproducto();*/

/*let miArray =[{id:1, producto:1050, precio: 66000},
    {id:2, producto:1660, precio: 160000},
    {id:3, producto:550, precio: 30000},
    {id:4, producto:570, precio: 95000}];
let placa = prompt("que placa de video estas buscando?");

const mostrarProducto = miArray.find(elemento => elemento.producto == placa);
console.log(mostrarProducto);*/
let pl = document.getElementsByClassName("carro");
pl.innerHTML = <buttom>Agregado</buttom>