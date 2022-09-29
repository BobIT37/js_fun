
temperature = 29;

if (temperature < 20){
    console.log("it is very cold outside");
}
if(temperature < 30){
    console.log("it is moderate outside");
} else{
    console.log("it is really hot outside");
}

//Ternary
const exactTemp = temperature < 20 ? "Hot" : "Cold";
console.log(exactTemp);

// condition ? exprIfTrue : exprIfFalse
