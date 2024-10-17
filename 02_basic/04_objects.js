// const tenderUser = new Object()

const tenderUser = {}
tenderUser.id=12
tenderUser.name="lucky"
tenderUser.email ="lucky@gmail.com"
tenderUser.isLoggedin=false

// console.log(tenderUser)

const regularUser = {
    email:"lucky@gmail.com",
    fullName:{
        userName:{
            firstName:"lucky",
            lastName:"Birla"
        }
    }
}

// console.log(regularUser.fullName?.userName.firstName)

const obj1 ={1:"a",2:'b'}
const obj2 ={3:"a",4:'b'}
const obj3 ={5:"a",6:'b'}

// const obj4 = {obj1, obj2}
// const obj5 = Object.assign({},obj1,obj2,obj3)
const obj5 = {...obj1,...obj2,...obj3}

// console.log(obj4)
// console.log(obj5)

const users = [
    {name:"get",email:"lucky@gmail.com"},
    {name:"get",email:"lucky@gmail.com"},
    {name:"get",email:"lucky@gmail.com"},
    {name:"get",email:"lucky@gmail.com"},
    {name:"get",email:"lucky@gmail.com"},
]
// console.log(users[1].email)
// console.log(tenderUser)
// console.log(Object.keys(tenderUser))
// console.log(Object.values(tenderUser))
// console.log(Object.entries(tenderUser))
// console.log(tenderUser.hasOwnProperty('email'))


const course = {
    courseName:"Js-hindi",
    price:999,
    courseInstructor:"Lucky"

}

// course.courseInstructor
const {courseInstructor:instructor,price}= course
console.log(instructor)

// JSON
// {
//     "name":"lokendra",
// }

// {
//     {},
//     {},
//     {},
// }