"use strict";
// 初級
// 4
// const items = document.querySelectorAll("li");
// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     // const result = item.className;
//     const result = item.getAttribute("class");
//     console.log(result);
//   });
// });

// 5
// const fn = () => {
//   console.log("hi");
// };
// setTimeout(fn, 2000);

// 11
// const target = document.querySelector(".target");
// const item = document.createElement("p");
// item.textContent = "ダミーテキストa";
// console.log(item);
// target.prepend(item);

// 13
// const target = document.querySelector(".target");
// const items = ["ダミーテキストF", "ダミーテキストG"];
// items.forEach((item) => {
//   const child = document.createElement("p");
//   child.textContent = item;
//   target.append(child);
// });

// 16
const trigger = document.querySelector(".trigger");
const target = document.querySelector(".target");
trigger.addEventListener("click", () => {
  target.style.opacity = 1;
  target.style.transition = "0.4s ease-in";
});

// basic - 13
