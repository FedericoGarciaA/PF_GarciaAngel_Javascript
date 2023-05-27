let productos = [];

function productosDOM(productosData) {
  productos = productosData;
  const contenedorProductos = document.getElementById("cont_cards");
  contenedorProductos.innerHTML = "";

  productos.forEach(producto => {
    const id = producto.id;
    const marca = producto.marca;
    const modelo = producto.modelo;
    const categoria = producto.categoria;
    const precio = producto.precio;
    const imagen = producto.imagen;

    const productoCard = document.createElement("div");
    productoCard.classList.add("card");
    
    const productoImagen = document.createElement("div");
    productoImagen.classList.add("image");
    const img = document.createElement("img");
    img.src = imagen;
    img.alt = '';
    
    const productoTitulo = document.createElement("div");
    productoTitulo.classList.add("titulo");
    productoTitulo.textContent = marca + " " + modelo;
    
    const productoPrecio = document.createElement("div");
    productoPrecio.classList.add("precio");
    productoPrecio.textContent = "$" + precio;

    const botonAgregar = document.createElement("button")
    botonAgregar.classList.add("boton_agregar");
    botonAgregar.textContent = "Agregar al carrito"
    botonAgregar.id = "botonAgregar-" + id;
    
    productoImagen.appendChild(img);
    productoCard.appendChild(productoImagen);
    productoCard.appendChild(productoTitulo);
    productoCard.appendChild(productoPrecio);
    productoCard.appendChild(botonAgregar);
    
    contenedorProductos.appendChild(productoCard);

    botonAgregar.addEventListener("click", function() {
      const idProducto = this.id.split("-")[1]; 
      agregarAlCarrito(idProducto);
    });
  });
}

function agregarAlCarrito(idProducto) {
  // Buscar el producto correspondiente por su id en la lista de productos
  const producto = productos.find(producto => producto.id === idProducto);

  // Agregar el producto al carrito
  carrito.push(producto);

  // Actualizar el DOM del carrito
  actualizarCarritoDOM();
}

function actualizarCarritoDOM() {
  const contenedorCarrito = document.querySelector("#cont_carrito");
  contenedorCarrito.innerHTML = ""; // Limpiar el contenido del carrito antes de actualizarlo

  carrito.forEach(producto => {
    const productoCarrito = document.createElement("div");
    productoCarrito.classList.add("card_carrito")
    // Crea los elementos HTML correspondientes para mostrar los detalles del producto (imagen, título, precio, etc.)
    const carritoImagen = document.createElement("div");
    carritoImagen.classList.add("carrito_imagen");
    const img = document.createElement("img");
    img.src = producto.imagen;
    img.alt = '';
    
    const carritoTitulo = document.createElement("div");
    carritoTitulo.classList.add("carrito_titulo");
    carritoTitulo.textContent = producto.marca + " " + producto.modelo;
    
    const carritoPrecio = document.createElement("div");
    carritoPrecio.classList.add("carrito_precio");
    carritoPrecio.textContent = "$" + producto.precio;

    const botonEliminar = document.createElement("button")
    botonEliminar.classList.add("boton_eliminar");
    botonEliminar.textContent = "Eliminar del carrito"
    botonEliminar.id = "botonEliminar-" + producto.id;
    
    carritoImagen.appendChild(img);
    productoCarrito.appendChild(carritoImagen);
    productoCarrito.appendChild(carritoTitulo);
    productoCarrito.appendChild(carritoPrecio);
    productoCarrito.appendChild(botonEliminar);
    
    contenedorCarrito.appendChild(productoCarrito);
    // Agrega los elementos al productoItem

    // contenedorCarrito.appendChild(productoCarrito);
  });
}

let carrito = [];

fetch("js/data.json")
  .then(respuesta => respuesta.json())
  .then(data => {
    const productos = data;
    productosDOM(productos);
  });


  



// let containerCards = document.querySelector("#cont_cards");
// containerCards.innerHTML = `<div class="card">
// <div class="image"><img src="${disco1.imagen}}" alt=""></div>
//   <span class="title">Cool Chair</span>
//   <span class="price">$100</span>
// </div>`;

// FILTROS POR CATEGORIA

// const motherboards = productos.filter((producto) => producto.categoria === "Motherboards")
// const microprocesadores = productos.filter((producto) => producto.categoria === "Microprocesadores")
// const memorias = productos.filter((producto) => producto.categoria === "Memorias RAM")
// const gpu = productos.filter((producto) => producto.categoria === "Placas de video")
// const almacenamiento = productos.filter((producto) => producto.categoria === "Almacenamiento")



// FILTROS POR PRECIO

// const precioMenorA100 = productos.filter((producto) => (producto.precio <= 100000))
// const precioEntre100y300 = productos.filter((producto) => (producto.precio > 100000 && producto.precio <= 300000))
// const precioMayorA300 = productos.filter((producto) => producto.precio > 300000)

// console.log(precioMenorA100);
// console.log(precioEntre100y300);
// console.log(precioMayorA300);

// CARRITO

// let carrito = []

// function agregarAlCarrito(producto) {
//     carrito.push(producto)
//     return carrito
// }

// agregarAlCarrito(mother4)
// agregarAlCarrito(micro3)
// agregarAlCarrito(memoria5)
// agregarAlCarrito(gpu3)
// agregarAlCarrito(disco2)

// console.log(carrito);

// // SUMATORIA DE PRODUCTOS EN CARRITO

// function totalCarrito() {
//     let total = 0;
//     for (let i = 0; i < carrito.length; i++) {
//         total += carrito[i].precio;
//     }
//     return total;
// }

// const total = totalCarrito();
// console.log(`El total de tu carrito es: $ ${total}`)