// Custom Javascript

const premiarEnVivoBtn = document.getElementById("premiarEnVivoBtn");
const resultadosVivoBtn = document.getElementById("resultadosVivoBtn");
const resultadosFestejosPasadosBtn = document.getElementById("resultadosFestejosPasadosBtn");

const myfirstMenu = document.getElementById("myfirstMenu");

const myResultadosVivo = document.getElementById("myResultadosVivo");
const myTableResultadosToreros = document.getElementById("myTableResultadosToreros");
const myTableResultadosToros = document.getElementById("myTableResultadosToros");
const myResultadoTorero = document.getElementById("myResultadoTorero");
const myResultadoToro = document.getElementById("myResultadoToro");

const myResultadosPasados = document.getElementById("myResultadosPasados");
const myTableResultadosPasados = document.getElementById("myTableResultadosPasados");
const myResultadosPasadosDetalle = document.getElementById("myResultadosPasadosDetalle");
const myResultadoPasadoToreroDetalle = document.getElementById("myResultadoPasadoToreroDetalle");
const myResultadoPasadoToroDetalle = document.getElementById("myResultadoPasadoToroDetalle");

const enviarToreroBtn = document.getElementById("enviarToreroBtn");
const volverBtn = document.getElementById("volverBtn");


premiarEnVivoBtn.addEventListener('click', function (event) {
    // console.log(premiarEnVivoBtn.innerText);
    // myfirstMenu.classList.add("d-none");
    // volverBtn.classList.remove("d-none");
})

resultadosVivoBtn.addEventListener('click', function (event) {
    console.log(resultadosVivoBtn.innerText);
    myfirstMenu.classList.add("d-none");
    myResultadosVivo.classList.remove("d-none");
    volverBtn.classList.remove("d-none");
})

myTableResultadosToreros.addEventListener('click', function (event) {
    console.log('Tabla Resul Vivo Torero click');
    myResultadosVivo.classList.add("d-none");
    myResultadoTorero.classList.remove("d-none");
})

myTableResultadosToros.addEventListener('click', function (event) {
    console.log('Tabla Resul Vivo Toro click');
    myResultadosVivo.classList.add("d-none");
    myResultadoToro.classList.remove("d-none");
})

resultadosFestejosPasadosBtn.addEventListener('click', function (event) {
    console.log(resultadosFestejosPasadosBtn.innerText);
    myfirstMenu.classList.add("d-none");
    myResultadosPasados.classList.remove("d-none");
    volverBtn.classList.remove("d-none");
})

myTableResultadosPasados.addEventListener('click', function (event) {
    console.log('Tabla Resultados Pasados click');
    myResultadosPasados.classList.add("d-none");
    myResultadosPasadosDetalle.classList.remove("d-none");
})

myTableResultadosPasadosToreros.addEventListener('click', function (event) {
    console.log('Tabla Resultados Pasados Toreros click');
    myResultadosPasadosDetalle.classList.add("d-none");
    myResultadoPasadoToreroDetalle.classList.remove("d-none");
    myResultadoPasadoToroDetalle.classList.add("d-none");
})

myTableResultadosPasadosToros.addEventListener('click', function (event) {
    console.log('Tabla Resultados Pasados Toros click');
    myResultadosPasadosDetalle.classList.add("d-none");
    myResultadoPasadoToroDetalle.classList.remove("d-none");
    myResultadoPasadoToreroDetalle.classList.add("d-none");
})

volverBtn.addEventListener('click', function (event) {
    console.log(volverBtn.innerText);
    myfirstMenu.classList.remove("d-none");
    myResultadosVivo.classList.add("d-none");
    myResultadoToro.classList.add("d-none");
    myResultadoTorero.classList.add("d-none");
    myResultadosPasados.classList.add("d-none");
    myResultadosPasadosDetalle.classList.add("d-none");
    myResultadoPasadoToreroDetalle.classList.add("d-none");
    myResultadoPasadoToroDetalle.classList.add("d-none");
    volverBtn.classList.add("d-none");
})


const toast = new bootstrap.Toast(liveToast); 

const selectGroup = document.getElementsByTagName("select");
 for (var i = 0; i < selectGroup.length; i++) {
    selectGroup[i].addEventListener("change", function() {
        console.log('Toast2');
        toast.show();
   });
 }

 // const calificarTorero1 = document.getElementById("calificarTorero1");
// calificarTorero1.addEventListener('change', function (event) {
//     console.log('Toast');
//     toast.show();
// })