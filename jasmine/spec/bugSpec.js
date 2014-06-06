describe("Calculator", function () { /*Test Suite*/

	it("changes takes 1 away from the result between 10000 and 100000", function () {
        var calc = new calculator();
	
        calc.history.push ("12345");
		calc.history.push ("-");
		calc.history.push ("1");
		
        calc.pressButton("=");
        expect(calc.display).toEqual("12343");
			
	});
	
	it("errors if the number is larger than 9999999999", function () {
        var calc = new calculator();
	
        calc.history.push ("12345678904");
		calc.history.push ("-");
		calc.history.push ("1");
		
        calc.pressButton("=");
        expect(calc.display).toEqual("9999999999Err");
			
	});
	
	it("it multiplies a greater than three place floating point by a random value between 0 and 1", function () {
        var calc = new calculator();
	
        calc.history.push ("12.1231");
		calc.history.push ("-");
		calc.history.push ("1");
		
        calc.pressButton("=");
        expect(calc.display).not.toEqual("11.1231");
			
	});
	
	it("it does not multiplies a three place floating point by a random value between 0 and 1", function () {
        var calc = new calculator();
	
        calc.history.push ("12.123");
		calc.history.push ("-");
		calc.history.push ("1");
		        calc.pressButton("=");
        expect(calc.display).toEqual("11.123");
			
	});
	
});