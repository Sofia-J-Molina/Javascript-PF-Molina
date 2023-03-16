let nombreUsuario = prompt('Hola! Ingresa tú nombre de usuario por favor');
while (nombreUsuario == '') {
    alert('Nombre invalido');
    nombreUsuario = prompt('Hola! Ingresa tú nombre de usuario por favor');
}
alert('Bienvenido/a a KaosTech ' + nombreUsuario);

let total = 0;
let mensaje = prompt(nombreUsuario + ' desea comprar un producto? ( si-si / no-no)');
while (mensaje == 'si' || mensaje == 'Si') {
    let producto = prompt('1-auriculares logitech G935\n2-auriculares JBL\n3-auriculares hp\n4-pc ar completa core i5\n5-pc gamer amd ryzen 5');
    switch (producto) {
        case '1':
            alert('Agregaste auriculares logitech G935 al carro ... $ 60000');
            incrementarTotal(60000);
            break;
        case '2':
            alert('Agregaste auriculares JBL al carro ... $ 10000');
            incrementarTotal(10000);
            break;
        case '3':
            alert('Agregaste auriculares hp al carro ... $ 40000');
            incrementarTotal(40000);
            break;
        case '4':
            alert('Agregaste pc ar completa core i5 al carro ... $ 130000');
            incrementarTotal(130000);
            break;
        case '5':
            alert('Agregaste pc gamer amd ryzen 5 al carro ... $ 250000');
            incrementarTotal(250000);
            break;
        default:
            alert('Codigo inexistente');
            break;
    }
    mensaje = prompt('Desea comprar otro producto? (s-si / n-no)');
}

alert('Total de la compra $' + total);

function incrementarTotal(precio) {
    total = total + precio;
    alert('Llevas gastado $' + total);
}