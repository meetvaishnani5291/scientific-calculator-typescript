"use strict";
let absFuctionBtn = document.querySelector(".absf-btn");
let floorBtn = document.querySelector(".floorfunction-btn");
let ceilBtn = document.querySelector(".ceilfunction-btn");
let randomBtn = document.querySelector(".randomfunction-btn");
let degBtn = document.querySelector(".degfunction-btn");
let dmsBtn = document.querySelector(".dmsfunction-btn");
absFuctionBtn.addEventListener("click", (event) => {
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
floorBtn.addEventListener("click", (event) => {
    try {
        let operationExpression = currentOperation.value;
        currentOperation.value = Math.floor(Number(currentOperation.value)).toString();
        if (isNaN(Number(currentOperation.value)))
            throw "Not a number";
        previousOperation.value = "floor(" + operationExpression + ")";
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
ceilBtn.addEventListener("click", (event) => {
    try {
        let operationExpression = currentOperation.value;
        currentOperation.value = Math.ceil(Number(currentOperation.value)).toString();
        if (isNaN(Number(currentOperation.value)))
            throw "Not a number";
        previousOperation.value = "ceil(" + operationExpression + ")";
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
randomBtn.addEventListener("click", (event) => {
    try {
        currentOperation.value = Math.random().toString();
        if (isNaN(Number(currentOperation.value)))
            throw "Not a number";
        previousOperation.value = "rand()";
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
degBtn.addEventListener("click", (event) => {
    try {
        let operationExpression = currentOperation.value;
        let dms = Number(currentOperation.value);
        let deg = parseInt(dms.toString());
        let sec = Number(dms.toFixed(4)) - Number(dms.toFixed(2)) * 10000;
        let min = (Number(dms.toFixed(2)) - deg) * 100;
        deg = deg + min / 60 + sec / 3600;
        currentOperation.value = deg.toFixed(2).toString();
        if (isNaN(Number(currentOperation.value)))
            throw "Not a number";
        previousOperation.value = "deg(" + operationExpression + ")";
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
dmsBtn.addEventListener("click", (event) => {
    try {
        let operationExpression = currentOperation.value;
        let deg = Number(currentOperation.value);
        let minutes = (deg - parseInt(deg.toString())) * 60;
        let seconds = (minutes - parseInt(minutes.toString())) * 60;
        currentOperation.value = parseFloat(`${parseInt(deg.toString())}.${parseInt(minutes.toString())}${parseInt(seconds.toString())}`)
            .toFixed(4)
            .toString();
        if (isNaN(Number(currentOperation.value)))
            throw "Not a number";
        previousOperation.value = "dms(" + operationExpression + ")";
    }
    catch (err) {
        currentOperation.value = "Invalid syntax";
    }
});
