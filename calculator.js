let result = document.querySelector(".result");
let buttons = document.querySelectorAll("button");
let currentInput = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;

    if (value === "AC") {
      currentInput = "";
      result.innerText = "0";
    } 
    else if (value === "=") {
      try {
        currentInput = eval(currentInput);
        result.innerText = currentInput;
      } catch {
        result.innerText = "Error";
      }
    } 
    else {
      if (result.innerText === "0" && value !== ".") {
        currentInput = value;
      } else {
        currentInput += value;
      }
      result.innerText = currentInput;
    }
  });
});
