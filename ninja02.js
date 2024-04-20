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
// const ninja = [5, 6, 3];
// const fun = ninja.every((item) => {
//   return typeof item == "number";
// });
// console.log(fun);

// 4
// const ninja = (str) => {
//   if (str.length >= 5) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
const ninja = (str) => {
  return str.length >= 5 ? true : false;
};
console.log(ninja("忍者CODE"));
ninja("忍者");
