"use strict";

// 上級
// 1
// const anser = document.querySelector(".anser");
// const items = document.querySelectorAll("li");
// let totalWidth = 0;
// items.forEach((item, index) => {
//   if (index != 2) {
//     totalWidth += item.clientWidth;
//   }
// });
// anser.textContent = totalWidth;

// 2
// const ninja = [2, 34, 561, 5, 14];
// const futaketa = ninja.filter((item) => 10 <= item && item <= 99);
// console.log(futaketa);

// 3
// const ninja = ["5", 6, "3"];
const ninja = [5, 6, 3];
const fun = ninja.every((item) => {
  return typeof item == "number";
});
console.log(fun);
