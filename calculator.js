let input = "";
let parenCount = 0;  //variable will be used to keep track of the number of open parentheses in the calculator display.
let prevResult = null;

function addToInput(value) {            //addToInput() function, which takes a value parameter representing the input to add to the calculator display.
    if (value === "(") {               //checks if the value parameter is an opening parenthesis.
        input += "(";                 // the opening parenthesis is appended to the input variable
        parenCount++;                //  parenCount is incremented.
    }
    else if (value === ")" && parenCount > 0) {  //checks if the value parameter is a closing parenthesis and parenCount is greater than 0, which means there is at least one open parenthesis in the display.
        input += ")";         //closing parenthesis is appended to the input variable,
        parenCount--;         //parenCount is decremented.
    }
    else if (value === "^") {   //value parameter is an exponent symbol (^)
        input += "**";        //the exponent operator (**) is appended to the input variable instead of the ^ symbol.
    }
    else {
        input += value;    //the value parameter is simply appended to the input variable.
    }
    document.getElementById("result").value = input;
}

function clearInput() {
    input = "";          //sets the input variable to an empty string, effectively clearing the current calculator display.
    parenCount = 0;      // parenCount variable to 0, effectively resetting the count of open parentheses in the calculator display.
    prevResult = null;   //sets the prevResult variable to null, which indicates that there is no previous result stored in memory.
    document.getElementById("result").value = "";
}

function calculate() {
    if (input === "") {    //checks if the input variable is an empty string, and returns immediately
        return;
    }
    if (prevResult !== null) {    //checks if there is a previous result stored in the prevResult variable
        input = prevResult + input;  //concatenates it with the current input expression.
    }
    let result = eval(input);    //function to evaluate the expression stored in the input variable, and stores the result in the result variable.
    document.getElementById("result").value = result;
    input = "";
    parenCount = 0;
    prevResult = result;
}
