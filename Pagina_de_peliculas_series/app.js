// alert ("Registrese o inicie sesión, por favor")

// D O M

// Datos del usuario ya registrado anteriormente
const usurioRegistradoEmail = "usuario@gmail.com"
const usurioRegistradoContrasena = "usuario123"

// busco por id los inputs y botones
let email = document.getElementById("email")
let contrasena = document.getElementById("contrasena")
let iniciarSesionBoton = document.getElementById("iniciarSesion")
let registrarse = document.getElementById("registrarse")

let confirmarInicio = () => {
    // guardamos el valor que escribió en el input el usuario, dentro de una variable
        var emailRes = email.value;
        var constrasenaRes = contrasena.value
        // si coincide el valor escrito por el usuario con el valor del usuario ya registrado entonces se redirecciona a la página principal, sin, se manda un alert
    if (emailRes == usurioRegistradoEmail && constrasenaRes=== usurioRegistradoContrasena) {
        window.location.href = "./pagina_principal.html";
    }
    else {
        alert("noooo amigo, te equivocaste, vuelve a casa")
    }
}

// la funcion confirmarInicio() solo courrirá cuando el boton de inicio de sesión se clickee
iniciarSesionBoton.onclick = () => {
    confirmarInicio()
}
// // V A R I A B L E S
// var nombre
// var contrasena
// var gmail
// function registrarse(){
//     nombre = window.prompt("Ingrese su nombre")
//     gmail = window.prompt("Ingrese su gmail")
//     contrasena = window.prompt("Ingrese un contraseña")
//     alert ("Te registraste con éxito.")
// }
// function iniciar_sesion(){
//     let i_gmail = window.prompt("Ingrese su gmail")
//     let i_contrasena = window.prompt("Ingrese su contraseña")
//         if (i_gmail == gmail && i_contrasena == contrasena) {
//             alert("Su gmail y/o contraseña son correctos owo")
//             window.location.replace("./pagina_principal.html")
//         } else {
//             alert("Su gmail y/o contraseña son incorrectos.")
// }
// }

// function chupetines(){
//     let eleccion = window.confirm("Queres comprar los chupetines?")
//      if (eleccion === true){
//          let cantidad = window.prompt("Cuantos queres?")
//          let precio = 30;
//          let total = parseInt(cantidad) * precio;
//          alert("Serian " + total + "$");
//          alert("Gracias vuelvas prontos saluda")
//      }
//      else{
//          alert("Gracias vuelvas prontos saluda")
//      }
//  }
//  function algodon(){
//      let eleccion = window.confirm("Queres comprar los algodones?")
//       if (eleccion === true){
//           let cantidad = window.prompt("Cuantos queres?")
//           let precio = 50;
//           let total = parseInt(cantidad) * precio;
//           alert("Serian " + total + "$");
//           alert("Gracias vuelvas prontos saluda")
//       }
//       else{
//           alert("Gracias vuelvas prontos saluda")
//       }
//   }
//   function paletas(){
//      let eleccion = window.confirm("Queres comprar las paletas?")
//       if (eleccion === true){
//           let cantidad = window.prompt("Cuantas queres?")
//           let precio = 25;
//           let total = parseInt(cantidad) * precio;
//           alert("Serian " + total + "$");
//           alert("Gracias vuelvas prontos saluda")
//       }
//       else{
//           alert("Gracias vuelvas prontos saluda")
//       }
//   }
//   function caramelos(){
//      let eleccion = window.confirm("Queres comprar los caramelos?")
//       if (eleccion === true){
//           let cantidad = window.prompt("Cuantos queres?")
//           let precio = 10;
//           let total = parseInt(cantidad) * precio;
//           alert("Serian " + total + "$");
//           alert("Gracias vuelvas prontos saluda")
//       }
//       else{
//           alert("Gracias vuelvas prontos saluda")
//       }
//   }
//   function rosquillas(){
//      let eleccion = window.confirm("Queres comprar las rosquillas?")
//       if (eleccion === true){
//           let cantidad = window.prompt("Cuantas queres?")
//           let precio = 70;
//           let total = parseInt(cantidad) * precio;
//           alert("Serian " + total + "$");
//           alert("Gracias vuelvas prontos saluda")
//       }
//       else{
//           alert("Gracias vuelvas prontos saluda")
//       }
//   }
//   function cereal(){
//      let eleccion = window.confirm("Queres comprar el cereal?")
//       if (eleccion === true){
//           let cantidad = window.prompt("Cuantos queres?")
//           let precio = 355;
//           let total = parseInt(cantidad) * precio;
//           alert("Serian " + total + "$");
//           alert("Gracias vuelvas prontos saluda")
//       }
//       else{
//           alert("Gracias vuelvas prontos saluda")
//       }
//   }
//   function waffles(){
//      let eleccion = window.confirm("Queres comprar los waffles?")
//       if (eleccion === true){
//           let cantidad = window.prompt("Cuantos queres?")
//           let precio = 150;
//           let total = parseInt(cantidad) * precio;
//           alert("Serian " + total + "$");
//           alert("Gracias vuelvas prontos saluda")
//       }
//       else{
//           alert("Gracias vuelvas prontos saluda")
//       }
//   }
//   function squisher(){
//      let eleccion = window.confirm("Queres comprar la legendaria Squisher?")
//       if (eleccion === true){
//           let cantidad = window.prompt("Cuantas queres?")
//           let precio = 250;
//           let total = parseInt(cantidad) * precio;
//           alert("Serian " + total + "$");
//           alert("Gracias vuelvas prontos saluda")
//       }
//       else{
//           alert("Gracias vuelvas prontos saluda")
//       }
//   }

/* INICIO DE CARRITO */

