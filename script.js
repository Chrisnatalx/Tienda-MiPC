const productos = PRODUCTOS
  
function obtenerCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
}

function agregarAlCarrito(productoId) {
    const carrito= obtenerCarrito();
    const productoYaEnCarrito = carrito.includes(productoId);
    if( !productoYaEnCarrito ){
        carrito.push(productoId);
        localStorage.setItem('carrito',JSON.stringify(carrito));
        cambio(carrito,productoId);
    }
}

function crearCartaProducto(producto) {
    const carrito= obtenerCarrito();
    const productoYaEnCarrito = carrito.includes(producto.id);
    let texto = "Agregar al carrito"

    if(productoYaEnCarrito){ 
        texto = "Agregado"
    }

    return `<div class="carta">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.producto}">
        <div class="card-body">
        <p class="card-text">${producto.producto} </p>
        <h2>${producto.precio}</h2>
        <button type="button" class="btn btn-success" id="boton${producto.id}" onclick="agregarAlCarrito(${producto.id})" >${texto}</button>
        </div>
    </div>`
}

function cargarProductos(productos) {
    const cargarProductosPorCategoria = (idContenedor,categoria) =>{
        const contenedor = document.getElementById(idContenedor);
        let html = "";
        const productosPorCategoria = productos.filter(producto => producto.categoria === categoria)
        for( producto of productosPorCategoria){
            html +=crearCartaProducto(producto)
        }
        contenedor.innerHTML = html;
    }

    cargarProductosPorCategoria("placas-container","placa-de-video")
    cargarProductosPorCategoria("procesadores-container","procesador")
    cargarProductosPorCategoria("motherboards-container","motherboard")
}

function chequearEstadoCarrito(carrito) {
    const notificacion = document.getElementById("Carro");
    if (carrito.length > 0){
        notificacion.innerHTML =`<a class="nav-link" href="compra.html" >Ver productos</a>`
    }
}
//cambio en el boton de agregar al carrito a agregado
function cambio(carrito,productoId) {
    chequearEstadoCarrito(carrito);
    const boton = document.getElementById(`boton${productoId}`);
    boton.innerText = 'Agregado';
}

function borrarBusqueda() {
    $("#busqueda-container").css('display','none')
    cargarProductos(productos);
}

function buscar() {
    const textoBusqueda = document.querySelector("#lector");
    const productosFiltrados = productos.filter(elemento => elemento.producto.includes(textoBusqueda.value));
    
    let texto = `Búsqueda: ${textoBusqueda.value}`
    if(!productosFiltrados.length)texto+=" (Sin resultados)";
    document.getElementById("busqueda").innerHTML = texto;

    $("#busqueda-container").css('display','block')
    cargarProductos(productosFiltrados);
}

function cargarProductosCarrito() {
    const idProductosEnCarrito = obtenerCarrito()
    const productosEnCarrito = productos.filter(producto => idProductosEnCarrito.includes(producto.id))
    const contenedor = document.getElementById("slide-bar");

    let html = "";
    for( producto of productosEnCarrito){
        html +=crearCartaProducto(producto)
    }
    contenedor.innerHTML = html;
}

 window.onload = function(){
    cargarProductos(productos);
    const carrito= obtenerCarrito();
    chequearEstadoCarrito(carrito);
    
    document.getElementById("boton-buscar").addEventListener("click",buscar);
    document.getElementById("borrar-busqueda").addEventListener("click",borrarBusqueda);
    
    
}