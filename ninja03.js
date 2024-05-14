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
// const items = document.querySelectorAll("li");
// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     if ((item.style.backgroundColor = "rgb(255, 0, 0)")) {
//       item.style.backgroundColor = "rgb(0, 0, 255)";
//     }
//   });
// });

// 11
// const ninja = [1, 3, 5, 7];
// console.log(ninja.pop());

// 12
// let target_str = "忍者CODE";
// const ninja_judge = (str) => {
//   if (str.indexOf(target_str) == -1) {
//     return;
//   } else {
//     console.log("含む！");
//   }
// };
// ninja_judge("あいうえお");
// // ninja_judge("忍者CODE");
// ninja_judge("忍者コード");
// // ninja_judge("おはよう忍者CODE");

// 13
// let ninja = "28";
// const number = Number(ninja);
// console.log(typeof number);

// 16
// const my_array = [2, 19, 59, 203, 5];
// console.log(Math.max(...my_array));

// 20
// const clickButton = document.querySelector(".delete");
// const ul = document.querySelector("ul");
// clickButton.addEventListener("click", () => {
//   const items = document.querySelectorAll("li");
//   // items.forEach((item, i) => {
//   ul.removeChild(items[items.length - 1]);
//   // });
// });

// 21
// const clicks = document.querySelectorAll("[data-delete]");
// const deleteTarget = document.querySelector("[data-delete-target]");
// console.log(target);
// clicks.forEach((click) => {
//   console.log(click.getAttribute("data-delete"));
//   const attribute = click.getAttribute("data-delete");
//   if (attribute === "id") {
//     click.addEventListener("click", () => {
//       target.removeAttribute("id");
//     });
//   } else if (attribute === "class") {
//     click.addEventListener("click", () => {
//       target.removeAttribute("class");
//     });
//   }
// });

// 23
let val = document.querySelector(".val");
const text = document.querySelector("input");
const addButton = document.querySelector(".add");
addButton.addEventListener("click", () => {
  val.textContent += text.value;
});

// intermediate - 3
// intermediate - 16
// intermediate - 20
// intermediate - 21
// intermediate - 23

// 上級
// 1
// 2
// 3
// 5
