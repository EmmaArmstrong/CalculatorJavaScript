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
});