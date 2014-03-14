{
    function calculator() {
        this.display = "0";
        this.history = [];
		this.memory = "0";
		this.showMemoryInUI = false;
		this.memoryKeyPressed = false;
		this.memoryRecalledPressed = false;
    }

    calculator.prototype.helloWorld = function () {
        return "Hello World!"
    }

    calculator.prototype.appendToDisplay = function (value) {
        this.display = this.display + value;
    }

    calculator.prototype.appendToHistory = function (value) {
	
		if(isOperator(value)){
			this.history.push(value);
			return;
		}
		else{
			if(this.lastPressWasOperator()|| this.history.length==0){
				if (value == ".")
						this.history.push("0.");
				else
				 this.history.push(value);
			}
			else{
				if(this.getLastHistoryItem() == "0" && value == "0"){ 
					return;
					}
				else
					if(this.getLastHistoryItem() == "0" && value !="."){
						this.history.pop();
						this.history.push(value);
					}			
					else
						this.setLastHistoryItem(this.getLastHistoryItem() + value);
				
				}
			}
		
		
		
	}

    calculator.prototype.lastPressWasOperator = function () {
		if (this.history.length == 0){
		return false;
		}
        if (isOperator(this.getLastHistoryItem())) {
            return true;
        }
        else
            return false;
			
    }
	
	calculator.prototype.getLastHistoryItem = function (){
		return this.history[this.history.length-1];
	}
	
	calculator.prototype.setLastHistoryItem = function (value){
		this.history[this.history.length-1] = value;
	}

    calculator.prototype.doOperation = function (value) {
        // You must start with numbers
		if(this.history.length == 0) {
			this.memoryKeyPressed = false;
			return;
			}
        if (this.lastPressWasOperator()) {
			
			// Cope with multiple equals
            if (value == "=" && (this.history.length > 1)) {
				if(this.getLastHistoryItem()=="="){
					this.history.pop();
				}
				if(this.history.length==2)
					{
						var firstItem = this.history[0];
						this.history.push(firstItem);
						this.display = String(this.calc());
						this.appendToHistory("=");
					}
				else{				
					var lastTwoItems = this.history.slice(this.history.length-2,this.history.length);
					this.history = this.history.concat(lastTwoItems);
					this.display = String(this.calc());
					this.appendToHistory("=");				
				}
            }
            else { // allow the user to change the operation type by replacing the last symbol
                // but not if the last operator was an equals
				if(this.getLastHistoryItem()=="=")
				{
					this.history = [];
					this.appendToHistory(this.display);
					this.appendToHistory(value);
					
				}
				else
					this.setLastHistoryItem(value);
            }
			
        }
        else {
            this.display = String(this.calc());
            this.appendToHistory(value);

            /*// append operators to history apart from =
            if (value == "=") {
                // reset the history after using equals
				this.history = [];
				this.history.push(this.display);
				
            }
            else {*/
            //}
        }
		this.memoryKeyPressed = false;
		this.memoryRecalledPressed=false;
    }

    calculator.prototype.doNumbers = function (value) {
		if(this.memoryRecalledPressed)
		{
		 if (value == ".")
		 {
						this.display = "0.";
						this.setLastHistoryItem ("0.");
						
		 }
		 else{
			
			this.display = value;
			
			this.history.pop();
			this.history.push(value);
			
			}
			this.memoryRecalledPressed=false;
			return;
		}	
		if (this.memoryKeyPressed){
			if(!this.lastPressWasOperator()) {
				this.history.pop();
			}
			
			this.display = value;			
			this.appendToHistory(value);
			this.memoryKeyPressed = false;
			return;
		}
        // the first number after an operator should reset the display
        if (this.lastPressWasOperator() || this.display == "0") {
            if(this.getLastHistoryItem()=="=")
			{
				// clear the history if we have finished with the result of the expression
				this.history = [];
			}
			
			if (value == "0"){
				 if(this.getLastHistoryItem()=="=")
					{}
					else{
						this.display = "0";
						this.appendToHistory("0");
						this.memoryKeyPressed = false;
						return;
						}
			}

            // if the value is a decimal place sort out leading 0s
            if (value == ".") {
               
					
						this.display = "0.";
						this.appendToHistory(".");
					
					
					
				}
			
            else {
                this.display = value;
                this.appendToHistory(value);
            }
        }
        else {
            // block double decimal places
            if (value == "." && this.display.match(/[0-9]*\.[0-9]*/)) {
				this.memoryKeyPressed = false;
                return;
            }
        this.appendToDisplay(value);
        this.appendToHistory(value);
        }

    }



    calculator.prototype.pressButton = function (value) {
        switch (value) {
            case "CE":{
			this.display = "0";
			if (!this.lastPressWasOperator()){
				this.history.pop();
			}
			if(this.getLastHistoryItem() == "=")
			{
			this.history = [];
			}
			break;}
            case "C": {
                this.display = "0";
                this.history = [];
                break;
            }
			case "backspace": {
				if(!this.lastPressWasOperator())
				{
					if(this.display.length == 1){
							this.display = "0";
							this.history.pop();												
					}
					else{
							this.display = this.display.substring(0,this.display.length-1);
							var lastHistoryItem = this.getLastHistoryItem();
							this.setLastHistoryItem(lastHistoryItem.substring(0,lastHistoryItem.length-1));				
						}
				}
			break;}
            case "-/+": {
                
                //if display has - already remove it
                this.display = String(this.display * -1);
                if(this.lastPressWasOperator())
				{
					throw new Error("Not Implemented Exception");
				}
				else
					this.setLastHistoryItem(this.getLastHistoryItem() * -1);                                            
                break;
            }
                // operators should allow the expression to be evaluated and append non equals operators to the history
            case "-":
            case "+":
            case "/":
            case "=":
            case "*":
                {
                    this.doOperation(value)
                    break;
                }
				
				case "MC":
				{ 
				  this.memory = "0";
				  this.updateMemoryDisplay();
				  
				 break;
				}
				case "MR":
				{ 		
					this.memoryRecalledPressed = true;
					
					this.display = this.memory;
					
					if(this.lastPressWasOperator()){
						this.history.push(this.memory);
					}
					else {
						this.history.pop();
						this.history.push(this.memory);
					}



				
/*					if(this.lastPressWasOperator()){
						this.doNumbers(this.memory);						
					}
					else {
						this.setLastHistoryItem(this.memory)
						this.display = this.memory;						
					}*/
					break;
				}
				case "MS":
				{ 
				  //set the value of memory
				  if (this.display !="0"){
				  this.memory = this.display;
				  this.updateMemory();
				  }
				  break;
				  
				}
				case "M+":
				{ 
				  //set the value of memory
				  this.memory = String(eval(this.memory +" + "+ this.display));
				  this.updateMemory();
				  break;
				}
				case "M-":
				{ 
				  //set the value of memory
				  this.memory = String(eval(this.memory +" - "+ this.display));
				  this.updateMemory();
				  break;
				}
				
				
            default: // numbers should be appended to the display and history
                {
                    this.doNumbers(value)
                    break;
                }


        }
    }
	
	calculator.prototype.updateMemory = function() {
		this.updateMemoryDisplay();
		if(!this.lastPressWasOperator()){
			this.setLastHistoryItem(this.display);
		}
		this.memoryKeyPressed = true;
	}

    calculator.prototype.calc = function () {
        return eval(this.history.join(" "));
    }

	calculator.prototype.updateMemoryDisplay = function(){
		if (this.memory=="0"){
					this.showMemoryInUI = false;
					}
					else this.showMemoryInUI =true;
}

};

function isOperator(value) {
	value = value.toString();
	var regex = new RegExp("([\+]|[\-]|[/]|[\*]|[=])$");
    if (value.match(regex)) {
        return true;
    }
    else
        return false;
}




String.prototype.replaceAt = function (index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
}