let nombreUsuario = prompt('Hola! Ingresa tú nombre de usuario por favor');
while (nombreUsuario == '') {
    alert('Nombre invalido');
    nombreUsuario = prompt('Hola! Ingresa tú nombre de usuario por favor');
}
alert('Bienvenido/a a KaosTech ' + nombreUsuario);

const categorias = productos.map((el) => el.categoria);
console.log(categorias);
categorias.forEach((stock)=> {console.log(stock)
});

let total = 0;
let mensaje = prompt(nombreUsuario + ' desea comprar un producto? ( si-si / no-no)');
while (mensaje == 'si' || mensaje == 'Si') {
    let producto = prompt('a-auriculares logitech G935\nb-auriculares JBL\nc-auriculares hp\nd-pc ar completa core i5\ne-pc gamer amd ryzen 5\nf-pc gamer intel Kairo core I3\ng-NOTEBOOK HP 245\nh-NOTEBOOK ACER ASPIRE 5\ni-NOTEBOOK LENOVO V15');
    switch (producto) {
        case 'a':
            alert('Agregaste auriculares logitech G935 al carro ... $ 60000');
            incrementarTotal(60000);
            break;
        case 'b':
            alert('Agregaste auriculares JBL al carro ... $ 10000');
            incrementarTotal(10000);
            break;
        case 'c':
            alert('Agregaste auriculares hp al carro ... $ 40000');
            incrementarTotal(40000);
            break;
        case 'd':
            alert('Agregaste pc ar completa core i5 al carro ... $ 130000');
            incrementarTotal(130000);
            break;
        case 'e':
            alert('Agregaste pc gamer amd ryzen 5 al carro ... $ 250000');
            incrementarTotal(250000);
            break;
        case 'f':
            alert('Agregaste pc gamer intel Kairo core I3 al carro ... $ 250000');
            incrementarTotal(373000);
            break;
        case 'g':
            alert('Agregaste NOTEBOOK HP 245 al carro ... $ 250000');
            incrementarTotal(180000);
            break;
        case 'h':
            alert('Agregaste NOTEBOOK ACER ASPIRE 5 al carro ... $ 250000');
            incrementarTotal(225000);
            break;
        case 'i':
            alert('Agregaste NOTEBOOK LENOVO V15 al carro ... $ 250000');
            incrementarTotal(188000);
            break;
        default:
            alert('Codigo inexistente');
            break;
    }
    mensaje = prompt('Desea comprar otro producto? (s-si / n-no)');
}
alert('Total de la compra $' + total);
alert('Su compra ha sido realizada con exito!');
function incrementarTotal(precio) {
    total = total + precio;
    alert('Llevas gastado $' + total);
}