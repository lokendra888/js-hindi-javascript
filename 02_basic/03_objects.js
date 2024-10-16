// singleton

/// object literals
// Object.create // contructor

const mySym = Symbol("key1")
const JsUser = {
    name:"Lokendra",
    "full name":"loekdnra biral",
    [mySym]:"ssss", // symbol use in object as key
    age:22,
    location:'Indore',
    email:"lokendra@gmail.com",
    isLoggin:false,
    lastLoggined : ['Monday',"Tuesday"]

}
// Object.freeze(JsUser) // it will not change the data

JsUser.email="chatgpt@gm";
// console.log(JsUser.name)
// console.log(JsUser.email)

// console.log(JsUser['name'])
// console.log(JsUser['full name'])
// console.log(JsUser[mySym])

JsUser.greetings = function(){
    console.log("Hello js user")
}
JsUser.greetings1 = function(){
    console.log(`Hello Js user ,${this.name}`)
}
console.log(JsUser.greetings1())