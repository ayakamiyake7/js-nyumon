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
// const trigger = document.querySelector(".trigger");
// const target = document.querySelector(".target");
// trigger.addEventListener("click", () => {
//   target.style.opacity = 1;
//   target.style.transition = "0.4s ease-in";
// });

// basic - 13

// 中級
// 1
// const box = document.querySelector(".box");
// const result = box.clientWidth;
// console.log(result);

// 3
// const boxes = document.querySelectorAll("li");
// let maxHeight = 0;
// boxes.forEach((box) => {
//   console.log(maxHeight);
//   console.log(box.clientHeight);
//   if (maxHeight < box.clientHeight) {
//     maxHeight = box.clientHeight;
//   }
// });
// boxes.forEach((box) => {
//   box.style.height = `${maxHeight}px`;
// });
// console.log(maxHeight);

// 4
// const items = document.querySelectorAll("li");
// items.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     console.log(`${index + 1}の忍`);
//   });
// });

// 7
const items = document.querySelectorAll("li");
items.forEach((item) => {
  item.addEventListener("click", () => {
    if ((item.style.backgroundColor = "rgb(255, 0, 0)")) {
      item.style.backgroundColor = "rgb(0, 0, 255)";
    }
  });
});

// 11
// 12
// 13
// 16
// 20
// 21
// 23

// intermediate - 3
