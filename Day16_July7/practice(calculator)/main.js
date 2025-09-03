let expression = "";

function press(value) {
  expression += value;
  document.getElementById("expression").innerText = expression;
  document.getElementById("result").innerText = ""; // clear result until "=" pressed
}

function calculate() {
  try {
    let result = eval(expression);
    document.getElementById("result").innerText = "= " + result;
  } catch (e) {
    document.getElementById("result").innerText = "Error";
  }
}

function clearDisplay() {
  expression = "";
  document.getElementById("expression").innerText = "";
  document.getElementById("result").innerText = "";
}
