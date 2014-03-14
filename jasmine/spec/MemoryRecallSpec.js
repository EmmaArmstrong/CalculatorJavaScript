describe("Memory Recall", function () { /*Test Suite*/

it("recalls a single digit number saved in memory", function () {
	
       var calc = new calculator();
		calc.pressButton("1");
		calc.pressButton("MS");
		expect(calc.memory).toEqual("1");
		expect(calc.showMemoryInUI).toEqual(true);
		calc.pressButton("C");
		expect(calc.display).toEqual("0");
		expect(calc.history.join(" ")).toEqual("");
		calc.pressButton("MR");
		expect(calc.display).toEqual("1");
		expect(calc.history.join(" ")).toEqual("1");
	});
	
it("recalls a multi digit number saved in memory", function () {
       var calc = new calculator();
		calc.pressButton("1");
		calc.pressButton("2");
		calc.pressButton("3");
		calc.pressButton("MS");
		expect(calc.memory).toEqual("123");
		expect(calc.showMemoryInUI).toEqual(true);
		calc.pressButton("C");
		expect(calc.display).toEqual("0");
		calc.pressButton("MR");
		expect(calc.display).toEqual("123");
		expect(calc.history.join(" ")).toEqual("123");
	});

	it("wipes the display if a user presses a number after MR when the memory is 0 ", function(){
		var calc = new calculator();
		calc.pressButton("4");
		calc.pressButton("*");
		calc.pressButton("MR");
		expect(calc.display).toEqual("0");
		calc.pressButton("3");
		expect(calc.display).toEqual("3");
		expect(calc.memory).toEqual("0");
		expect(calc.history.join(" ")).toEqual("4 * 3");
	});
	
	it("uses the memory in the expression if a user presses an operand after MR when the memory is 0 ", function(){
		var calc = new calculator();
		calc.pressButton("4");
		calc.pressButton("MR");
		expect(calc.display).toEqual("0");
		expect(calc.history.join(" ")).toEqual("0");
		calc.pressButton("*");
		calc.pressButton("3");
		expect(calc.display).toEqual("3");
		expect(calc.memory).toEqual("0");
		expect(calc.history.join(" ")).toEqual("0 * 3");
	});
	
	it("wipes the display if a user presses a number after MR when the memory is not empty", function(){
		var calc = new calculator();
		calc.pressButton("9");
		calc.pressButton("MS");
		calc.pressButton("4");
		calc.pressButton("*");
		calc.pressButton("MR");
		calc.pressButton("3");
		expect(calc.display).toEqual("3");
		expect(calc.memory).toEqual("9");
		expect(calc.history.join(" ")).toEqual("4 * 3");
	});
	
	it("uses the memory in the expression if a user presses an operand after MR when the memory is not empty", function(){
		var calc = new calculator();
		calc.pressButton("9");
		calc.pressButton("MS");
		calc.pressButton("4");
		calc.pressButton("MR");
		expect(calc.display).toEqual("9");
		expect(calc.history.join(" ")).toEqual("9");
		calc.pressButton("*");
		calc.pressButton("3");
		calc.pressButton("=");
		expect(calc.display).toEqual("27");
		expect(calc.memory).toEqual("9");
		expect(calc.history.join(" ")).toEqual("9 * 3 =");
	});

	it("allows you to add a decimal place after MR clearing the display", function () {
	
       var calc = new calculator();
		calc.pressButton("3");
		calc.pressButton("MS");
        calc.pressButton("1");
		calc.pressButton("2");
		calc.pressButton("*");
		calc.pressButton("MR");
		expect(calc.display).toEqual("3");
		expect(calc.history.join(" ")).toEqual("12 * 3");
		calc.pressButton(".");
		expect(calc.display).toEqual("0.");
		calc.pressButton("6");
		expect(calc.memory).toEqual("3");
		expect(calc.display).toEqual("0.6");
		expect(calc.history.join(" ")).toEqual("12 * 0.6");
	});
	
	});