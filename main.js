/**
 * Tipos de datos en JS
 * 
 * Principalmente son 3:
 * Booleans
 *    Los booleans pueden tener solo 2 valores: true or false
 * Numbers
 *    Numeros que pertenecen a los numeros reales
 * Strings
 *    Son cadenas de caracteres - Nombre completo de alguien, incluyendo espacios
 */

// // Definiendo booleans
// var miVariableBoolean = true
// var miVariableBoolean2 = false
// console.log("Imprimiendo booleans", miVariableBoolean, miVariableBoolean2)

// // Definiendo numeros
// var miNumero = -17
// var miNumero2 = 56
// var miNumero3 = 1815648916548
// var miNumero4 = -5162486156159
// var miNumeroDecimal = 0.15615618645
// var miNumeroDecimal2 = -0.459453486156
// console.log ("Imprimiendo numeros", miNumero, miNumero2, miNumero3, miNumero4, miNumeroDecimal, miNumeroDecimal2)

// // Definiendo strings 
// var miString1 = "Mi primer string"
// var miString2 = "Pueden contener numeros! como el 2, 3, 4, 5, 6 & % #"
// var miString3 = "2" 
// console.log("Imprimiendo strings", miString1, miString2, miString3) 

// var miNumero5 = Number(miString3)
// var miString4 = String(miNumeroDecimal2)

// var miNuevoNumero = Number(miString4)
// console.log(typeof miNuevoNumero)

// console.log("Suma:", 1+3)
// console.log("Restar:", 1-3)
// console.log("Multiplicar:", 9*3)
// console.log("Dividir:", 24/7)

// var suma = 5+5
// var mensajeParaElUsuario = "El resultado de la suma es: " + suma
// alert(mensajeParaElUsuario)

// var nombre = prompt("Ingresa tu nombre")
// var edad = prompt('Ingresa tu edad')

// alert("Hola! " + nombre + ", tienes " + edad + " años!")

/**
 * Crear un programa que consulte el nombre, apellido, edad y tambien le pregunte al usuario cuantos años mas quiere tener.
 */

var nombre = prompt("Hola, usuario. Cual es tu nombre?")
var apellido = prompt("Bien, " + nombre + ". Ahora, cual es tu apellido?")
var edad = prompt("Que buen nombre que es " + nombre + " " + apellido + ". Me podrias indicar tu edad?")
var añosAdicionales = prompt("Ahora " + nombre + ", cuantos años mas quisieras tener?")
var edadDeseada = Number(edad) + Number(añosAdicionales)
alert("Entonces, tu nombre es " + nombre + " " + apellido + ", tienes actualmente " + edad + " años, y quisieras alcanzar la edad de " + edadDeseada + ".")