//arrays

const myArr = [0,1,2,3,4,5]
const myHeros = ["comis","cat"]
const newArray = new Array(1,23,4,5,5)
// console.log(newArray[1])
//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(2))
// console.log(myArr.indexOf(6))

// const newArr = myArr.join();
// console.log(myArr)
// console.log(typeof newArr)

// slice , splice

console.log("A ",myArr)
const mya1 = myArr.slice(1,3)
console.log(mya1);

console.log("B ",myArr)
const mya2 = myArr.splice(1,3)
console.log("C ",myArr)
console.log(mya2)
