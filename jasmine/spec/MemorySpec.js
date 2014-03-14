describe("Calculator Memory Tests", function () { /*Test Suite*/

	it("sets the memory to the value of the display", function () {
	
       var calc = new calculator();

        calc.pressButton("1");
		calc.pressButton("2");
        calc.pressButton("MS");
		expect(calc.showMemoryInUI).toEqual(true);
		expect(calc.memory).toEqual("12");
		expect(calc.display).toEqual("12");
		expect(calc.history.join(" ")).toEqual("12");
		
	
	});
	
	it("resets the display if number pressed after MS", function () {
	
       var calc = new calculator();

        calc.pressButton("1");
		calc.pressButton("2");
        calc.pressButton("MS");
		calc.pressButton("3");
		expect(calc.showMemoryInUI).toEqual(true);
		expect(calc.memory).toEqual("12");
		expect(calc.display).toEqual("3");
		expect(calc.history.join(" ")).toEqual("3");
		
	
	});
	
	it("adds previous number to history if operand is pressed after MS", function () {
	
       var calc = new calculator();

        calc.pressButton("1");
		calc.pressButton("2");
        calc.pressButton("MS");
		calc.pressButton("*");
		calc.pressButton("=");
		expect(calc.showMemoryInUI).toEqual(true);
		expect(calc.memory).toEqual("12");
		expect(calc.display).toEqual("144");
		expect(calc.history.join(" ")).toEqual("12 * 12 =");
		
	
	});
	
	it("clears the memory to the value of the display", function () {
	
       var calc = new calculator();

        calc.pressButton("1");
		calc.pressButton("2");
		calc.pressButton("MS");
		expect(calc.showMemoryInUI).toEqual(true);
        calc.pressButton("MC");
		expect(calc.showMemoryInUI).toEqual(false);
		expect(calc.memory).toEqual("0");
		expect(calc.display).toEqual("12");
		expect(calc.history.join(" ")).toEqual("12");
		
	
	});
	
	it("clears the memory when there is nothing in it", function () {
	
       var calc = new calculator();
		calc.pressButton("1");
		calc.pressButton("2");
        calc.pressButton("MC");
		expect(calc.memory).toEqual("0");
		expect(calc.display).toEqual("12");
		expect(calc.showMemoryInUI).toEqual(false);
		expect(calc.history.join(" ")).toEqual("12");
		
	
	});
	
	it("adds to memory even if it is not set", function () {
	
       var calc = new calculator();
		calc.pressButton("1");
		calc.pressButton("2");
		calc.pressButton("M+");
		expect(calc.memory).toEqual("12");
		expect(calc.display).toEqual("12");
		expect(calc.showMemoryInUI).toEqual(true);
		expect(calc.history.join(" ")).toEqual("12");
	
	});
	
	it("adds to memory when set", function () {
	
       var calc = new calculator();
		calc.pressButton("1");
		calc.pressButton("2");
		calc.pressButton("M+");
		calc.pressButton("M+");
		expect(calc.showMemoryInUI).toEqual(true);
		expect(calc.memory).toEqual("24");
		expect(calc.display).toEqual("12");
		expect(calc.history.join(" ")).toEqual("12");
		
	
	});
	
	it("subtracts from memory when set", function () {
	
       var calc = new calculator();
		calc.pressButton("1");
		calc.pressButton("2");
		calc.pressButton("M+");
		calc.pressButton("2");
		calc.pressButton("M-");
		expect(calc.memory).toEqual("10");
		expect(calc.display).toEqual("2");
		expect(calc.history.join(" ")).toEqual("2");
		expect(calc.showMemoryInUI).toEqual(true);
		
	
	});
	
	it("subtracts from memory when it is not set", function () {
	
       var calc = new calculator();
		calc.pressButton("1");
		calc.pressButton("2");
		calc.pressButton("2");
		calc.pressButton("M-");
		expect(calc.showMemoryInUI).toEqual(true);
		expect(calc.memory).toEqual("-122");
		expect(calc.display).toEqual("122");
		expect(calc.history.join(" ")).toEqual("122");
		
	
	});
	
	
	
	it("clears the memory when there is nothing in it", function () {
	
       var calc = new calculator();

	   	calc.pressButton("1");
		calc.pressButton("2");
        calc.pressButton("MC");
		expect(calc.memory).toEqual("0");
		expect(calc.display).toEqual("12");
		expect(calc.showMemoryInUI).toEqual(false);
		
	
	});
	
	it("sets the memory to previous number if the operator is pressed last", function () {
	
       var calc = new calculator();

        calc.pressButton("1");
		calc.pressButton("2");
		calc.pressButton("*");
		calc.pressButton("MS");
		expect(calc.showMemoryInUI).toEqual(true);
		expect(calc.memory).toEqual("12");
		calc.pressButton("6");
		calc.pressButton("=");
		expect(calc.display).toEqual("72");
		expect(calc.history.join(" ")).toEqual("12 * 6 =");
		
	
	});
	
	
	it("ignores setting memory to zero", function () {
	
       var calc = new calculator();

        calc.pressButton("0");
		calc.pressButton("MS");
		expect(calc.showMemoryInUI).toEqual(false);
		calc.pressButton("5");
		calc.pressButton("MR");
		calc.pressButton("0");
		expect(calc.display).toEqual("0");
		expect(calc.memory).toEqual("0");
		expect(calc.history.join(" ")).toEqual("");		
	
	});
	
	
});