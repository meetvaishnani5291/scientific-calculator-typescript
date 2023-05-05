"use strict";
let mstoreBtn = document.querySelector(".mstore-btn");
let mreadBtn = document.querySelector(".mread-btn");
let mclearBtn = document.querySelector(".mclear-btn");
let maddBtn = document.querySelector(".madd-btn");
let msubtractBtn = document.querySelector(".msubtract-btn");
let meomry = [];
maddBtn.addEventListener("click", () => {
    if (meomry.length === 0) {
        meomry[0] = 0;
    }
    if (!isNaN(Number(currentOperation.value))) {
        meomry[meomry.length - 1] += Number(currentOperation.value);
    }
});
msubtractBtn.addEventListener("click", () => {
    if (meomry.length === 0) {
        meomry[0] = 0;
    }
    if (!isNaN(Number(currentOperation.value))) {
        meomry[meomry.length - 1] -= Number(currentOperation.value);
    }
});
mclearBtn.addEventListener("click", () => {
    meomry = [];
});
mreadBtn.addEventListener("click", () => {
    const lastRecord = meomry.at(-1);
    if (lastRecord !== undefined)
        currentOperation.value = lastRecord.toString();
});
mstoreBtn.addEventListener("click", () => {
    meomry.push(0);
});
