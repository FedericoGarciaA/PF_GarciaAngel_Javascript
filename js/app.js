let productos = [];
let carrito = [];

fetch("js/data.json")
  .then((respuesta) => respuesta.json())
  .then((data) => {
    productos = data;
    productosDOM(productos);
  })
  .catch((error) => {
    console.log("Error al cargar los productos:", error);
  });



function productosDOM(productosData) {
  const contenedorProductos = document.getElementById("cont_cards");
  contenedorProductos.innerHTML = "";

  productosData.forEach((producto) => {
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
    img.alt = "";

    const productoTitulo = document.createElement("div");
    productoTitulo.classList.add("titulo");
    productoTitulo.textContent = marca + " " + modelo;

    const productoPrecio = document.createElement("div");
    productoPrecio.classList.add("precio");
    productoPrecio.textContent = "$" + precio;

    const botonAgregar = document.createElement("button");
    botonAgregar.classList.add("boton_agregar");
    botonAgregar.textContent = "Agregar al carrito";
    botonAgregar.id = "botonAgregar-" + id;

    productoImagen.appendChild(img);
    productoCard.appendChild(productoImagen);
    productoCard.appendChild(productoTitulo);
    productoCard.appendChild(productoPrecio);
    productoCard.appendChild(botonAgregar);

    contenedorProductos.appendChild(productoCard);

    botonAgregar.addEventListener("click", function () {
      const idProducto = producto.id;
      agregarAlCarrito(idProducto);
    });
  });
}

// function agregarAlCarrito(idProducto) {
//   const producto = productos.find((producto) => producto.id === idProducto);

//   carrito.push(producto);

//   actualizarCarritoDOM();
//   guardarCarrito();
// }

function eliminarDelCarrito(idProducto) {
  const index = carrito.findIndex((item) => item.producto.id === idProducto);
  if (index !== -1) {
    const cantidad = carrito[index].cantidad;
    if (cantidad > 1) {
      carrito[index].cantidad -= 1;
    } else {
      carrito.splice(index, 1);
    }
    Toastify({
      text: '¡Producto eliminado del carrito!',
      duration: 3000,
      gravity: 'top', 
      close: true,
      backgroundColor: "#C90E0E" 
    }).showToast();
    actualizarCarritoDOM();
    guardarCarrito();
  }
}

function agregarAlCarrito(idProducto) {
  const producto = productos.find((producto) => producto.id === idProducto);

  const productoEnCarrito = carrito.find(
    (item) => item.producto.id === idProducto
  );
  if (productoEnCarrito) {
    productoEnCarrito.cantidad += 1;
  } else {
    carrito.push({ producto: producto, cantidad: 1 });
  }

  Toastify({
    text: '¡Producto agregado al carrito!',
    duration: 3000,
    gravity: 'top', 
    close: true,
    backgroundColor: "#05BB51" 
  }).showToast();

  actualizarCarritoDOM();
  guardarCarrito();
}

