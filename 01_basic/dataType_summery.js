// Primitive Types
// type 7 - String , Number, BigInt , null , unfined, Symbol, Boolean

const score = 100;
const scoreValue = 22.2

const isLoggin =false
const outSideMap = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id == anotherId);

// const bigNumber = 122323232323n


// Refrence type (non primitive type)

// Array , Object , Function

const heros = ["shaktiman","shivaji","bhakatsingh"]
let myObj = {
    name:"lokendra",
    age:23
}

const myfunction = function(){
    console.log("hello world")
} //  function object
console.log(typeof myObj)
// JavaScript is a dynamically typed language.
// Because data type will automatically assigned at the time of compilation or code execution.