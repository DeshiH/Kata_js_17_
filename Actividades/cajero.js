// let cuentas = [
//     { nombre: "Victor", saldo: 500, password: 'helloworld' },
//     { nombre: "Damian", saldo: 390, password: 'l33t' },
//     { nombre: "Santiago", saldo: 96, password: '123' }
// ];
// Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta. Si el password es incorrecto, debes notificar al usuario y permitirle intentarlo nuevamente. Si el password es correcto, debes mostrar las siguientes opciones:

// let usuario = prompt('Escribe tu nombre')
// let contra = prompt('Ingresa la contrasena')
// let password = 'helloworld' || 'l33t' || '123'


// if (cuentas.nombre === cuentas.nombre) {
//     console.log('Usuario correcto')
// } else {
//     console.log('Usuario incorrecto')
// }



// if (password.nombre === password.nombre) {
//     console.log('Contrasena correcta')
// } else {
//     console.log('La contrasena es incorrecta')
// }





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Mini Proyecto: Cajero Automático

// Crea una aplicación web con JavaScript donde simulemos la interacción con un cajero automático.

// Al ingresar al cajero, puedes seleccionar la cuenta con la que deseas interactuar. Deben existir al menos tres cuentas. Para esto, puedes trabajar con un arreglo de objetos como el siguiente:

let cuentas = [
    { nombre: "Hiromi", saldo: 200, password: 'helloworld' },
    { nombre: "Luis", saldo: 290, password: 'l33t' },
    { nombre: "Carlos", saldo: 67, password: '123' }
];

// Inicio del programa
function login() {
    // 1. Elegir usuario.
    let usuario = prompt('Escribe tu nombre');
    // let usuario = prompt('Elige tu usuario 1. Hiromi 2. Luis 3. Carlo');
    let contra = prompt('Ingresa la contraseña para el usuario: ' + usuario);
    validarUsuario(usuario, contra)
}

function validarUsuario(usuario, contra) {
    for (let i = 0; i < cuentas.length; i++) {
        // console.log(cuentas[i].nombre);
        if (usuario === cuentas[i].nombre) {
            // Usuario existe
            // console.log('sí')
            if (contra === cuentas[i].password) {
                console.log('DATOS CORRECTOS');
                mostrarMenu(i);
            } else {
                console.log('Contraseña incorrecta')
            }
            return
        } else {
            console.log('no');
        }
    }
}

login();

function mostrarMenu(posicionUsuario) {
    let opcion = prompt('Indica una opción:\n 1. Consultar saldo\n 2. Hacer un retiro \n 3. Hacer un depósito \n 4. Salir');

    if (opcion == 1) {
        consultarSaldo(posicionUsuario)
    } else if (opcion == 2) {
        depositar(posicionUsuario)
    } else if (opcion == 3) {
        retirar(posicionUsuario)
    } else if (opcion == 3) {
        retirar(posicionUsuario)
    } else if (opcion == 4) {
        alert('adiós');
        return
    } else {
        alert('opción inválida');
        mostrarMenu(posicionUsuario);
    }
}

function consultarSaldo(posicionUsuario) {
    alert('El saldo del usuario ' + cuentas[posicionUsuario].nombre + ' es de $' + cuentas[posicionUsuario].saldo);
    mostrarMenu(posicionUsuario)
}

function depositar(posicionUsuario) {
    let ingreso = prompt('Ingresa el saldo a depositar')
    ingreso = (number(ingreso))
    cuentas[posicionUsuario].saldo = cuentas[posicionUsuario].saldo + ingreso
    mostrarMenu(posicionUsuario);
}






function retirar(posicionUsuario) {
    let ingreso = prompt('Escribe cuanto quieres retirar')
    ingreso = (number(retiro))
    cuentas[posicionUsuario].saldo = cuentas[posicionUsuario].saldo - retiro
    mostrarMenu(posicionUsuario);

}
// if(usuario == && contra ) {
//     alert('usuario correcto')
// } else {
//     alert('ERROR')
// }
// Condicionales

// Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta. Si el password es incorrecto, debes notificar al usuario y permitirle intentarlo nuevamente. Si el password es correcto, debes mostrar las siguientes opciones:
// Consultar saldo
// Ingresar monto
// Retirar monto

// Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta
// Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar. Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.
// Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total.

// Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10.
// Es necesario hacer las validaciones pertinentes en tu código para que no se rompa esta regla de negocio.

// RETO EXTRA PLUS:
// Si ya posees conocimientos de desarrollo web con html, css y javascript. Haciendo uso del DOM crea una interfaz con html y css que maneje toda la interacción descrita arriba