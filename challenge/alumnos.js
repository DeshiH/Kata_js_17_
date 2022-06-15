let info = [{
        nombre: "Diego",
        materias: [{
                nombreMateria: "español",
                calificacion: 100,
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 70,
            },
            {
                nombreMateria: "ciencias",
                calificacion: 55,
            },
        ],
    },
    {
        nombre: "Jorge",
        materias: [{
                nombreMateria: "español",
                calificacion: 60,
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 65,
            },
            {
                nombreMateria: "ciencias",
                calificacion: 80,
            },
        ],
    },
];

let sumatoria = 0;

// 1.- Ingresar nombre

function login(_info) {
    // 1. Elegir usuario.
    let usuario = prompt("Escribe tu nombre");
    validarUsuario(usuario);
}

function validarUsuario(usuario) {
    for (let i = 0; i < info.length; i++) {
        // console.log(cuentas[i].nombre);
        if (usuario === info[i].nombre) {
            // Usuario existe
            console.log("sí");
            mostrarMenu(i);
            return;
        } else {
            console.log("Usuario incorrecto");
        }
    }
}

login();



// 2.- Verán un menú de opciones
function mostrarMenu(posicionUsuario) {
    let opcion = prompt(
        "Indica una opción:\n 1. ver todas mis calificaciones\n 2. Conocer mi promedio \n 3. Conocer mi calificacion mas alta \n4. Conocer mi calificacion mas baja \n 5. Salir"
    );

    if (opcion == 1) {
        todasmisCalificaciones(posicionUsuario);
    } else if (opcion == 2) {
        promedio(posicionUsuario);
    } else if (opcion == 3) {
        calificacionMasalta(posicionUsuario);
    } else if (opcion == 4) {
        calificacionMasbaja(posicionUsuario);
    } else if (opcion == 5) {
        ("adiós");
        return;
    } else {
        alert("opción inválida");
        mostrarMenu(posicionUsuario);
    }
}

// 1. Ver todas su calificaciones.

function todasmisCalificaciones(posicionUsuario) {
    alert(
        "Tus calificaciones son :" +
        "\n" +
        info[posicionUsuario].materias[0].nombreMateria +
        "--" +
        info[posicionUsuario].materias[0].calificacion +
        "\n" +
        info[posicionUsuario].materias[1].nombreMateria +
        "--" +
        info[posicionUsuario].materias[1].calificacion +
        "\n" +
        info[posicionUsuario].materias[2].nombreMateria +
        "--" +
        info[posicionUsuario].materias[2].calificacion
    );
    mostrarMenu(posicionUsuario);
}

// 2. Conocer su promedio.

function promedio(posicionUsuario) {

    for (let i = 0; i < info[posicionUsuario].materias.length; i++) {
        sumatoria = sumatoria + info[posicionUsuario].materias[i].calificacion / 3;

    }
    alert("Tu promedio es:" + sumatoria);
    mostrarMenu(posicionUsuario);
}

// 3. Conocer su calificación más alta.


function calificacionMasalta(posicionUsuario) {
    alert('Tu calificacion mas alta es:' + '\n' + info[posicionUsuario].materias[0].nombreMateria +
        "--" +
        info[posicionUsuario].materias[0].calificacion +
        "\n" + masAlta)

    mostrarMenu(posicionUsuario);

}



// 4. Conocer su calificación más baja.
function calificacionMasbaja(posicionUsuario) {

    alert('Tu calificacion mas baja es:' + '\n' + info[posicionUsuario].materias[0].nombreMateria +
        "--" +
        info[posicionUsuario].materias[0].calificacion +
        "\n")
    Math.min(info[posicionUsuario].calificacion);

    mostrarMenu(posicionUsuario);
}

// Math.min.apply(...info)
// Math.max.apply(...info)