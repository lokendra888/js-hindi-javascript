const coding = ["js","ruby","java","python","cpp"]


// coding.forEach(function(item){
//     // console.log(item);
    
// })
// coding.forEach((element) => {
//     console.log(element)
// });

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach((item,index, arr)=>{
//     console.log(item, index , arr)
// })

const myCoding = [
    {
        languageName:"Javascript",
        languageFile:"js"
    },
    {
        languageName:"Java",
        languageFile:"java"
    },{
        languageName:"Python",
        languageFile:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
})