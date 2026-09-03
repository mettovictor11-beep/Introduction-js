let age = 10;

if(age >= 18  && age <= 150){
    console.log("You can vote!");
} else if (age > 150 || age <= 0) {
    console.log("Invalid age");
} else {
    console.log("You are too young to vote");
}
let day = "Monday";
switch(day){
    case "Monday":
        console.log("Today is Monday");

        case "Tuesday":
        console.log("Today is Tuesday");
         
        case "Wednesday":
        console.log("Today is Wednesday");
        
        case "Thursday":
        console.log("Today is Thursday");
        
        case "Friday":
        console.log("Today is Friday");
        
        case "Saturday":
        console.log("Today is Saturday");
        
        case "Sunday":
        console.log("Today is Sunday");
        
        default:
            console.log("Holiday");
}
let name="admin";
switch(name){
    case "admin":
        console.log("You are the administrator");
        
    case "user":
        console.log("You are a regular user");
        
    default:
        console.log("Guest user");
}
let isDarkMode = true;
console.log(!isDarkMode ? "Dark mode is enabled" : "Dark mode is disabled");

// loginEmail == registeredEmail && loginPassword == registeredPassword //scenario 2

let registeredEmail = "victor@gmail.com"
let registeredPassword = 2547

let loginEmail = "victor@gmail.com"
let loginPassword =  2547

if(loginEmail ==""){
    console.log("Email should not be empty");
}else if(loginPassword ==""){
    console.log("Password should not be empty");
}else if(loginEmail == registeredEmail && loginPassword == registeredPassword){
    console.log("Login successful");
}else{
    console.log("Invalid email or password");
}
