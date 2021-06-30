window.onload = function() {
    cargarProductosCarrito();
}
const productos = PRODUCTOS

function cargarProductosCarrito() {
    const idProductosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const productosEnCarrito = productos.filter(producto => idProductosEnCarrito.includes(producto.id))
    const contenedor = document.getElementById("slide-bar");

    let html = "";
    if(productosEnCarrito.length){
        for( producto of productosEnCarrito){
            html +=crearCartaProducto(producto)
        }
    }else{
        html = `<div class="carta" >
                    <div class="card-body">
                        <p class="card-text">No hay productos para mostrar</p>
                    </div>
                </div>`
    }
    contenedor.innerHTML = html;
}

function crearCartaProducto(producto) {
    return `<div class="carta" >
    <img src="${producto.imagen}" class="card-img-top" alt="${producto.producto}">
        <div class="card-body">
            <p class="card-text">${producto.producto}</p>
            <h2>$${producto.precio}</h2>
            <button type="button" class="btn btn-success" id="boton${producto.id}" onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
        </div>
    </div>`
}

function eliminarDelCarrito(productoId) {
    const idProductosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const nuevosID = idProductosEnCarrito.filter(id => id != productoId );
    localStorage.setItem('carrito',JSON.stringify(nuevosID));
    cargarProductosCarrito();
}
 