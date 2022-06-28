let pizzas = [
  {
    id: "1",
    nombre: "muzza",
    ingredientes: ["Salsa de tomate, Muzzarella y Oregano"],
    precio: "Su precio es: $500",
    imagen:
      "https://quem.com.ar/wp-content/uploads/2018/05/Pizza-e1584547627773.jpg",
  },

  {
    id: "2",
    nombre: "especial",
    ingredientes: ["Salsa de tomate, Muzzarella, Jamon Cocido y Oregano"],
    precio: "Su precio es: $800",
    imagen:
      "https://images.deliveryhero.io/image/pedidosya/products/4129e125-9c4e-4c25-9f01-14ebacaf6e13.jpg?quality=90&width=248",
  },

  {
    id: "3",
    nombre: "caprese",
    ingredientes: ["Salsa de tomate, Muzzarella, Tomate en Rodajas y Albahaca"],
    precio: "Su precio es: $700",
    imagen:
      "https://matera.cl/wp-content/uploads/2019/10/DSC_2483-1-500x500.jpg",
  },

  {
    id: "4",
    nombre: "americana",
    ingredientes: ["Salsa de tomate, Muzzarella, Panceta y Huevo Frito"],
    precio: "Su precio es: $900",
    imagen:
      "https://safariresto.com.ar/wp-content/uploads/2020/10/pizza-americana.jpg",
  },

  {
    id: "5",
    nombre: "provolone",
    ingredientes: ["Salsa de tomate, Muzzarella, Queso Provolone"],
    precio: "Su precio es: $850",
    imagen:
      "https://media-cdn.tripadvisor.com/media/photo-s/19/72/d5/f6/provolone.jpg",
  },

  {
    id: "6",
    nombre: "rucula y crudo",
    ingredientes: ["Salsa de tomate, Muzzarella, Rucula Fresca y Jamon Crudo"],
    precio: "Su precio es: $1000",
    imagen:
      "https://www.recetasnatura.com.ar/sites/default/files/styles/receta_cuerpo/public/pizza-de-jamon-crudo-rucula-y-tomates-secos.jpg?itok=jdGKX1y9",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  localStorage.setItem("Pizzas", JSON.stringify(pizzas));
});

//Creacion de todos los elementos HTML//

modificarElDOM();

//capturar valores del DOM

const bot = document.getElementById("boton");
const input = document.getElementById("campo");
const tit = document.getElementById("title");
const imagen = document.getElementById("producto-img");
const ingredientes = document.getElementById("textop");
const pre = document.getElementById("precio");

//funcion
bot.addEventListener("click", () => {
  let pizzaEncontrada = pizzas.find(
    (pizza) => pizza.nombre.toUpperCase() === input.value.toUpperCase()
  );

  sacarImagen();

  if (pizzaEncontrada === undefined) {
    mostrarMensajeNoEncontrado();
  } else {
    mostrarPizzaEncontrada(pizzaEncontrada);
  }
});




function modificarElDOM() {
    const divisor = document.createElement("div");

    divisor.id = "wrapper";

    document.body.appendChild(divisor);

    //div de imagenes
    const divisorImg = document.createElement("div");

    divisorImg.id = "producto-img";

    divisor.appendChild(divisorImg);

    //imagen
    const foto = document.createElement("img");
    foto.src =
        "https://img.freepik.com/vector-gratis/diseno-logo-pizza_9845-319.jpg?w=2000";

    foto.id = "logo";

    divisorImg.appendChild(foto);

    //div de titulo y descripcion
    const divisorInfo = document.createElement("div");

    divisorInfo.id = "info";

    divisor.appendChild(divisorInfo);

    //div de texto
    const divisorTxt = document.createElement("div");

    divisorTxt.id = "divText";

    divisorInfo.appendChild(divisorTxt);

    //titulo
    const titulo = document.createElement("h1");
    const title = document.createTextNode("ar pizzas");

    titulo.id = "title";

    titulo.appendChild(title);
    divisorTxt.appendChild(titulo);

    //descripcion
    const parrafo = document.createElement("p");
    const textop = document.createTextNode(
        "Para conocer las pizzas ingrese el nombre"
    );

    parrafo.id = "textop";

    parrafo.appendChild(textop);
    divisorTxt.appendChild(parrafo);

    //div de precio
    const divPrecio = document.createElement("div");

    divPrecio.id = "divPre";

    divisorInfo.appendChild(divPrecio);

    //texto para averiguar precio
    const precio = document.createElement("p");
    const preciop = document.createTextNode(
        "americana/muzza/provolone/caprese/rucula y crudo/especial"
    );

    precio.id = "precio";

    precio.appendChild(preciop);
    divPrecio.appendChild(precio);

    //div de input y boton
    const divInput = document.createElement("div");

    divInput.id = "input";

    //input
    const campo = document.createElement("input");
    campo.className = "numeros";
    campo.id = "campo";

    //boton
    const boton = document.createElement("button");

    boton.id = "boton";

    const buscar = document.createTextNode("BUSCAR");

    boton.appendChild(buscar);

    divInput.appendChild(boton);

    divInput.appendChild(campo);

    divisor.appendChild(divInput);
}

function sacarImagen() {
    while (imagen.firstChild) {
        imagen.removeChild(imagen.firstChild);
    }
}

function mostrarPizzaEncontrada(pizzaEncontrada) {
  tit.style.display = "block";
  pre.style.display = "block";
  ingredientes.style.display = "block";
  imagen.style.display = "block";

  tit.innerText = pizzaEncontrada.nombre;
  pre.innerText = pizzaEncontrada.precio;
  ingredientes.innerText = pizzaEncontrada.ingredientes;

  const foto = document.createElement("img");
  foto.setAttribute("src", pizzaEncontrada.imagen);
  imagen.appendChild(foto);
}

function mostrarMensajeNoEncontrado() {
  tit.innerText = "Ups! Algo salio mal";
  tit.style.display = "block";
  pre.style.display = "none";
  ingredientes.innerText = "Escriba el nombre de otra pizza";
  ingredientes.style.display = "block";
  const foto = document.createElement("img");
  foto.setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7cVQ6I0gZkUIoIyyubug6PFkxVPgaPLnQj8BB-Rqv637ATblrT8H1lgQAYqcu8Jor4w8&usqp=CAU"
  );
  imagen.appendChild(foto);
}
