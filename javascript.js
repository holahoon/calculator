const display_screen = document.getElementById("display-screen");
let inputtedNumbers = "";
let convertedNumbers = 0;

let power_boolean = false;

// Turn on the calculator
function calculatorOn() {
  if (power_boolean === false) {
    power_boolean = true;
    document.getElementById("btn-power").value = "off";
    powerOnIndicator();
    displayNumbers();
  } else if (power_boolean === true) {
    power_boolean = false;
    document.getElementById("btn-power").value = "on";
    powerOffIndicator();
  }
}

/* --- Functions to apply --- */
// Functions to turn the lights on / off
function powerOnIndicator() {
  document.getElementById("on-light").style.backgroundColor =
    "rgb(46, 154, 243)";
  document.getElementById("off-light").style.backgroundColor = "#fff";
  display_screen.value = "0";
}
function powerOffIndicator() {
  document.getElementById("on-light").style.backgroundColor = "#fff";
  document.getElementById("off-light").style.backgroundColor =
    "rgb(253, 122, 99)";
  display_screen.value = "";
}

function displayNumbers() {
  let numbers = document.getElementsByClassName("num");
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
      inputtedNumbers += numbers[i].value;
      convertedNumbers = parseFloat(inputtedNumbers);
      display_screen.value = convertedNumbers;
    });
  }
}

/* --- Run the calculator --- */
function run() {
  document.getElementById("btn-power").addEventListener("click", calculatorOn);
}

run();
