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
// let val = document.querySelector(".val");
// const text = document.querySelector("input");
// const addButton = document.querySelector(".add");
// addButton.addEventListener("click", () => {
//   val.textContent += text.value;
// });

// 上級
// 1
// const anser = document.querySelector(".anser");
// const items = document.querySelectorAll("li");
// let result = 0;
// items.forEach((item, i) => {
//   if (i != 3) {
//     result += item.clientWidth;
//   }
// });
// console.log(result);
// anser.textContent = result;

// 2
// const ninja = [2, 34, 561, 5, 14];
// const futaketa = ninja.filter((item) => item > 10 && item < 99);
// console.log(futaketa);

// 3
// const ninja = ["5", 6, "3"];
// // const ninja = [5, 6, 3];
// console.log(ninja.every((num) => typeof num === "number"));

// 5
// let fruits = ["りんご", "みかん", "バナナ"];
// const judge = (str) => {
//   if (fruits.indexOf(str) != -1) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// judge("みかん");
// judge("パイナップル");

// basic - 13
// const target = document.querySelector(".target");
// const dummyTexts = ["ダミーテキストF", "ダミーテキストG", "ダミーテキストH"];

// dummyTexts.forEach((text) => {
//   const item = document.createElement("p");
//   item.textContent = text;
//   target.appendChild(item);
// });

// intermediate - 3
// const items = document.querySelectorAll("li");
// let maxItem = 0;

// items.forEach((item) => {
//   if (maxItem < item.clientHeight) {
//     maxItem = item.clientHeight;
//     console.log(item.clientHeight);
//   }
// });
// items.forEach((item) => {
//   item.style.height = `${maxItem}px`;
// });

// intermediate - 16
// const my_array = [2, 19, 59, 203, 5];
// console.log(Math.max(...my_array));

// intermediate - 20
// const deleteButton = document.querySelector(".delete");
// const ul = document.querySelector("ul");

// deleteButton.addEventListener("click", () => {
//   const items = document.querySelectorAll("li");
//   let lastLi = items[items.length - 1];
//   ul.removeChild(lastLi);
// });

// intermediate - 21
// if data-deleteがidだったら
// idをクリックするとdata-delete-targetのidが削除
// const deleteTarget = document.querySelector("[data-delete-target]");
// const deleteButtons = document.querySelectorAll("[data-delete]");
// deleteButtons.forEach((deleteButton) => {
//   deleteButton.addEventListener("click", () => {
//     if (deleteButton.dataset.delete === "id") {
//       deleteTarget.removeAttribute("id");
//     } else {
//       deleteTarget.removeAttribute("class");
//     }
//   });
// });

// intermediate - 23
// const valPoint = document.querySelector(".val");
// const inputArea = document.querySelector("input[type]");
// const addButton = document.querySelector(".add");
// addButton.addEventListener("click", () => {
//   valPoint.textContent += inputArea.value;
// });

// advanced - 1
// const anserVal = document.querySelector(".anser");
// const lis = document.querySelectorAll("li");
// let result = 0;
// lis.forEach((li, i) => {
//   if (i != 3) {
//     result += li.clientWidth;
//   }
// });
// anserVal.textContent = result;

// advanced - 2
// const ninja = [2, 34, 561, 5, 14];
// const futaketa = ninja.filter((num) => num >= 10 && num < 99);
// const futaketa = ninja.filter((num) => String(num).length == 2);
// console.log(futaketa);

// advanced - 3
// const ninja = ["5", 6, "3"];
// const ninja = [5, 6, 3];
// const resultNinja = ninja.every((num) => typeof num === "number");
// console.log(resultNinja);

// intermediate - 3
// const items = document.querySelectorAll("li");
// let hightest = 0;
// console.log(items);
// items.forEach((item) => {
//   if (hightest < item.clientHeight) {
//     hightest = item.clientHeight;
//     console.log("hightest", hightest);
//     console.log("item.clientHeight", item.clientHeight);
//   }
// });
// console.log("hightest", hightest);

// items.forEach((item) => {
//   item.style.height = `${hightest}px`;
// });

// intermediate - 20
const deleteButton = document.querySelector(".delete");
const list = document.querySelector("ul");
deleteButton.addEventListener("click", () => {
  const items = document.querySelectorAll("li");
  const lastLi = items[items.length - 1];
  list.removeChild(lastLi);
});

// advanced - 1
// advanced - 3
// intermediate - 3
// intermediate - 20
