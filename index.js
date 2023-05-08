const number = document.getElementById("number")
const increase = document.getElementById("increase")
const reset = document.getElementById("reset")
const deacrese = document.getElementById("decrease")
let value = 0
number.innerText = 0

function increaseValue(){
    console.log("increase");
     value++;
     number.innerText=  value;
     ;
    
}

function deacreseValue(){
    value--;
    number.innerText=  value;
    console.log("decrease");
}

function resetValue(){
    value = 0;
    number.innerText=  value;
    console.log("reset");
}

increase.addEventListener("click", increaseValue)
reset.addEventListener("click", resetValue)
deacrese.addEventListener("click", deacreseValue)


console.log(value)





let probe = 0

function add1(){
    probe++
}

add1()
add1()
//console.log(probe)