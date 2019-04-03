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

//Age test program Drink about game
function whatCanIDrink(age){
    if(age < 0){
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    } else if(age < 14){
        return "Drink Toddy";
    } else if(age < 18){
        return "Drink Coke";
    } else if(age < 21){
        return "Drink Beer";
    } else if(age < 130){
        return "Drink Whiskey";
    } else {
        return "Sorry. I can’t tell what drink because that age is incorrect!";
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