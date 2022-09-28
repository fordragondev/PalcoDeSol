// Custom Javascript

const premiarBtn = document.getElementById("premiarBtn");
const resultadosVivoBtn = document.getElementById("resultadosVivoBtn");
const resultadosFestejosPasadosBtn = document.getElementById("resultadosFestejosPasadosBtn");

const myfirstMenu = document.getElementById("myfirstMenu");
const myPremiarMenu = document.getElementById("myPremiarMenu");

const myResultadosVivo = document.getElementById("myResultadosVivo");
const myTablePremiosTorero = document.getElementById("myTablePremiosTorero");
const myTablePremiosToro = document.getElementById("myTablePremiosToro");
const myResultadoTorero = document.getElementById("myResultadoTorero");
const myResultadoToro = document.getElementById("myResultadoToro");

const myResultadosPasados = document.getElementById("myResultadosPasados");
const myTableResultadosPasados = document.getElementById("myTableResultadosPasados");
const myResultadoPasadoTorero = document.getElementById("myResultadoPasadoTorero");
const myResultadoPasadoToro = document.getElementById("myResultadoPasadoToro");

const enviarToreroBtn = document.getElementById("enviarToreroBtn");
const volverBtn = document.getElementById("volverBtn");


premiarBtn.addEventListener('click', function (event) {
    console.log(premiarBtn.innerText);
    myfirstMenu.classList.add("d-none");
    myPremiarMenu.classList.remove("d-none");
    volverBtn.classList.remove("d-none");
})

resultadosVivoBtn.addEventListener('click', function (event) {
    console.log(resultadosVivoBtn.innerText);
    myfirstMenu.classList.add("d-none");
    myResultadosVivo.classList.remove("d-none");
    volverBtn.classList.remove("d-none");
})

myTablePremiosTorero.addEventListener('click', function (event) {
    console.log('Tabla Premios Torero click');
    myResultadosVivo.classList.add("d-none");
    myResultadoTorero.classList.remove("d-none");
})

myTablePremiosToro.addEventListener('click', function (event) {
    console.log('Tabla Premios Toro click');
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
    myResultadoPasadoTorero.classList.remove("d-none");
    myResultadoPasadoToro.classList.remove("d-none");
    myResultadosPasados.classList.add("d-none");
})

volverBtn.addEventListener('click', function (event) {
    console.log(volverBtn.innerText);
    myfirstMenu.classList.remove("d-none");
    myPremiarMenu.classList.add("d-none");
    myResultadosVivo.classList.add("d-none");
    myResultadoToro.classList.add("d-none");
    myResultadoTorero.classList.add("d-none");
    myResultadosPasados.classList.add("d-none");
    myResultadoPasadoTorero.classList.add("d-none");
    myResultadoPasadoToro.classList.add("d-none");
    volverBtn.classList.add("d-none");
})


// const myModalPremiarTorero = document.getElementById('premiarTorerosModal');
// const modalTorero = new bootstrap.Modal.getInstance(myModalPremiarTorero);

// enviarToreroBtn.addEventListener('shown.bs.modal', function () {
//     modalTorero.hide();
// })



// const myButton = new bootstrap.Button('#myButton');
// var calificarTorero1 = document.getElementById('calificarTorero1');
// calificarTorero1.addEventListener('change', function () {
//     console.log(calificarTorero1.value);
// })

// const premiarToreroBtn = document.getElementById("premiarTorerosBtn");
// const premiarToroBtn = document.getElementById("premiarTorosBtn");


// const otroButton = document.getElementById("otroButton");

// otroButton.addEventListener('click', ({ target }) => {
//     console.log(target.innerText);
// })



// myElements = document.getElementsByTagName("p");
// myElement = document.getElementById("id01");
// myElements = document.getElementsByClassName("intro");
// myElements = document.querySelectorAll("p.intro");


//const myModal = new bootstrap.Modal(document.getElementById('myModal'));


// var myModal = document.getElementById('myModal')

// myModal.addEventListener('show.bs.modal', function (event) {
//   if (!data) {
//     return event.preventDefault() // stops modal from being shown
//   }
// })
