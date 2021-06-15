let productos =[
    {id:1, producto:"1050 ti", precio:66_000},
    {id:2, producto:"1660 super", precio:120_000},
    {id:3, producto:"rx 550", precio:40_000},
    {id:4, producto:"rx 570", precio:109_000},
    {id:5, producto:"rx 580", precio:180_000},
    {id:6, producto:" gtx 3060", precio:250_000},
    {id:7, producto:"5500xt", precio:160_000},
    {id:8, producto:"rx 570 8gb", precio:125_000},
    {id:9, producto:"i3", precio:17_000},
    {id:10, producto:"i5", precio:24_999},
    {id:11, producto:"ryzen3", precio:17_000},
    {id:12, producto:"ryzen5", precio:28_999},
    {id:13, producto:"ryzen3400g", precio:38_999},
    {id:14, producto:"i7", precio:58_999},
    {id:15, producto:"ryzen7", precio:58_999},
    {id:16, producto:"ryzen9", precio:111_999},
    {id:17, producto:"b550h", precio:14_999},
    {id:18, producto:"a520", precio:8_339},
    {id:19, producto:"h310", precio:6_719},
    {id:20, producto:"a320", precio:8_119},
];

let carrito= [];

let miBoton = document.getElementById("boton1");
miBoton.addEventListener("click", agregar());
function agregar(){
    miBoton.innerText = 'Agregado';
    carrito.push(productos[0]);
    console.log(carrito);
    cambio();
}
let miBoton2 = document.getElementById("boton2");
miBoton2.addEventListener("click", agregarDos);
function agregarDos(){
    miBoton2.innerText = 'Agregado';
    carrito.push(productos[1]);
    console.log(carrito);
    cambio();
}
let miBoton3 = document.getElementById("boton3");
miBoton3.addEventListener("click", agregarTres);
function agregarTres(){
    miBoton3.innerText = 'Agregado';
    carrito.push(productos[2]);
    console.log(carrito);
    cambio();
}
let miBoton4 = document.getElementById("boton4");
miBoton4.addEventListener("click", agregarCuatro);
function agregarCuatro(){
    miBoton4.innerText = 'Agregado';
    carrito.push(productos[3]);
    console.log(carrito);
    cambio();
}
let miBoton5 = document.getElementById("boton5");
miBoton5.addEventListener("click", agregarCinco);
function agregarCinco(){
    miBoton5.innerText = 'Agregado';
    carrito.push(productos[4]);
    console.log(carrito);
    cambio();
}
let miBoton6 = document.getElementById("boton6");
miBoton6.addEventListener("click", agregarSeis);
function agregarSeis(){
    miBoton5.innerText = 'Agregado';
    carrito.push(productos[5]);
    console.log(carrito);
    cambio();
}
let miBoton7 = document.getElementById("boton7");
miBoton7.addEventListener("click", agregarSiete);
function agregarSiete(){
    miBoton7.innerText = 'Agregado';
    carrito.push(productos[6]);
    console.log(carrito);
    cambio();
}
let miBoton8 = document.getElementById("boton8");
miBoton8.addEventListener("click", agregarOcho);
function agregarOcho(){
    miBoton8.innerText = 'Agregado';
    carrito.push(productos[7]);
    console.log(carrito);
    cambio();
}
let miBoton9 = document.getElementById("boton9");
miBoton9.addEventListener("click", agregarNueve);
function agregarNueve(){
    miBoton9.innerText = 'Agregado';
    carrito.push(productos[8]);
    console.log(carrito);
    cambio();
}
let miBoton10 = document.getElementById("boton10");
miBoton10.addEventListener("click", agregarDiez);
function agregarDiez(){
    miBoton10.innerText = 'Agregado';
    carrito.push(productos[9]);
    console.log(carrito);
    cambio();
}
let miBoton11 = document.getElementById("boton11");
miBoton11.addEventListener("click", agregarOnce);
function agregarOnce(){
    miBoton11.innerText = 'Agregado';
    carrito.push(productos[10]);
    console.log(carrito);
    cambio();
}
let miBoton12 = document.getElementById("boton12");
miBoton12.addEventListener("click", agregarDoce);
function agregarDoce(){
    miBoton12.innerText = 'Agregado';
    carrito.push(productos[11]);
    console.log(carrito);
    cambio();
}
let miBoton13 = document.getElementById("boton13");
miBoton13.addEventListener("click", agregarTrece);
function agregarTrece(){
    miBoton13.innerText = 'Agregado';
    carrito.push(productos[12]);
    console.log(carrito);
    cambio();
}
let miBoton14 = document.getElementById("boton14");
miBoton14.addEventListener("click", agregarCatorce);
function agregarCatorce(){
    miBoton14.innerText = 'Agregado';
    carrito.push(productos[13]);
    console.log(carrito);
    cambio();
}
let miBoton15 = document.getElementById("boton15");
miBoton15.addEventListener("click", agregarQuince);
function agregarQuince(){
    miBoton15.innerText = 'Agregado';
    carrito.push(productos[14]);
    console.log(carrito);
    cambio();
}
let miBoton16 = document.getElementById("boton16");
miBoton16.addEventListener("click", agregarDieciseis);
function agregarDieciseis(){
    miBoton15.innerText = 'Agregado';
    carrito.push(productos[15]);
    console.log(carrito);
    cambio();
}
let miBoton17 = document.getElementById("boton17");
miBoton17.addEventListener("click", agregarDiecisiete);
function agregarDiecisiete(){
    miBoton17.innerText = 'Agregado';
    carrito.push(productos[16]);
    console.log(carrito);
    cambio();
}
let miBoton18 = document.getElementById("boton18");
miBoton18.addEventListener("click", agregarDieciocho);
function agregarDieciocho(){
    miBoton18.innerText = 'Agregado';
    carrito.push(productos[17]);
    console.log(carrito);
    cambio();
}
let miBoton19 = document.getElementById("boton19");
miBoton19.addEventListener("click", agregarDiecinueve);
function agregarDiecinueve(){
    miBoton19.innerText = 'Agregado';
    carrito.push(productos[18]);
    console.log(carrito);
    cambio();
}
let miBoton20 = document.getElementById("boton20");
miBoton20.addEventListener("click", agregarVeinte);
function agregarVeinte(){
    miBoton20.innerText = 'Agregado';
    carrito.push(productos[19]);
    cambio();
}

function cambio(){
    
    let notificacion = document.getElementById("Carro");
    if (carrito.length > 0){
        notificacion.innerHTML =`<a class="nav-link" href="compra.html" >Ver productos</a>`
    }
    
}
let buscador = document.querySelector("#lector");
let filtrar = document.querySelector("#boton0");
filtrar.addEventListener("click",buscar);
function buscar(){
        const mostrarProducto = productos.find(elemento => elemento.producto == buscador.value);
        console.log(mostrarProducto);
}