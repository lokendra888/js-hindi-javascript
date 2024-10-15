const name = "lokendra"
const repoCount=54
// console.log(name + repoCount + " Value")
// console.log(`my name is ${name} and repo is ${repoCount}`)

const gameName = new String("lokendra-birla-pp-s")

// console.log(gameName[0])
// console.log(gameName[0].__proto__)
console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.indexOf('o'));
// console.log(gameName.charAt(3));

const newgameName = gameName.substring(0,3)
console.log(newgameName);

const sliceName = gameName.substring(-8,5)
console.log(sliceName);

const newString = "  Hello go"
console.log(newString);
console.log(newString.trim());

const url="https://lokendra.com%20birla"

console.log(url.replace('%20','-'));
console.log(url.includes('lokendr2a'));
console.log(gameName.split("-"))


