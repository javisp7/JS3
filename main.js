const pizzas = [
    { id: 1,
    nombre: "muzarella",
    ingredientes: ["muzzarella", "salsa", "aceitunas"],
    precio: 800, },
    { id: 2,
    nombre: "Anana",
    ingredientes: ["muzzarella", "salsa", "anana", "jamon", "queso"],
    precio: 1400, },
    { id: 3,
    nombre: "calabresa",
    ingredientes: ["muzzarella", "salsa", "salame", "salchichas", "cebollas", ],
    precio: 1500, },
    { id: 4,
    nombre: "especial",
    ingredientes: ["muzzarella", "salsa", "jamon", "aceitunas"],
    precio: 980, },
    { id: 5,
    nombre: "chicken",
    ingredientes: ["muzzarella", "salsa", "pollo", "pimientos", "champignones"],
    precio: 1500, },
    { id: 6,
    nombre: "4 estaciones",
    ingredientes: ["muzzarella", "4 quesos", "aceitunas", "cebolla"],
    precio: 1200, },
    { id: 7,
    nombre: "roquefort",
    ingredientes: ["muzzarella", "salsa", "roquefort", "jamon"],
    precio: 1100, },
    ];
const input = document.getElementById("input");
const darOk = document.getElementById("darOk");
const nombrePizza = document.getElementById("nombrePizza");
const precioPizza = document.getElementById("precioPizza");

//Evento
darOk.addEventListener("click", lanzaPizza);

function lanzaPizza() {
    nombrePizza.innerHTML = "";
    precioPizza.innerHTML = "";
    const respuestaAlOk = input.value;
    pizzas.forEach((pizza) => {
        if(pizza.id == respuestaAlOk) {
            nombrePizza.innerHTML = `La pizza seleccionada es <br> ${pizza.nombre}`;
            precioPizza.innerHTML = `Su precio es $${pizza.precio}`;
        } 
    })
    if(respuestaAlOk > 7) {
        precioPizza.innerHTML = "No es un número correspondiente a una pizza de nuestra lista"
    }
    if(respuestaAlOk < 1) {
        precioPizza.innerHTML = "No es un número correspondiente a una pizza de nuestra lista"
    }
}