const carrito = [];
const ValoresPeliculas = [
    250,
    300,
    500,
    550,
    600,
    450,
    700,
    340,
    470,
    640,
    560,
    300
]
const ValoresSeries = [
    350,
    500,
    800,
    750,
    600,
    850,
    500,
    840,
    770,
    940,
    560,
    600
]
const Peliculas = [
    'Corre',
    'Volver al Futuro',
    'Avengers',
    'Harry Potter y el prisionero de azkaban',
    'Busqueda implacable',
    'Halloween kills',
    'Bajo la misma estrella',
    'Coco',
    'Siempre a tu lado',
    'Hasta el ultimo hombre',
    'Grandes heroes',
    'Yo antes de ti'
]
const Series = [
    'La casa de papel',
    'Stranger things',
    'Friends',
    'Game of thrones',
    'El juego del calamar',
    'Mr robot',
    'How i met your mother',
    'The rain',
    'Dama de gambito',
    'Sex education',
    'Love on the Spectrum',
    'Peaky Blinders'
]
let factura = 0
function carritoCompra() {
    var eleccion = confirm("Que desea comprar:\n Peliculas (Clickear Aceptar)\n Series (Clickear Cancelar")
    if (eleccion === true) {
        do {
            var compraPeli = prompt("Ingrese el numero dependiendo de la pelicula \n 1:Corre \n 2:Volver al futuro \n 3:Avengers \n 4:Harry potter \n 5:Busqueda implacable \n 6:Halloween kills \n 7:Bajo la misma estrella \n 8:Coco \n 9:Siempre a tu lado \n 10:Hasta el ultimo hombre \n 11:Grandes heroes \n 12:Yo antes de ti")
            switch (compraPeli) {
                case "1":
                    var pelicula1 = confirm("La pelicula cuesta $250, Queres comprarla?")
                    if (pelicula1 === true) {
                        factura += ValoresPeliculas[0]
                        carrito.push(Peliculas[0])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "2":
                    var pelicula2 = confirm("La pelicula cuesta $300, Queres comprarla?")
                    if (pelicula2 === true) {
                        factura += ValoresPeliculas[1];
                        carrito.push(Peliculas[1])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "3":
                    var pelicula3 = confirm("La pelicula cuesta $500, Queres comprarla?")
                    if (pelicula3 === true) {
                        factura += ValoresPeliculas[2];
                        carrito.push(Peliculas[2])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "4":
                    var pelicula3 = confirm("La pelicula cuesta $550, Queres comprarla?")
                    if (pelicula3 === true) {
                        factura += ValoresPeliculas[3];
                        carrito.push(Peliculas[3])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "5":
                    var pelicula3 = confirm("La pelicula cuesta $600, Queres comprarla?")
                    if (pelicula3 === true) {
                        factura += ValoresPeliculas[4];
                        carrito.push(Peliculas[4])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "6":
                    var pelicula3 = confirm("La pelicula cuesta $450, Queres comprarla?")
                    if (pelicula3 === true) {
                        factura += ValoresPeliculas[5];
                        carrito.push(Peliculas[5])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "7":
                    var pelicula3 = confirm("La pelicula cuesta $700, Queres comprarla?")
                    if (pelicula3 === true) {
                        factura += ValoresPeliculas[6];
                        carrito.push(Peliculas[6])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "8":
                    var pelicula3 = confirm("La pelicula cuesta $340, Queres comprarla?")
                    if (pelicula3 === true) {
                        factura += ValoresPeliculas[7];
                        carrito.push(Peliculas[7])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "9":
                    var pelicula3 = confirm("La pelicula cuesta $470, Queres comprarla?")
                    if (pelicula3 === true) {
                        factura += ValoresPeliculas[8];
                        carrito.push(Peliculas[8])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "10":
                    var pelicula3 = confirm("La pelicula cuesta $640, Queres comprarla?")
                    if (pelicula3 === true) {
                        factura += ValoresPeliculas[9];
                        carrito.push(Peliculas[9])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "11":
                    var pelicula3 = confirm("La pelicula cuesta $560, Queres comprarla?")
                    if (pelicula3 === true) {
                        factura += ValoresPeliculas[10];
                        carrito.push(Peliculas[10])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "12":
                    var pelicula3 = confirm("La pelicula cuesta $300, Queres comprarla?")
                    if (pelicula3 === true) {
                        factura += ValoresPeliculas[11];
                        carrito.push(Peliculas[11])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                default:
                    alert("Mastodonte ingresa un numero del 1 al 10, Capichi?")
                    break;
            }
            var confirmar = confirm("Desea comprar algo mas?");
        } while (confirmar === true);
    } else {
        do {
            var compraSerie = prompt("Ingrese el numero dependiendo de la serie \n 1:Lupin\n 2:Friends \n 3:La casa de papel")
            switch (compraSerie) {
                case "1":
                    var series1 = confirm("La serie cuesta $150, Queres comprarla?")
                    if (series1 === true) {
                        factura += valor1
                        carrito.push(serie1)
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "2":
                    var series2 = confirm("La serie cuesta $400, Queres comprarla?")
                    if (series2 === true) {
                        factura += valor2;
                        carrito.push(serie2)
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "3":
                    var series3 = confirm("La serie cuesta $350, Queres comprarla?")
                    if (series3 === true) {
                        factura += valor3;
                        carrito.push(serie3)
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                default:
                    alert("Mastodonte ingresa un numero del 1 al 10, Capichi?")
                    break;
            }
            var confirmar2 = confirm("Desea comprar algo mas?");
        } while (confirmar2 === true);
    }
    alert("Compraste estos films: " + carrito + "\n" + "El precio final es: " + factura + " pesos")
}