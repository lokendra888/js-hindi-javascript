//var c =300;
let a =300
const b = 200
if(true){
    let a =10
    const b = 20
    //  var c =30
    // console.log(a)
    // console.log(b)

}
// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username= "Lokendra"
    
    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website)

    two();
}

// one();

if(true){
    const username = "Lokendra"
    if(username === "Lokendra"){
        const website = "youtube"
        // console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)

//++++++both are function intersting+++++++++++++++
console.log(addOne(5)) // not errro
function addOne(value){
    return value + 1
}

console.log(addTwo(5)) //error
const addTwo = function(num){
    return num +2
}

