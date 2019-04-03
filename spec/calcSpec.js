//Refactor code to work with new object
//Test related to the Calculator object
describe("Calculator", function() {
 
 //Create fresh instance of the object for every test we run
 beforeEach(function(){
  calc = new Calculator;
 });
 
 var calc = new Calculator;
 
 describe("Addition test", function() {
     it("should return 42", function() {
         calc.add(20);
         calc.add(22);
         expect(calc.value).toBe(42);
     });
     it("should return 26", function() {
         calc.add(7);
         calc.add(19);
         expect(calc.value).toBe(26);
     });
     it("should return an error if we dont suplly two numbers", function() {
         spyOn(window, "alert");
         calc.add("Hitchhikers");
         expect(window.alert).toHaveBeenCalledWith("Error!");
     })
 });
});

//Challenge write some test for the Drink About game
describe("whatCanIDrink", function() {
    describe("Age test", function() {
        it("age less then 0 should return Sorry. I can’t tell what drink because that age is incorrect!", function(){
         expect(whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("age less then 14 should return Drink Toddy", function(){
         expect(whatCanIDrink(13)).toBe("Drink Toddy");
        });
        it("age less then 18 should return Drink Coke", function(){
         expect(whatCanIDrink(17)).toBe("Drink Coke");
        });
        it("age less then 21 should return Drink Beer", function(){
         expect(whatCanIDrink(20)).toBe("Drink Beer");
        });
        it("age less then 130 should return Drink Whiskey", function(){
         expect(whatCanIDrink(129)).toBe("Drink Whiskey");
        });
    })
    
})

//Test related to the function addtion
/*
describe("Calculator", function() {
 describe("Addition test", function() {
     it("should return 42", function() {
         expect(addition(20, 22)).toBe(42);
     });
     it("should return 26", function() {
         expect(addition(7, 19)).toBe(26);
     });
     it("should return an error if we dont suplly two numbers", function() {
         // expect(addition("Hitchhikers", "Guide")).toBe("Error!");
         spyOn(window, "alert");
         addition("Hitchhikers", "Galaxy");
         expect(window.alert).toHaveBeenCalledWith("Error!");
     })
 });
});
*/