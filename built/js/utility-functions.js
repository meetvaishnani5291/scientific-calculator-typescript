"use strict";
let factorialBtn = document.querySelector(".factorial");
let piBtn = document.querySelector(".const-pi");
let eBtn = document.querySelector(".const-e");
let squareBtn = document.querySelector(".square");
let inverseBtn = document.querySelector(".inverse");
let absBtn = document.querySelector(".abs");
let expBtn = document.querySelector(".exp");
let modBtn = document.querySelector(".mod");
let lnBtn = document.querySelector(".ln");
let logBtn = document.querySelector(".log");
let tenpowerBtn = document.querySelector(".ten-power");
let xPowerBtn = document.querySelector(".x-power");
let underootBtn = document.querySelector(".underoot");
let secondBtn = document.querySelector(".second-btn");
let alternativeFunctionsBtns = document.querySelectorAll(".second");
let cubeBtn = document.querySelector(".cube-btn");
let cuberootBtn = document.querySelector(".cuberoot-btn");
let twopowerBtn = document.querySelector(".twopower-btn");
let nthrootBtn = document.querySelector(".nthroot-btn");
let logybasebtn = document.querySelector(".logybase-btn");
let epowerBtn = document.querySelector(".epower-btn");
let plusOrMinusBtn = document.querySelector(".plus-or-minus");
let valueForLogybaseFunctions = "Not a Number";
let valueForNthrootFunctions = "Not a Number";
plusOrMinusBtn.addEventListener("click", (event) => {
    try {
        let operationExpression = currentOperation.value;
        currentOperation.value = (-1 * Number(currentOperation.value)).toString();
        previousOperation.value = "-(" + operationExpression + ")";
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
factorialBtn.addEventListener("click", (event) => {
    try {
        let operationExpression = parseInt(currentOperation.value), res = 1;
        if (isNaN(Number(currentOperation.value)))
            throw "Not a number";
        previousOperation.value = operationExpression + "!";
        while (operationExpression)
            res = res * operationExpression--;
        currentOperation.value = res.toString();
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
piBtn.addEventListener("click", (event) => {
    try {
        currentOperation.value = Math.PI.toString();
        previousOperation.value = "PI";
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
eBtn.addEventListener("click", (event) => {
    try {
        currentOperation.value = Math.E.toString();
        previousOperation.value = "E";
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
squareBtn.addEventListener("click", (event) => {
    try {
        let operationExpression = currentOperation.value;
        currentOperation.value = (Number(currentOperation.value) ** 2).toString();
        if (isNaN(Number(currentOperation.value)))
            throw "Not a number";
        previousOperation.value = operationExpression;
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
inverseBtn.addEventListener("click", (event) => {
    try {
        let operationExpression = currentOperation.value;
        currentOperation.value = (1 / Number(currentOperation.value)).toString();
        previousOperation.value = "1/" + operationExpression;
        if (isNaN(Number(currentOperation.value)))
            throw "Not a number";
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
absBtn.addEventListener("click", (event) => {
    try {
        let operationExpression = currentOperation.value;
        currentOperation.value = Math.abs(Number(currentOperation.value)).toString();
        if (isNaN(Number(currentOperation.value)))
            throw "Not a number";
        previousOperation.value = "abs(" + operationExpression + ")";
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
expBtn.addEventListener("click", (event) => {
    try {
        if (!currentOperation.value.length) {
            return;
        }
        if (!isNaN(Number(currentOperation.value.slice(-1)))) {
            currentOperation.value += ".e";
        }
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
epowerBtn.addEventListener("click", (event) => {
    try {
        let operationExpression = currentOperation.value;
        currentOperation.value = Math.exp(Number(currentOperation.value)).toString();
        previousOperation.value = "e^" + operationExpression;
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
modBtn.addEventListener("click", (event) => {
    try {
        if (!currentOperation.value.length) {
            return;
        }
        if (!isNaN(Number(currentOperation.value.slice(-1))) ||
            currentOperation.value.slice(-1) == ")") {
            currentOperation.value += "%";
        }
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
lnBtn.addEventListener("click", (event) => {
    try {
        let operationExpression = currentOperation.value;
        currentOperation.value = Math.log(Number(currentOperation.value)).toString();
        if (isNaN(Number(currentOperation.value)))
            throw "Not a number";
        previousOperation.value = "ln(" + operationExpression + ")";
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
logBtn.addEventListener("click", (event) => {
    try {
        let operationExpression = currentOperation.value;
        currentOperation.value = Math.log10(Number(currentOperation.value)).toString();
        if (isNaN(Number(currentOperation.value)))
            throw "Not a number";
        previousOperation.value = "log(" + operationExpression + ")";
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
tenpowerBtn.addEventListener("click", (event) => {
    try {
        let operationExpression = currentOperation.value;
        currentOperation.value = (10 ** Number(currentOperation.value)).toString();
        if (isNaN(Number(currentOperation.value)))
            throw "Not a number";
        previousOperation.value = "10^" + operationExpression;
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
xPowerBtn.addEventListener("click", (event) => {
    try {
        if (!currentOperation.value.length) {
            return;
        }
        if (!isNaN(Number(currentOperation.value.slice(-1))) ||
            currentOperation.value.slice(-1) == ")") {
            currentOperation.value += "^";
        }
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
underootBtn.addEventListener("click", (event) => {
    try {
        let operationExpression = currentOperation.value;
        currentOperation.value = Math.sqrt(Number(currentOperation.value)).toString();
        if (isNaN(Number(currentOperation.value)))
            throw "Not a number";
        previousOperation.value = "sqrt(" + operationExpression + ")";
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
secondBtn.addEventListener("click", () => {
    alternativeFunctionsBtns.forEach((button) => {
        button.classList.toggle("hide-btn");
    });
});
cubeBtn.addEventListener("click", (event) => {
    try {
        let operationExpression = currentOperation.value;
        currentOperation.value = Math.pow(Number(operationExpression), 3).toString();
        if (isNaN(Number(currentOperation.value)))
            throw "Not a number";
        previousOperation.value = operationExpression + "^3";
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
cuberootBtn.addEventListener("click", (event) => {
    try {
        let operationExpression = currentOperation.value;
        currentOperation.value = Math.cbrt(Number(operationExpression)).toString();
        if (isNaN(Number(currentOperation.value)))
            throw "Not a number";
        previousOperation.value = "3rdRoot(" + operationExpression + ")";
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
twopowerBtn.addEventListener("click", (event) => {
    try {
        let operationExpression = currentOperation.value;
        currentOperation.value = Math.pow(2, Number(operationExpression)).toString();
        if (isNaN(Number(currentOperation.value)))
            throw "Not a number";
        previousOperation.value = "2^" + operationExpression;
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
logybasebtn.addEventListener("click", (event) => {
    try {
        if (isNaN(Number(currentOperation.value)))
            throw "Not a number";
        valueForLogybaseFunctions = Number(currentOperation.value).toString();
        previousOperation.value = valueForLogybaseFunctions + "logybase";
        currentOperation.value = "";
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
nthrootBtn.addEventListener("click", (event) => {
    try {
        if (isNaN(Number(currentOperation.value)))
            throw "Not a number";
        valueForNthrootFunctions = Number(currentOperation.value).toString();
        currentOperation.value = "";
        previousOperation.value = valueForNthrootFunctions + "nthroot";
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
