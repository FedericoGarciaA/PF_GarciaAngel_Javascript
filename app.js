let nombre = prompt("Bienvenido! Para empezar, ingrese su nombre");
let apellido = prompt("ingrese su apellido");
let bienvenida = nombre + " " + apellido

alert("Los datos ingresados son: " + bienvenida);

let confirmacion = prompt("Los datos ingresados son correctos? Ingrese si/no");

while (confirmacion !== "si" && confirmacion !== "no") {
    confirmacion = prompt("Ingrese una respuesta válida (si o no)");
}

switch (confirmacion) {
    case "si":
        alert("Bienvenido " + bienvenida + "!");
        break;
    case "no":
        nombre = prompt("Ingrese su nombre");
        apellido = prompt("Ingrese su apellido");
        bienvenida = nombre + " " + apellido;
        alert("Los nuevos datos ingresados son: " + bienvenida);
        alert("Bienvenido " + bienvenida + "!");
        break;
    default:
        alert("Error");
        break;
}

function agregarAlCarrito() {
    let catalogo = prompt(`Ingrese el número de artículo que desea agregar al carrito:
    1: CPU ($70.000)
    2: Monitor ($38.000)
    3: Kit periféricos ($20.000)
    4: Notebook ($185.000)`);

    let total = 0;

    for (; ;) {
        switch (catalogo) {
            case "1":
                total += 70000;
                break;
            case "2":
                total += 38000;
                break;
            case "3":
                total += 20000;
                break;
            case "4":
                total += 185000;
                break;
            default:
                alert("El número de artículo ingresado es inválido");
        }

        let respuesta = prompt("¿Desea agregar otro artículo al carrito? Ingrese 'si' o 'no'.");

        if (respuesta === "si") {
            catalogo = prompt(`Ingrese el número de artículo que desea agregar al carrito:
        1: CPU ($70.000)
        2: Monitor ($38.000)
        3: Kit periféricos ($20.000)
        4: Notebook ($185.000)`);
        } else if (respuesta === "no") {
            break;
        }
    }

    alert(`El total de su compra es: $${total}`);
}

agregarAlCarrito()