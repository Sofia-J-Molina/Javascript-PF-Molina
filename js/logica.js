let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.foto}">
    <p>${product.nombre}</p>
    <p class="precio">$ ${product.precio}</p>
    `;
    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    //eventos
    comprar.addEventListener("click", () => {

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === product.id) {
                    prod.cantidad++;
                }
            });
        } else {
            carrito.push({
                id: product.id,
                img: product.foto,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            });
        }
        console.log(carrito);
        carritoCounter();
        saveLocal();
    });
});
//set item
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

//get item
JSON.parse(localStorage.getItem("carrito"));


