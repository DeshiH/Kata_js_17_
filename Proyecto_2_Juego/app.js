let manos = ["piedra", "papel", "tijeras"];

let seleccionar = () => {
    let imagen = Math.floor(Math.random() * 3);
    switch (imagen) { //if y else if
        case 0:
            document.getElementById("opcion-cpu").src = "./piedra.jpeg";
            document.getElementById("piedra").value = "0";
            Score();
            return;

        case 1:
            document.getElementById("opcion-cpu").src = "./papel.jpeg";
            document.getElementById("papel").value = "1";
            Score();
            return;

        case 2:
            document.getElementById("opcion-cpu").src = "./tijeras.jpeg";
            document.getElementById("tijeras").value = "2";
            Score();
            return;
        default:
            alert("Something has gone wrong.");
            return;
    }

};

let scoreH = 0;
let scoreR = 0;

//Comparar el src de la imagen a la que le pique con la imagen que se puso

function Score() {
    if (2 > 0) {
        console.log('Gana tijeras')
    }

}

// function Score() {
//     if (2 > 1) {
//         console.log('Gana tijeras')
//     }

// }

// function Score() {
//     if (2 = 2) {
//         console.log("empate")
//     }
// }




// function seleccionar() {
//     // for (let i = 0; i < seleccionar.length; i++)
//     if (seleccionar === imagen[i].Math.random) {
//         alert('ganaste')
//     }
//     return
// };

//   for (let i = 0; i < manos.length; i++)
//     if (seleccionar === manos[i])
//       document.getElementById("ganador").innerText("Ganaste");