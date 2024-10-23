const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc ${acc} and currentVal ${currval}`)
//     return acc + currval
// },0)

// const myTotal = myNums.reduce((acc,currval)=> acc+currval,0)

// console.log(myTotal)

const shoppingCart = [
    {
        iteamName:"js course",
        price:2999
    },
    {
        iteamName:"python",
        price:3999
    },
    {
        iteamName:"Mobile Application",
        price:5000
    },
    {
        iteamName:"Datascitens",
        price:12000
    }
]

const myTotal = shoppingCart.reduce((acc,item)=>(acc+ item.price),0)

console.log(myTotal)