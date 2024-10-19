// const userEmail = "lokendra@ai.com"
const userEmail = []

if (userEmail) {
    console.log("got user email")
} else {
    console.log("dont have user email")
}

// falsy value
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

//truthly
//  "0", 'false', " ",[], {}, function(){},

// if (userEmail.length === 0) {
//     console.log("Array is empty")
// }

// const emptyObje = {}
// if (Object.keys(emptyObje).length === 0) {
//     console.log("Obje is empty")
// }

// **** Nullish coalescing operator (??): null undefined

let val1, val2
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

//****Ternary operator   */

// condition ? true : false;
const icePrice = 100
icePrice <= 80 ? console.log("less than 80") : console.log("greater than 80");
