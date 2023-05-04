// let nombre = prompt("Bienvenido! Para empezar, ingrese su nombre");
// let apellido = prompt("ingrese su apellido");
// let bienvenida = nombre + " " + apellido;

// alert("Los datos ingresados son: " + bienvenida);

// let confirmacion = prompt("Los datos ingresados son correctos? Ingrese si/no");

// while (confirmacion !== "si" && confirmacion !== "no") {
//     confirmacion = prompt("Ingrese una respuesta válida (si o no)");
// }

// switch (confirmacion) {
//     case "si":
//         alert("Bienvenido " + bienvenida + "!");
//         break;
//     case "no":
//         nombre = prompt("Ingrese su nombre");
//         apellido = prompt("Ingrese su apellido");
//         bienvenida = nombre + " " + apellido;
//         alert("Los nuevos datos ingresados son: " + bienvenida);
//         alert("Bienvenido " + bienvenida + "!");
//         break;
//     default:
//         alert("Error");
//         break;
// }

// function agregarAlCarrito() {
//     let catalogo = prompt(`Ingrese el número de artículo que desea agregar al carrito:
//     1: CPU ($70.000)
//     2: Monitor ($38.000)
//     3: Kit periféricos ($20.000)
//     4: Notebook ($185.000)`);

//     let total = 0;

//     for (; ;) {
//         switch (catalogo) {
//             case "1":
//                 total += 70000;
//                 break;
//             case "2":
//                 total += 38000;
//                 break;
//             case "3":
//                 total += 20000;
//                 break;
//             case "4":
//                 total += 185000;
//                 break;
//             default:
//                 alert("El número de artículo ingresado es inválido");
//         }

//         let respuesta = prompt("¿Desea agregar otro artículo al carrito? Ingrese 'si' o 'no'.");

//         if (respuesta === "si") {
//             catalogo = prompt(`Ingrese el número de artículo que desea agregar al carrito:
//         1: CPU ($70.000)
//         2: Monitor ($38.000)
//         3: Kit periféricos ($20.000)
//         4: Notebook ($185.000)`);
//         } else if (respuesta === "no") {
//             break;
//         }
//     }

//     alert(`El total de su compra es: $${total}`);
// }

// agregarAlCarrito();


// OBJETOS - PRODUCTOS

function Producto (marca, modelo, categoria, precio){
 this.marca = marca
 this.modelo = modelo
 this.categoria = categoria
 this.precio = precio   
}

const mother1 = new Producto ("Asus", "Prime A520M-A", "Motherboards", 46200)
const mother2 = new Producto ("Asus", "Prime X570-P", "Motherboards", 78150)
const mother3 = new Producto ("Asus", "Rog Strix B450-F", "Motherboards", 80200)
const mother4 = new Producto ("Asus", "Rog Strix B550-A", "Motherboards", 111300)
const mother5 = new Producto ("Asus", "Rog Strix B550-XE", "Motherboards", 159650)
const mother6 = new Producto ("Asus", "Rog Strix  X570-E", "Motherboards", 182600)

const micro1 = new Producto ("AMD", "Ryzen 3 3200G", "Microprocesadores", 66150)
const micro2 = new Producto ("AMD", "Ryzen 5 3600", "Microprocesadores", 79190)
const micro3 = new Producto ("AMD", "Ryzen 5 5600X", "Microprocesadores", 141750)
const micro4 = new Producto ("AMD", "Ryzen 7 5800X", "Microprocesadores", 205800)
const micro5 = new Producto ("AMD", "Ryzen 9 7900X", "Microprocesadores", 281300)

const memoria1 = new Producto ("Adata", "DDR4 2x8gb 3600mhz", "Memorias RAM", 46750)
const memoria2 = new Producto ("Adata", "DDR4 2x8gb 3600mhz White", "Memorias RAM", 49950)
const memoria3 = new Producto ("GeiL", "DDR4 2x8gb 3200mhz", "Memorias RAM", 35950)
const memoria4 = new Producto ("Patriot", "DDR4 2x8gb 3600mhz", "Memorias RAM", 51150)
const memoria5 = new Producto ("T-Force", "DDR4 2x16gb 3200mhz", "Memorias RAM", 90250)

