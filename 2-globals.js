//GLOBALS  - NO WINDOWS !!!
//GLOBALS : can access anywhere in application
// __ dirname - path to current directory
// require - function to use modules (CommanJS)
//process - info about env where program is being executed
console.log(__dirname)

setInterval(() => {
    console.log('hello');
},1000)