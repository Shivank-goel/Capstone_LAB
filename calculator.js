
let input = "";
let parenCount = 0;
let prevResult = null;

function addToInput(value) {
  if (value === "(") {
    input += "(";
    parenCount++;
  } else if (value === ")" && parenCount > 0) {
    input += ")";
    parenCount--;
  } else if (value === "^") {
    input += "**";
  } else if (value === "pi") {
    input += Math.PI;
  } else if (value === "e") {
    input += Math.E;
  } else if (value === "sqrt") {
    input += "Math.sqrt(";
  } else if (value === "sin") {
    input += "Math.sin(";
  } else if (value === "cos") {
    input += "Math.cos(";
  } else if (value === "tan") {
    input += "Math.tan(";
  } else {
    input += value;
  }
  document.getElementById("result").value = input;
}

function clearInput() {
  input = "";
  parenCount = 0;
  prevResult = null;
  document.getElementById("result").value = "";
}

function calculate() {
  if (input === "") {
    return;
  }
  if (prevResult !== null) {
    input = prevResult + input;
  }

  let result = eval(input);
  document.getElementById("result").value = result;
  input = "";
  parenCount = 0;
  prevResult = result;
}
