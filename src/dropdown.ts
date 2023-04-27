let trigonometryBtn = document.querySelector(".trigonometry-btn")!;
let functionsBtn = document.querySelector(".functions-btn")!;
let trigonometryDropdown1 = document.querySelector(".dropdown1-1")!;
let trigonometryDropdown2 = document.querySelector(".dropdown1-2")!;
let trigonometryDropdown3 = document.querySelector(".dropdown1-3")!;
let trigonometryDropdown4 = document.querySelector(".dropdown1-4")!;
let trigonometrySecondBtns = document.querySelectorAll(
  ".trigonometry-second-btn"
);
let trigonometryHypBtns = document.querySelectorAll(".hyp-btn");
let trigonometryDropdownMain = document.querySelector(".dropdown1")!;
let functionsDropdown = document.querySelector(".dropdown2")!;

let trigonometrySecondFlag = false;
let trigonometryHypFlag = false;
let trigonometryDropdownDisplay = function () {
  if (trigonometrySecondFlag && trigonometryHypFlag) {
    trigonometryDropdown1.classList.toggle("hide-btn");
    trigonometryDropdown2.classList.toggle("hide-btn");
    trigonometryDropdown3.classList.toggle("hide-btn");
    trigonometryDropdown4.classList.toggle("hide-btn");
  } else if (trigonometrySecondFlag && !trigonometryHypFlag) {
    trigonometryDropdown1.classList.toggle("hide-btn");
    trigonometryDropdown2.classList.toggle("hide-btn");
    trigonometryDropdown3.classList.toggle("hide-btn");
    trigonometryDropdown4.classList.toggle("hide-btn");
  } else if (!trigonometrySecondFlag && trigonometryHypFlag) {
    trigonometryDropdown1.classList.toggle("hide-btn");
    trigonometryDropdown2.classList.toggle("hide-btn");
    trigonometryDropdown3.classList.toggle("hide-btn");
    trigonometryDropdown4.classList.toggle("hide-btn");
  } else {
    trigonometryDropdown1.classList.toggle("hide-btn");
    trigonometryDropdown2.classList.toggle("hide-btn");
    trigonometryDropdown3.classList.toggle("hide-btn");
    trigonometryDropdown4.classList.toggle("hide-btn");
  }
};

trigonometryBtn.addEventListener("click", () => {
  trigonometryDropdownMain.classList.toggle("hide-btn");
});
trigonometrySecondBtns.forEach((button) => {
  button.addEventListener("click", () => {
    trigonometrySecondFlag = trigonometrySecondFlag ? false : true;
    trigonometryDropdownDisplay();
  });
});
trigonometryHypBtns.forEach((button) => {
  button.addEventListener("click", () => {
    trigonometryHypFlag = trigonometryHypFlag ? false : true;
    trigonometryDropdownDisplay();
  });
});
functionsBtn.addEventListener("click", () => {
  functionsDropdown.classList.toggle("hide-btn");
});
