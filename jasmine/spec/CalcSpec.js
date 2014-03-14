describe("Calculator", function () { /*Test Suite*/

	it("recognises operator /", function () {
        expect(isOperator("/")).toEqual(true);
	
	});
	
	it("recognises operator +", function () {
        expect(isOperator("+")).toEqual(true);
	});
	
	it("recognises operator *", function () {
        expect(isOperator("*")).toEqual(true);
	});
	
	it("recognises operator -", function () {
        expect(isOperator("-")).toEqual(true);
	});
		
	it("recognises operator =", function () {
        expect(isOperator("=")).toEqual(true);
	});
	
	it("does not recognise 1 as an operator", function () {
        expect(isOperator("1")).toEqual(false);
	});
	
	it("does not recognise . as an operator .", function () {
		expect(isOperator(".")).toEqual(false);
	});
	
	it("does not recognise 1.1 as an operator", function () {
		expect(isOperator("1.1")).toEqual(false);
	});
	
	it("does not recognise -1 as an operator", function () {
		expect(isOperator("-1")).toEqual(false);
    });

    it("recognises multi digit numbers", function () {
        var calc = new calculator();

        calc.pressButton("1");
        calc.pressButton("2");
        expect(calc.display).toEqual("12");
		expect(calc.history.join(" ")).toEqual("12");

    });

    it("resets the display after an operator", function () {
        var calc = new calculator();

        calc.pressButton("1");
        calc.pressButton("2");
        calc.pressButton("+");
        calc.pressButton("3");
        expect(calc.display).toEqual("3");
		expect(calc.history.join(" ")).toEqual("12 + 3");

    });
	
	 it("does not clear the memory if you press C", function () {
        var calc = new calculator();

        calc.pressButton("1");
        calc.pressButton("2");
        calc.pressButton("MS");
        calc.pressButton("C");
        expect(calc.display).toEqual("0");
		expect(calc.memory).toEqual("12");
		expect(calc.history.join(" ")).toEqual("");

    });
	
	 it("resets the display and history after an equals if CE pressed", function () {
        var calc = new calculator();
        calc.pressButton("1");
        calc.pressButton("2");
        calc.pressButton("+");
        calc.pressButton("3");
		calc.pressButton("=");
		calc.pressButton("CE");
        expect(calc.display).toEqual("0");
		expect(calc.history.join(" ")).toEqual("");
    });
	
	it("clears display if CE pressed after an operand", function () {
        var calc = new calculator();
        calc.pressButton("1");
        calc.pressButton("2");
        calc.pressButton("+");
		calc.pressButton("CE");
        expect(calc.display).toEqual("0");
		expect(calc.history.join(" ")).toEqual("12 +");

    });
	
	it("clears display if CE pressed after a numeric", function () {
        var calc = new calculator();
        calc.pressButton("1");
        calc.pressButton("2");
        calc.pressButton("+");
		calc.pressButton("2");
		calc.pressButton("CE");
        expect(calc.display).toEqual("0");
		expect(calc.history.join(" ")).toEqual("12 +");

    });

    it("can continue operations after an equals", function () {
        var calc = new calculator();

        calc.pressButton("1");
        calc.pressButton("+");
        calc.pressButton("2");
        calc.pressButton("=");
        calc.pressButton("+");
        calc.pressButton("2");
		expect(calc.history.join(" ")).toEqual("3 + 2");
        calc.pressButton("=");
        expect(calc.display).toEqual("5");
		expect(calc.history.join(" ")).toEqual("3 + 2 =");
    });
	
	
    it("can input number after an equals", function () {
        var calc = new calculator();

        calc.pressButton("1");
        calc.pressButton("+");
        calc.pressButton("2");
        calc.pressButton("=");
        calc.pressButton("2");
        expect(calc.display).toEqual("2");
		expect(calc.history.join(" ")).toEqual("2");
    });

    it("allows the second operator to acts as an equals", function () {
        var calc = new calculator();

        calc.pressButton("1");
        calc.pressButton("+");
        calc.pressButton("2");
        calc.pressButton("+");
        expect(calc.display).toEqual("3");
		expect(calc.history.join(" ")).toEqual("1 + 2 +");

    });
    
    it("can do simple addition", function () {
        var calc = new calculator();

        calc.pressButton("1");
        calc.pressButton("+");
        calc.pressButton("2");
        calc.pressButton("=");
        expect(calc.display).toEqual("3");
		expect(calc.history.join(" ")).toEqual("1 + 2 =");
		
    });
	
	it("can add operand without issue", function () {
        var calc = new calculator();

        calc.pressButton("1");
        calc.pressButton("+");
        calc.pressButton("2");
		expect(calc.display).toEqual("2");
		expect(calc.history.join(" ")).toEqual("1 + 2");
		});

    it("can do simple subtraction", function () {
        var calc = new calculator();

        calc.pressButton("1");
        calc.pressButton("-");
        calc.pressButton("2");
        calc.pressButton("=");
        expect(calc.display).toEqual("-1");
		expect(calc.history.join(" ")).toEqual("1 - 2 =");
    });

    it("can do simple division", function () {
        var calc = new calculator();

        calc.pressButton("1");
        calc.pressButton("/");
        calc.pressButton("2");
        calc.pressButton("=");
        expect(calc.display).toEqual("0.5");
		expect(calc.history.join(" ")).toEqual("1 / 2 =");
    });

    it("can do simple multiplication", function () {
        var calc = new calculator();

        calc.pressButton("2");
        calc.pressButton("*");
        calc.pressButton("3");
        calc.pressButton("=");
        expect(calc.display).toEqual("6");
		expect(calc.history.join(" ")).toEqual("2 * 3 =");
    });

    it("can clear the display using C", function () {
        var calc = new calculator();

        calc.pressButton("2");
        calc.pressButton("*");
        calc.pressButton("3");
        calc.pressButton("=");
        calc.pressButton("C");
        expect(calc.display).toEqual("0");
		expect(calc.history.join(" ")).toEqual("");
    });

    it("allows the user to change the operations", function () {
        var calc = new calculator();

        calc.pressButton("2");
        calc.pressButton("*");
        calc.pressButton("+");
        calc.pressButton("3");
        calc.pressButton("=");
        expect(calc.display).toEqual("5");
		expect(calc.history.join(" ")).toEqual("2 + 3 =");
    });

    it("can process decimals points", function () {
        var calc = new calculator();

        calc.pressButton("2");
        calc.pressButton(".");
        calc.pressButton("2");
        calc.pressButton("+");
        calc.pressButton("3");
        calc.pressButton(".");
        calc.pressButton("3");
        calc.pressButton("=");
        expect(calc.display).toEqual("5.5");
		expect(calc.history.join(" ")).toEqual("2.2 + 3.3 =");
    });

	it("doesn't have rounding errors", function () {
        var calc = new calculator();

        calc.pressButton("1");
        calc.pressButton(".");
        calc.pressButton("1");
        calc.pressButton("+");
        calc.pressButton("2");
        calc.pressButton(".");
        calc.pressButton("2");
        calc.pressButton("=");
        expect(calc.display).toEqual("3.3");
		expect(calc.history.join(" ")).toEqual("1.1 + 2.2 =");
    });
	
	it("can divide by zero", function () {
        var calc = new calculator();

        calc.pressButton("1");
        calc.pressButton("/");
        calc.pressButton("0");
		calc.pressButton("=");
        expect(calc.display).toEqual("Infinity");
		expect(calc.history.join(" ")).toEqual("1 / 0 =");
    });
	
    it("ignores multiple decimals points", function () {
        var calc = new calculator();

        calc.pressButton("2");
        calc.pressButton(".");
        calc.pressButton(".");
        calc.pressButton("2");
        calc.pressButton("+");
        calc.pressButton("3");
        calc.pressButton(".");
        calc.pressButton(".");
        calc.pressButton("3");
        calc.pressButton("=");
        expect(calc.display).toEqual("5.5");
		expect(calc.history.join(" ")).toEqual("2.2 + 3.3 =");
    });

    it("can cope if the user leads with a decimal points", function () {
        var calc = new calculator();

        calc.pressButton(".");
        calc.pressButton("2");
        expect(calc.display).toEqual("0.2");
        calc.pressButton("+");
        calc.pressButton(".");
        calc.pressButton("3");
        expect(calc.display).toEqual("0.3");
        calc.pressButton("=");
        expect(calc.display).toEqual("0.5");
		expect(calc.history.join(" ")).toEqual("0.2 + 0.3 =");
    });

    it("can stop users entering multiple zeros before a decimal place", function () {
        var calc = new calculator();

        calc.pressButton("0");
        calc.pressButton("0");
        calc.pressButton(".");
        calc.pressButton("0");
        calc.pressButton("0");
        calc.pressButton("1");
        expect(calc.display).toEqual("0.001");
		expect(calc.history.join(" ")).toEqual("0.001");
        
    });

    it("can toggle numbers from positive to negative and back", function () {
        var calc = new calculator();

        calc.pressButton("1");
        calc.pressButton("-/+");
        expect(calc.display).toEqual("-1");
		expect(calc.history.join(" ")).toEqual("-1");
        calc.pressButton("-/+");
        expect(calc.display).toEqual("1"); 
		expect(calc.history.join(" ")).toEqual("1");		
    });

    it("can toggle numbers from positive to negative and back after an operation", function () {
        var calc = new calculator();

        calc.pressButton("1");
        calc.pressButton("*");
        calc.pressButton("4");
        calc.pressButton("-/+");
        expect(calc.display).toEqual("-4");
		expect(calc.history.join(" ")).toEqual("1 * -4");

    });

    it("doesn't toggle operators", function () {
        var calc = new calculator();

        calc.pressButton("2");
        calc.pressButton("*");
        expect(function() {calc.pressButton("-/+")}).toThrow(new Error("Not Implemented Exception")) ;
        /*calc.pressButton("4");
        expect(calc.display).toEqual("4");
        calc.pressButton("=");
        expect(calc.display).toEqual("8");*/

    });

    it("can accept a zero after an operation", function () {
        var calc = new calculator();

        calc.pressButton("1");
        calc.pressButton("-");
        calc.pressButton("0");
        expect(calc.display).toEqual("0");
		expect(calc.history.join(" ")).toEqual("1 - 0");

    });

    
    it("adds two even numbers", function () {
            var calc = new calculator();
            calc.pressButton("2");
            calc.pressButton("+");
            calc.pressButton("5");
            calc.pressButton("=");
            expect(calc.display).toEqual("7");   
			expect(calc.history.join(" ")).toEqual("2 + 5 =");			
    });

        it("add two negative numbers", function () {
            var calc = new calculator();
            calc.pressButton("2");
            calc.pressButton("-/+");
            calc.pressButton("+");
            calc.pressButton("5");
            calc.pressButton("-/+");
            calc.pressButton("=");
            expect(calc.display).toEqual("-7");
			expect(calc.history.join(" ")).toEqual("-2 + -5 =");
        });

        it("Equals repeats operator *", function () {
            var calc = new calculator();
            calc.pressButton("3");
            calc.pressButton("*");
            calc.pressButton("=");                     
            expect(calc.display).toEqual("9");
			expect(calc.history.join(" ")).toEqual("3 * 3 =");
        });

        it("Equals repeats operator * (multiple equals)", function () {
            var calc = new calculator();
            calc.pressButton("3");
            calc.pressButton("*");
            calc.pressButton("=");
            calc.pressButton("=");
            expect(calc.display).toEqual("27");
			expect(calc.history.join(" ")).toEqual("3 * 3 * 3 =");
        });
		
		it("Equals continues to repeat last operation after an equals with single operation", function () {
            var calc = new calculator();
            calc.pressButton("2");
            calc.pressButton("+");
            calc.pressButton("3");
            calc.pressButton("=");
			calc.pressButton("=");
            expect(calc.display).toEqual("8");
			expect(calc.history.join(" ")).toEqual("2 + 3 + 3 =");
			calc.pressButton("=");
			expect(calc.display).toEqual("11");
			expect(calc.history.join(" ")).toEqual("2 + 3 + 3 + 3 =");
        });
		
		it("backspace removes last character from display from the first number", function () {
            var calc = new calculator();
            calc.pressButton("1");
            calc.pressButton("2");
            calc.pressButton("backspace");
            expect(calc.display).toEqual("1");			
			expect(calc.history.join(" ")).toEqual("1");
        });
		
		it("backspace removes last character from display from the second number", function () {
            var calc = new calculator();
            calc.pressButton("1");
            calc.pressButton("2");
			calc.pressButton("*");
            calc.pressButton("1");
			calc.pressButton("2");
            calc.pressButton("backspace");
            expect(calc.display).toEqual("1");			
			expect(calc.history.join(" ")).toEqual("12 * 1");
			calc.pressButton("backspace");
			calc.pressButton("backspace");
			expect(calc.display).toEqual("0");			
			expect(calc.history.join(" ")).toEqual("12 *");
        });
		
		it("backspace doesn't work on operands", function () {
            var calc = new calculator();
            calc.pressButton("1");
            calc.pressButton("2");
			calc.pressButton("+");
            calc.pressButton("backspace");
            expect(calc.display).toEqual("12");			
			expect(calc.history.join(" ")).toEqual("12 +");
        });
			
		it("backspace doesn't work after equals", function () {
            var calc = new calculator();
            calc.pressButton("1");
            calc.pressButton("2");
			calc.pressButton("+");
			calc.pressButton("2");
			calc.pressButton("=");
            calc.pressButton("backspace");
            expect(calc.display).toEqual("14");			
			expect(calc.history.join(" ")).toEqual("12 + 2 =");
        });
		
		it("backspace doesn't run out the end of the string", function () {
            var calc = new calculator();
            calc.pressButton("1");
            calc.pressButton("2");
            calc.pressButton("backspace");
			calc.pressButton("backspace");
			calc.pressButton("backspace");
            expect(calc.display).toEqual("0");			
			expect(calc.history.join(" ")).toEqual("");
        });
		
		it("Equals shouldn't work if there isn't a history", function () {
            var calc = new calculator();
            calc.pressButton("=");
			calc.pressButton("=");
            expect(calc.display).toEqual("0");
			expect(calc.history.join(" ")).toEqual("");
        });
		
		it("Equals continues to repeat last operation after an equals with multiple operations", function () {
            var calc = new calculator();
			calc.pressButton("1");
            calc.pressButton("+");
            calc.pressButton("2");
            calc.pressButton("+");
            calc.pressButton("3");
            calc.pressButton("=");
			calc.pressButton("=");
            expect(calc.display).toEqual("9");
			expect(calc.history.join(" ")).toEqual("1 + 2 + 3 + 3 =");
			calc.pressButton("=");
			expect(calc.display).toEqual("12");
			expect(calc.history.join(" ")).toEqual("1 + 2 + 3 + 3 + 3 =");
        });

        it("add an even and a negative number", function () {
            var calc = new calculator();
            calc.pressButton("2");
            calc.pressButton("+");
            calc.pressButton("5");
            calc.pressButton("-/+");
            calc.pressButton("=");
            expect(calc.display).toEqual("-3");
			expect(calc.history.join(" ")).toEqual("2 + -5 =");
        });

        it("add two large numbers", function () {
            
			var calc = new calculator();
			var largenum = "246578906564"
			typeNumber(largenum, calc);
			calc.pressButton("+");
			typeNumber(largenum, calc);
			calc.pressButton("=");
			expect(calc.display).toEqual("493157813128");
			expect(calc.history.join(" ")).toEqual("246578906564 + 246578906564 =");
			
        });

        it("add a number to zero", function () {
             var calc = new calculator();
            calc.pressButton("0");
            calc.pressButton("+");
            calc.pressButton("6");
            calc.pressButton("7");
			calc.pressButton("8");
            calc.pressButton("=");
            expect(calc.display).toEqual("678");
			expect(calc.history.join(" ")).toEqual("0 + 678 =");
        });
    
        it("add a zero to number", function () {
           var calc = new calculator();
            calc.pressButton("6");
            calc.pressButton("7");
			calc.pressButton("8");
            calc.pressButton("+");
			calc.pressButton("0");
            calc.pressButton("=");
            expect(calc.display).toEqual("678");
			expect(calc.history.join(" ")).toEqual("678 + 0 =");
        });
});

function typeNumber(number, calc){
		for(var i = 0; i< number.length; i++){
				calc.pressButton(number.charAt(i));
			}
	}			