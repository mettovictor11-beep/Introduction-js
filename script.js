console.log("HELLO WORLD");
let a=10;
console.log(a !== 10);

let isDarkMode = true;
if (isDarkMode) {
    console.log("Dark mode is enabled");
}else {
    console.log("Dark mode is disabled");
}
let age=21;
if (age>=18) {
    console.log("You are an adult");
} else {
    console.log("You are not an adult");
}
 //  cover data trypes avd variables if time allow
// console.log("HELLO WORLD This is sonia to the world")
// console.log(2789001+887992) 
/* Registration logic */


// Login logic 

// no one uses var anymore
// Var is function scooped
// Var can be redeclared and updated
{
var student = "sarah";
var student = "Johnstone";
}
// console.log(student)


// Let is most prefered
// let is block scoped, block means within curly braces {}
// let variables cannot be redclared  but can be updated
    let student_name = "Derrick";
    student_name = "Mark";
//     console.log(student_name)

// console.log(student_name)

// const for constant variable
// const cannot be redclared or updated
const first_name = "sonia"
// console.log(first_name)

let _student_name = "Jake"
let $firstName 
let student_Id  = 25.89907
console.log(typeof(student_Id))

// console.log($firstName)

// How to create a javascript object
let student_details = { 
    first_name:"sonia",
     age:20, 
     gender:" ", 
     course:"software",
     degree: true
    }
let student_data = {} //this is an empty object
let student_content //this is undefined variable

//  Expressions
// 1. Arthmetic expressions
let first_number = 23556
let second_number = 6688
result = first_number * second_number
// console.log(result)

let welcome_msg = "Welcome Back"
let message = "I am made for greatness"
let username = "Hannah"
let personalised_msg = welcome_msg + " " + username
console.log(personalised_msg)

// 2. Logical expressions
// LOGICAL AND &&
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// LOGICAL OR 
// true || true = true
// true || false = true
// false || true = true
// false || false = false

let loginEmail
let loginPassword
let registeredEmail
let registeredPassword

loginEmail == registeredEmail || loginPassword == registeredPassword //scenario 1
loginEmail == registeredEmail && loginPassword == registeredPassword //scenario 2

registeredEmail = "john@gmail.com"
registeredPassword = 12345678

loginEmail = "johndoe@gmail.com"
loginPassword =  12345678

//3. Functions
function greetings() {
    console.log("Hello and welcome to learning functions in Js")
}
greetings()


function addition(a,b) {
    console.log(a+b)
}
// addition(4,63)

let a = 10 // assignment operator
console.log(a !== "10")