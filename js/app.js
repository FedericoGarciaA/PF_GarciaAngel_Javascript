fetch("js/data.json")
  .then(respuesta => respuesta.json())
  .then(data => {
    const productos = data;
    const contenedorProductos = document.getElementById("cont_cards");

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
      
      const productoTitulo = document.createElement("span");
      productoTitulo.classList.add("titulo");
      productoTitulo.textContent = marca +" "+ modelo;
      
      const productoPrecio = document.createElement("span");
      productoPrecio.classList.add("precio");
      productoPrecio.textContent = "$" + precio;

      const botonAgregar = document.createElement("button")
      botonAgregar.classList.add("boton_agregar");
      botonAgregar.textContent = "Agregar al carrito"
      
      productoImagen.appendChild(img);
      productoCard.appendChild(productoImagen);
      productoCard.appendChild(productoTitulo);
      productoCard.appendChild(productoPrecio);
      productoCard.appendChild(botonAgregar);
      
      contenedorProductos.appendChild(productoCard);
    });
  })




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