// arrays

const heros  = ["hero","marvels","bhagat"]
const dcHero = ["superman","shaktiman"]

// heros.push(dcHero);
// console.log(heros[3][0])


// const newHero = heros.concat(dcHero)
// console.log(newHero)

const newallHero = [...heros,...dcHero]
// console.log(newallHero)

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realanotherArray = anotherArray.flat(Infinity)
console.log(realanotherArray)

// console.log(Array.isArray("lokendra"))
console.log(Array.from({name:"lokendra",surname:"birla"})) //intersting

let score1= 100
let score2 =200
let score3 = 300
console.log(Array.of(score1,score2,score3))