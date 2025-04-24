console.log('jQuery versión:', $.fn.jquery);
console.log('Bootstrap Modal existe?', typeof bootstrap.Modal);

//Variables en js pueden usar "let (variable modificafle)" o "var"
let edad=30
let edad2= 25
var nombre= "Juan"
const rut="19.092.198-0"

console.log(edad)

let texto="texto prueba"
let numero=2
let esEstudiante= true
let nulo=null
let indefinido;
let numGrande= 123123123129312318312731313131283;

var modulo= 10%5
console.log(modulo)

//Estructuras de control (if y else)
var nota=70
if (nota>=90) {
    console.log("excelente")
}
else if (nota>=60) {
    console.log("aprobado")
}
else {
    console.log("reprobado")
}

//Bucles (for)
for (let indice =0; indice<10; indice++) {
    console.log("indice= ", indice)
}


//Manipulación del DOM

const div_test = document.getElementById("div_test")
div_test.innerHTML ="<p>Hola desde JS</p>"

const div= document.getElementById("div")
const btn= document.getElementById("btn")

btn.addEventListener("click", () => {
    div.style.backgroundColor="red"
})


var miNombre = prompt("Escribe tu nombre: ")
alert ("mi nombre es: "+miNombre)