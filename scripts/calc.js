//Calculator Object
Calculator = function() {
    this.value = 0;
}

//Add prototype to object
Calculator.prototype.add = function(number) {
    if (typeof(number) == "number"){
        this.value += number;
    } else {
        alert("Error!");
    }
}

/*
function addition(numOne, numTwo){
    if(typeof(numOne) == "number" && typeof(numTwo) == "number"){
        return numOne + numTwo;
    } else {
        // return "Error!";
        alert("Error!");
    }
}
*/