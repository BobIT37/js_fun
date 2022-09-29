
var authenticated = true;

if (authenticated){
    console.log("Show signout button");
}else{
    console.log("Show login option");
}

//Ternary
const authendticatedUser = authenticated ? "Show signout button" : "Show login option";
console.log(authendticatedUser)