

function getMyname (){
    console.log("L")
    console.log("u")
    console.log("c")
    console.log("k")
    console.log("y")
}

// getMyname()
function addTwoNumber(numbers1, numbers2){
    // console.log(numbers1 + numbers2)
    let result = numbers1 + numbers2;
    return result
}

const result = addTwoNumber(2,5);
// console.log("Result "+ result)

function loginUserMessage (username ="same"){
    if(!username){
        // return 'please enter user name'
        console.log("please enter user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("lokendra"))
// console.log(loginUserMessage())
// console.log(loginUserMessage("lokendra"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500, 100))

const user = {
    username:'LOKENDRA',
    price:122
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
// console.log(handleObject(user))
handleObject({
    username:"sam",
    price:232
})

const myArray = [100,200,300]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([100,200,300]))