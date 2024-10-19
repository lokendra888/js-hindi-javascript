// Immediately Invoked Function Expressions IIFE 

(function chai() {
    // name iife
    console.log(`DB connected`)
})();

(function chai() {
    // name iife
    console.log(`DB connected two`)
})();

((user) => {
    console.log(`Db connected 44 ${user}`)
})("lokendra")