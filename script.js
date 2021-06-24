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

const carrito= [];
const agregar = (producto, boton) =>{
    boton.innerText = 'Agregado';
    carrito.push(producto);
    cambio();
}
productos.map(producto => {
    const miBoton = document.getElementById(`boton${producto.id}`);
    miBoton.addEventListener("click", ()=>agregar(producto,miBoton));
})

function cambio(){
    
    const notificacion = document.getElementById("Carro");
    if (carrito.length > 0){
        notificacion.innerHTML =`<a class="nav-link" href="compra.html" >Ver productos</a>`
    }
    
}
const buscador = document.querySelector("#lector");
const filtrar = document.querySelector("#boton0");
filtrar.addEventListener("click",buscar);
function buscar(){
        const mostrarProducto = productos.find(elemento => elemento.producto == buscador.value);
        console.log(mostrarProducto);
}


    