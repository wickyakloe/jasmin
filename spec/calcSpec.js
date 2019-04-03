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