function calcularTotalCarrito() {
  const total = carrito.reduce(
    (acumulador, item) => acumulador + item.producto.precio * item.cantidad,
    0
  );
  return total.toLocaleString("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function actualizarCarritoDOM() {
  const contenedorCarrito = document.querySelector("#cont_carrito");
  contenedorCarrito.innerHTML = "";

  if (carrito.length === 0) {
    const carritoVacio = document.createElement("div");
    carritoVacio.classList.add("carrito_vacio");
    carritoVacio.textContent = "Tu carrito está vacío :(";
    contenedorCarrito.appendChild(carritoVacio);
    const totalCarrito = document.querySelector(".total_carrito");
    totalCarrito.textContent =
      "TOTAL DE TU CARRITO: $" + calcularTotalCarrito();
  } else {
    carrito.forEach((item) => {
      const producto = item.producto;
      const cantidad = item.cantidad;

      const productoCarrito = document.createElement("div");
      productoCarrito.classList.add("card_carrito");

      const carritoImagen = document.createElement("div");
      carritoImagen.classList.add("carrito_imagen");
      const img = document.createElement("img");
      img.src = producto.imagen;
      img.alt = "";

      const carritoTitulo = document.createElement("div");
      carritoTitulo.classList.add("carrito_titulo");
      carritoTitulo.textContent = producto.marca + " " + producto.modelo;

      const carritoPrecio = document.createElement("div");
      carritoPrecio.classList.add("carrito_precio");
      carritoPrecio.textContent = "$" + producto.precio;

      const carritoCantidad = document.createElement("div");
      carritoCantidad.classList.add("carrito_cantidad");
      carritoCantidad.textContent = "Cantidad: " + cantidad;

      const botonEliminar = document.createElement("button");
      botonEliminar.classList.add("boton_eliminar");
      botonEliminar.textContent = "Eliminar del carrito";
      botonEliminar.id = "botonEliminar-" + producto.id;

      carritoImagen.appendChild(img);
      productoCarrito.appendChild(carritoImagen);
      productoCarrito.appendChild(carritoTitulo);
      productoCarrito.appendChild(carritoPrecio);
      productoCarrito.appendChild(carritoCantidad);
      productoCarrito.appendChild(botonEliminar);

      contenedorCarrito.appendChild(productoCarrito);

      botonEliminar.addEventListener("click", function () {
        const idProducto = producto.id;
        eliminarDelCarrito(idProducto);
      });
    });
    const totalCarrito = document.querySelector(".total_carrito");
    totalCarrito.textContent =
      "TOTAL DE TU CARRITO: $" + calcularTotalCarrito();
  }
}

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarrito() {
  const carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    actualizarCarritoDOM();
  }
}

cargarCarrito();

const botonVaciarCarrito = document.querySelector(".boton_vaciar");
botonVaciarCarrito.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
  carrito = [];

  actualizarCarritoDOM();
  guardarCarrito();
}

const botonTodos = document.getElementById("boton_todos");
const botonMothers = document.getElementById("boton_mothers");
const botonMicros = document.getElementById("boton_micros");
const botonMemorias = document.getElementById("boton_memorias");
const botonGPU = document.getElementById("boton_gpu");
const botonDiscos = document.getElementById("boton_discos");

botonTodos.addEventListener("click", function () {
  const productosFiltrados = filtrarProductos(productos, "Todos");
  productosDOM(productosFiltrados);
});

botonMothers.addEventListener("click", function () {
  const productosFiltrados = filtrarProductos(productos, "Motherboards");
  productosDOM(productosFiltrados);
});

botonMicros.addEventListener("click", function () {
  const productosFiltrados = filtrarProductos(productos, "Microprocesadores");
  productosDOM(productosFiltrados);
});

botonMemorias.addEventListener("click", function () {
  const productosFiltrados = filtrarProductos(productos, "Memorias RAM");
  productosDOM(productosFiltrados);
});

botonGPU.addEventListener("click", function () {
  const productosFiltrados = filtrarProductos(productos, "Placas de video");
  productosDOM(productosFiltrados);
});

botonDiscos.addEventListener("click", function () {
  const productosFiltrados = filtrarProductos(productos, "Almacenamiento");
  productosDOM(productosFiltrados);
});

function filtrarProductos(productos, categoria) {
  if (categoria === "Todos") {
    return productos.slice();
  } else {
    return productos.filter((producto) => producto.categoria === categoria);
  }
}

// MODAL

const modal = document.getElementById('modalCompra');
const formularioCompra = document.getElementById('formularioCompra');
const botonComprar = document.querySelector('.boton_comprar');
const closeButton = document.querySelector('.close');

function abrirModal() {
  modal.style.display = 'block';
}

function cerrarModal() {
  modal.style.display = 'none';
}

botonComprar.addEventListener('click', function(event) {
  event.preventDefault(); 
  abrirModal();
});

closeButton.addEventListener('click', cerrarModal);

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    cerrarModal();
  }
});

formularioCompra.addEventListener('submit', function(event) {
  event.preventDefault();

  cerrarModal();
});

formularioCompra.addEventListener('submit', function(event) {
event.preventDefault();
  
Swal.fire({
title: '¡Gracias por tu compra!',
text: 'Hemos recibido tu pedido. ¡Disfruta de tu compra!',
icon: 'success',
confirmButtonText: 'Aceptar'
});

cerrarModal();
 });