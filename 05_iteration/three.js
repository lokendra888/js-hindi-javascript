// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4]


for (const num of arr) {
    // console.log(num)
}


const greeting  = "Hello worlds"
for (const greet of greeting) {
        //console.log(`greet is ${greet}`)
}

//Map

const map = new Map();
map.set("IN","India")
map.set("USA","Unitead state of america")
map.set("Fr","France")
map.set("IN","India")

console.log(map)

for (const [key,value] of map) {
    // console.log(key,':-',value)
}

const myObje = {
    game1:'NFS',
    game2:'Football',
    game3:'Cricket',
}

// for (const [key,value] of myObje) {
//     console.log(key,':-',value)
// }