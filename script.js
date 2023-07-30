let display = document.getElementById("display");
let calculation = "";

function appendToDisplay(value) {
  if (display.textContent === "0" && value !== ".") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
  calculation += value;
}

function clearDisplay() {
  display.textContent = "0";
  calculation = "";
}

function calculateResult() {
  try {
    let result = eval(calculation);
    display.textContent = result;
    calculation = result.toString();
  } catch (error) {
    display.textContent = "Error";
    calculation = "";
  }
}