const gpu1 = new Producto ("Asus", "RTX 3060TI 8gb", "Placas de video", 348608)
const gpu2 = new Producto ("Asus", "RTX 3070 8gb", "Placas de video", 420430)
const gpu3 = new Producto ("Asus", "Rog Strix 3060TI 8gb", "Placas de video", 325830)
const gpu4 = new Producto ("Asus", "Rog Strix RTX 3070TI 8gb", "Placas de video", 432200)
const gpu5 = new Producto ("Asus", "Rog Strix RTX 4080 16gb", "Placas de video", 892000)
const gpu6 = new Producto ("Asus", "Rog Strix RTX 4080 16gb white", "Placas de video", 931000)
const gpu7 = new Producto ("Asus", "RTX 3060 12gb", "Placas de video", 268182)
const gpu8 = new Producto ("Asus", "TUF Gaming RTX 4080 16gb", "Placas de video", 693500)

const disco1 = new Producto ("Adata", "SSD 480gb 520mbs", "Almacenamiento", 18700)
const disco2 = new Producto ("Crucial", "M.2 500gb NVMe 3500mbs", "Almacenamiento", 26600)
const disco3 = new Producto ("Kingston", "SSD 960gb 500mbs", "Almacenamiento", 38200)
const disco4 = new Producto ("T-Force", "M.2 1TB NVMe 3500mbs", "Almacenamiento", 43250)
const disco5 = new Producto ("T-Force", "SSD 480gb 540mbs", "Almacenamiento", 18350)
const disco6 = new Producto ("Western Digital", "M.2 2TB NVMe 5150mbs", "Almacenamiento", 131850)


// ARRAY - CATALOGO

const productos = [mother1, mother2, mother3, mother4, mother5, mother6, micro1, micro2, micro3, micro4, micro5, memoria1, memoria2, memoria3, memoria4, memoria5, gpu1, gpu2, gpu3, gpu4, gpu5, gpu6, gpu7, gpu8, disco1, disco2, disco3, disco4, disco5, disco6]


// FILTROS POR CATEGORIA

const motherboards = productos.filter ((producto) => producto.categoria === "Motherboards")
const microprocesadores = productos.filter ((producto) => producto.categoria === "Microprocesadores")
const memorias = productos.filter ((producto) => producto.categoria === "Memorias RAM")
const gpu = productos.filter ((producto) => producto.categoria === "Placas de video")
const almacenamiento = productos.filter ((producto) => producto.categoria === "Almacenamiento")

console.log(`tenemos ${productos.length} productos disponibles en nuestro catalogo`);
console.log("Los motherboards disponibles son:");
console.log(motherboards);
console.log("Los microprocesadores disponibles son:");
console.log(microprocesadores);
console.log("Las memorias RAM disponibles son:");
console.log(memorias);
console.log("Las placas de video disponibles son:");
console.log(gpu);
console.log("Las unidades de almacenamiento disponibles son:");
console.log(almacenamiento);

// FILTROS POR PRECIO

const precioMenorA100 = productos.filter ((producto) => (producto.precio <= 100000))
const precioEntre100y300 = productos.filter ((producto) => (producto.precio > 100000 && producto.precio <= 300000))
const precioMayorA300 = productos.filter ((producto) => producto.precio > 300000)

console.log(precioMenorA100);
console.log(precioEntre100y300);
console.log(precioMayorA300);

// CARRITO

let carrito = []

function agregarAlCarrito (producto){
    carrito.push (producto)
    return carrito
}

agregarAlCarrito (mother4)
agregarAlCarrito (micro3)
agregarAlCarrito (memoria5)
agregarAlCarrito (gpu3)
agregarAlCarrito (disco2)

console.log(carrito);

// SUMATORIA DE PRODUCTOS EN CARRITO

function totalCarrito() {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
      total += carrito[i].precio;
    }
    return total;
  }

  const total = totalCarrito();
  console.log(`El total de tu carrito es: $ ${total}`)