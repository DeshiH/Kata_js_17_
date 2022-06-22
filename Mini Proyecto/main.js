// Mini Proyecto: Cajero Automático

// Crea una aplicación web con JavaScript donde simulemos la interacción con un cajero automático.

// Al ingresar al cajero, puedes seleccionar la cuenta con la que deseas interactuar. Deben existir al menos tres cuentas. Para esto, puedes trabajar con un arreglo de objetos como el siguiente:

let cuentas = [
    { nombre: "Hiromi", saldo: 200, password: 'helloworld' },
    { nombre: "Luis", saldo: 290, password: 'l33t' },
    { nombre: "Carlos", saldo: 67, password: '123' }
];

// function consultarSaldo(posicionUsuario) {
//     alert('El saldo del usuario ' + cuentas[posicionUsuario].nombre + ' es de $' + cuentas[posicionUsuario].saldo);
//     mostrarMenu(posicionUsuario)
// }

// function depositar(posicionUsuario) {
//     let ingreso = prompt("Escribe tu ingreso:")
//     ingreso = Number(ingreso)
//     cuentas[posicionUsuario].saldo = cuentas[posicionUsuario].saldo + ingreso;
//     mostrarMenu(posicionUsuario);
// }

// function retirar(posicionUsuario) {
//     let retiro = prompt("Escribe cuánto quieres retirar:")
//     retiro = Number(retiro)
//     cuentas[posicionUsuario].saldo = cuentas[posicionUsuario].saldo - retiro;
//     mostrarMenu(posicionUsuario);
// }

// Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10.
// Es necesario hacer las validaciones pertinentes en tu código para que no se rompa esta regla de negocio.


// ---------------------------------------------------------------------------

// FUNCIONES NUEVAS ADAPTADAS AL DOM (HTML)

function ingresar() {
    // Tomar datos de los inputs
    let usuario = document.getElementById("usuario").value;
    let contrasenia = document.getElementById('contrasenia').value;

    // alert('El usuario del input es: ' + usuario + ' y la contraseña es: ' + contrasenia);

    // Validar los datos de los inputs
    validarUsuarioLogin(usuario, contrasenia);
}

function validarUsuarioLogin(usuario, contra) {
    let usuarioValido = false;
    for (let i = 0; i < cuentas.length; i++) {
        if (usuario === cuentas[i].nombre && contra === cuentas[i].password) {
            // Definir qué pasará si son correctos
            alert('DATOS CORRECTOS');
            usuarioValido = true;
            mostrarMenuHTML(i)
            return
        }
    }
    // Definir qué pasará si son incorrectos
    if (!usuarioValido) {
        alert('Datos incorrectos');
    }
}

function mostrarMenuHTML(posicionUsuario) {

    // Ocultar Login
    document.getElementById("inicio").style.display = "none";

    // Mostrar menú opciones
    document.getElementById("acciones").style.display = "block";

    // Mostrar nombre en el saludo
    // 1. obtener elemento a modificar a través de su id e insertar el nombre del usuario actual
    document.getElementById("nombre-usuario").innerText = cuentas[posicionUsuario].nombre


    // Añadir funciones a los botenes desde Js, con ayuda de addEventListener
    // Consultar saldo


    document.getElementById('consultar').addEventListener('click', function() {

        document.getElementById('info').innerText = 'Tu saldo es de : $' + cuentas[posicionUsuario].saldo
    });
    // alert('El saldo actual es de: $' + cuentas[posicionUsuario].saldo);
    // No usar un alert poner el saldo a consultar en un elemento HTML
    // Opc1. Crear un elemento HTML

    // Opc2. El elemento ya está creado en el HTML y sólo lo rellenamos
    // Contruir el resto de funciones para los botones




    document.getElementById('deposito').addEventListener('click', function() {




        let ingreso = document.getElementById('depositar').value
        ingreso = Number(ingreso)
        cuentas[posicionUsuario].saldo = cuentas[posicionUsuario].saldo + ingreso;
        // mostrarMenuHTML(posicionUsuario);
        // document.getElementById('info2').innerText = 'Tu deposito es de : $' + ingreso
        alert('Tu deposito fue de: $' + ingreso)
        document.getElementById('depositar').style.display = "none";






    });




    document.getElementById("retirar").addEventListener('click', function() {

        let retiro = document.getElementById('retiro').value
        retiro = Number(retiro)
        cuentas[posicionUsuario].saldo = cuentas[posicionUsuario].saldo - retiro;

        alert('Tu retiro fue de: $' + retiro)

        document.getElementById('retiro').style.display = "none";

        // document.getElementById('info1').innerText = 'Tu retiro es de: $' + retiro

        // alert('El saldo actual es de: $' + cuentas[posicionUsuario].saldo)

        // document.getElementById("info1").innerText = 'Cuanto quieres retirar' + cuentas[posicionUsuario].saldo - retiro;

    });



    // document.getElementById('salida').addEventListener('click', function() {
    //     document.getElementById("salir").style.display = "exit";
    //     return exit
    // });


}


// function retirarSaldoHTML(posicionUsuario) {
//     document.getElementById('retiro').addEventListener('click', function() {

//         // // mostrarMenuHTML(posicionUsuario);
//         document.getElementById("info1").innerText = 'Cuanto quieres retirar' + retiro;
//         alert("Escribe cuánto quieres retirar:")
//         retiro = Number(retiro);
//         cuentas[posicionUsuario].saldo = cuentas[posicionUsuario].saldo - retiro;


//     })



// En lugar de usar esta función se construyó con un addEventListener 
// function consultarSaldoHTML(posicionUsuario) {
//     alert('El saldo actual es de: $' + cuentas[posicionUsuario].saldo);
// }

// function retirarSaldoHTML(posicionUsuario) {
//     // Limpiar el texto info
//     document.getElementById("info1").innerText = '';
//     alert('retirar de saldo');
// }

// function ingresarSaldoHTML(posicionUsuario) {
//     document.getElementById('info2').innerText = '';
//     alert('ingresar de saldo');
// }