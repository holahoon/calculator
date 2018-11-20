let display_screen = document.querySelector("#display-screen");
// let power_btn = document.getElementById('btn-power');
let num_btn = document.getElementsByClassName("num");
let operator_btn = document.getElementsByClassName("operator");
let clear_entry_btn = document.querySelector("#btn-clear-entry");
let backspace_btn = document.querySelector("#btn-delete");
let decimal_btn = document.querySelector("#btn-decimal");
let power_boolean = false;
var displayVal = "0";
var pendingVal;
var calculateArray = [];

power = () => {
  if (power_boolean === false) {
    power_boolean = true;
    displayVal = "0";
    // powerOnIndicator();
    run();
  } else if (power_boolean === true) {
    power_boolean = false;
    displayVal = "";
    // powerOffIndicator();
    run();
  }
};

/* --- Functions to apply --- */
// Functions to turn the lights on / off
powerOnIndicator = () => {
  document.getElementById("on-light").style.backgroundColor =
    "rgb(46, 154, 243)";
  document.getElementById("off-light").style.backgroundColor = "#fff";
  display_screen.value = "0";
  let power_btn = document.querySelector("#btn-power");
  power_btn.classList.remove("power");
  power_btn.classList.add("power-on-blue");
};
powerOffIndicator = () => {
  document.getElementById("on-light").style.backgroundColor = "#fff";
  document.getElementById("off-light").style.backgroundColor =
    "rgb(253, 122, 99)";
  display_screen.value = "";
  let power_btn = document.querySelector("#btn-power");
  power_btn.classList.remove("power-on-blue");
  power_btn.classList.add("power");
};

/* --- Function to display the numbers on the screen when clicked --- */
const displayNumbers = clickObj => {
  // targets the value of the button clicked
  let btnNumber = clickObj.target.value;
  // if the value of the screen is 0, clear it first to display numbers clicked
  if (displayVal === "0") {
    displayVal = "";
  }
  displayVal += btnNumber;
  display_screen.value = displayVal; //  displays the displayVal on the screen
};

/* --- CE button and del buton functions --- */
clear_entry_btn.onclick = () => {
  displayVal = "0";
  pendingVal = undefined;
  calculateArray = [];
  display_screen.value = displayVal;
};
backspace_btn.onclick = () => {
  let len = displayVal.length - 1;
  displayVal = displayVal.slice(0, len);
  if (displayVal === "") {
    displayVal = "0";
  }
  display_screen.value = displayVal;
};

/* --- decimal function --- */
decimal_btn.onclick = () => {
  if (!displayVal.includes(".")) {
    displayVal += ".";
    display_screen.value = displayVal;
  }
};

/* --- Function to perform the operators --- */
const performOperation = clickObj => {
  let operator = clickObj.target.value;

  switch (operator) {
    case "/":
      pendingVal = displayVal;
      displayVal = "";
      display_screen.value = "/";
      calculateArray.push(pendingVal);
      calculateArray.push("/");
      break;
    case "*":
      pendingVal = displayVal;
      displayVal = "";
      display_screen.value = "*";
      calculateArray.push(pendingVal);
      calculateArray.push("*");
      break;
    case "+":
      pendingVal = displayVal;
      displayVal = "";
      display_screen.value = "+";
      calculateArray.push(pendingVal);
      calculateArray.push("+");
      break;
    case "-":
      pendingVal = displayVal;
      displayVal = "";
      display_screen.value = "-";
      calculateArray.push(pendingVal);
      calculateArray.push("-");
      break;
    case "=":
      calculateArray.push(displayVal);
      let calculate = eval(calculateArray.join(" ")); // ['1', '+', '2'] -> eval('1' '+' '2')
      displayVal = "";
      display_screen.value = calculate;
    // calculateArray = [];
    default:
      break;
  }
};

// Function for eventListener to add functions to the buttons to run
let makeItWork = () => {
  for (let i = 0; i < num_btn.length; i++) {
    num_btn[i].addEventListener("click", displayNumbers, false);
  }
  for (let i = 0; i < operator_btn.length; i++) {
    operator_btn[i].addEventListener("click", performOperation, false);
  }
};

const run = () => {
  if (power_boolean === true) {
    powerOnIndicator();
    makeItWork();
  } else {
    powerOffIndicator();
  }
};

// run();
