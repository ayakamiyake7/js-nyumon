"use strict";

let windowSize = window.innerWidth;
// let num1 = 5;
// let num2 = 8;
// alert(windowSize);

// let text1 = "リンゴ・バナナ";
// let text2 = "レモン";
// text1 = text1.replace("リンゴ・バナナ", "リンゴ・");
// alert((text1 + text2).replace("バナナ", ""));

// const apple = document.querySelector(".apple");
// const orange = document.querySelector(".orange");
// const grape = document.querySelector(".grape");
// apple.addEventListener("click", () => {
//   alert("apple");
// });
// orange.addEventListener("click", () => {
//   alert("orange");
// });
// grape.addEventListener("click", () => {
//   alert("grape");
// });
// console.log(apple);
// console.log(orange);
// console.log(grape);

// const fruits = document.querySelectorAll("li");
// fruits.forEach((fruit) => {
//   fruit.addEventListener("click", () => alert(fruit.getAttribute("class")));
// });

// 答えの一つ
// document.addEventListener("DOMContentLoaded", function () {
//   var listItems = document.querySelectorAll("li");

//   listItems.forEach(function (item) {
//     item.addEventListener("click", function () {
//       alert(this.getAttribute("class"));
//     });
//   });
// });

// const popUpAlert = () => {
//   alert("alert!");
// };

// setTimeout(popUpAlert, 2000);

// setTimeout(() => {
//   console.log("1");
//   setTimeout(() => {
//     console.log("2");
//   }, 1000);
// }, 2000);

// let fruits = ["リンゴ", "メロン", "バナナ"];
// alert(fruits[1]);

// const count = document.querySelectorAll("li").length;
// console.log(count);

// document.querySelector("p").classList.add("is-active");
// document.querySelector("p").classList.remove("blue");

// const text = document.querySelector("p");
// text.addEventListener("click", () => {
//   text.classList.toggle("is-active");
// });

// 11
// const div = document.querySelector("div");
// const child = document.createElement("p");
// child.textContent = `ダミーテキストA`;
// div.prepend(child);

// 12
// const add_child = document.createElement("p");
// add_child.textContent = "ダミーテキストF";
// div.appendChild(add_child);

// 13
// const target = document.querySelector(".target");
// const dummyTexts = ["ダミーテキストF", "ダミーテキストG", "ダミーテキストH"];
// dummyTexts.forEach((name) => {
//   const child = document.createElement("p");
//   child.textContent = name;
//   target.parentNode.insertBefore(child, target.nextSibling);
// });

// 14, 15, 16, 17
// const trigger = document.querySelector(".trigger");
// const target = document.querySelector(".target");
// trigger.addEventListener("click", () => {
//   target.style.opacity = "0";
//   target.style.transition = ".15s ease-in-out";
// });

// confirm();

// alert(innerWidth);
// console.log(window.innerWidth);
// let num1 = 5;
// let num2 = 8;
// alert(num1 + num2);

// let text1 = "リンゴ・バナナ";
// let text2 = "レモン";
// alert(text1.replace("バナナ", "") + text2);

// const fruits = document.querySelectorAll("li");
// fruits.forEach((fruit) => {
//   fruit.addEventListener("click", () => {
//     // console.log(fruit.className);
//     console.log(fruit.getAttribute("class"));
//   });
// });

// 5
// setTimeout(() => {
//   alert("hi");
// }, 2000);

// 6
// const fruits = ["リンゴ", "メロン", "バナナ"];
// alert(fruits[1]);

// 7
// console.log(`liタグの数は${document.querySelectorAll("li").length}個です。`);

// 8
// const text = document.querySelector("p");
// text.classList.add("is-active");

// 9
// const text = document.querySelector("p");
// text.classList.remove("blue");

// 10
// const text = document.querySelector("p");
// text.addEventListener("click", () => {
//   text.classList.toggle("is-active");
// });

// 11
// const target = document.querySelector(".target");
// const text = document.createElement("p");
// text.innerText = "ダミーテキストA";
// target.prepend(text);

// 12
// const target = document.querySelector(".target");
// const item = document.createElement("p");
// item.textContent = "ダミーテキストF";
// target.appendChild(item);
// console.log(item);

// 13
// const target = document.querySelector(".target");
// const texts = [
//   "ダミーテキストF",
//   "ダミーテキストG",
//   "ダミーテキストH",
//   "ダミーテキストI",
//   "ダミーテキストJ",
// ];
// texts.forEach((text) => {
//   const item = document.createElement("p");
//   item.textContent = text;
//   target.parentNode.insertBefore(item, target.nextSibling);
// });

// 14,15
// const trigger = document.querySelector(".trigger");
// const target = document.querySelector(".target");
// trigger.addEventListener("click", () => {
//   target.style.display = "none";
// });

// 16
// const trigger = document.querySelector(".trigger");
// const target = document.querySelector(".target");
// trigger.addEventListener("click", () => {
//   target.style.transition = "all 0.2s ease-in-out";
//   target.style.opacity = "1";
// });

// 17
// const trigger = document.querySelector(".trigger");
// const target = document.querySelector(".target");
// trigger.addEventListener("click", () => {
//   target.style.opacity = 0;
//   target.style.transition = "all 0.2s ease-in-out";
// });

// 4
// 5
// 11
// 13
// 16

// 中級
// 1
// const box = document.querySelector(".box");
// console.log(box.clientWidth);

// 2
// const title = document.querySelector(".title");
// const colorChange = document.getElementById("color-change");
// colorChange.addEventListener("change", () => {
//   console.log(colorChange.value);
//   title.style.color = colorChange.value;
// });

// 3
// const listItems = document.querySelectorAll("li");
// let maxHeight = 0;

// listItems.forEach((item) => {
//   if (item.clientHeight > maxHeight) {
//     maxHeight = item.clientHeight;
//   }
//   // console.log(item.clientHeight);
// });

// listItems.forEach((item) => {
//   item.style.height = `${maxHeight}px`;
// });

// 4
// const items = document.querySelectorAll("li");
// items.forEach((item, i) => {
//   item.addEventListener("click", () => {
//     console.log(`あなたは${i + 1}番目を押しました`);
//   });
// });

// 5
// const h1 = document.querySelector("h1");
// const birthday = document.getElementById("birthday");
// birthday.addEventListener("change", () => {
//   if (birthday.value === "1990-01-23") {
//     h1.style.display = "block";
//   }
// });

// 6
// const el = (i) => {
//   console.log(`なるほど！${i}なんですね！`);
// };
// el("テレビ");

// 7
// const items = document.querySelectorAll("li");
// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     if ((item.style.backgroundColor = "rgb(255, 0, 0)")) {
//       item.style.backgroundColor = "rgb(0, 0, 255)";
//     }
//   });
// });

// 8
// const ninja = (target) => {
//   if (Number.isInteger(target)) {
//     console.log("整数です");
//   }
// };
// ninja("10");

// 9
// const ninja = (target) => {
//   console.log(target.length);
// };
// ninja("忍者CODE");

// 10
// let date = new Date();
// const month_judge = (target) => {
//   if (target == date.getMonth() + 1) {
//     console.log("今月の月です！");
//   } else {
//     console.log("今月の月ではありません");
//   }
// };
// month_judge(6);

// 11
// const ninja = [1, 3, 5, 7];
// ninja.pop();
// console.log(ninja);

// 12
// let target_str = "忍者CODE";
// const ninja_judge = (str) => {
//   if (str.includes("忍者CODE")) {
//     console.log("含む！");
//   }
// };
// ninja_judge("おはよう忍者CODE");

// もう一つの答え
// const ninja_judge = (str) => {
//   if (str.indexOf(target_str) !== -1) {
//     console.log("含む！");
//   }
// };
// ninja_judge("おはよう忍者CODE");

// 13
// const ninja = "28";
// console.log(Number(ninja));
// console.log(typeof Number(ninja));

// 14
// const ninja = [2, 4, 52, 9, 38];
// console.log(ninja[3]);

// 15
// const my_uppercase = (str) => {
//   console.log(str.toUpperCase());
// };
// my_uppercase("ninjacode");

// 16
// const my_array = [2, 19, 59, 203, 5];
// console.log(Math.max(...my_array));

// 17
// const clone = document.querySelector(".clone");
// const ul = document.querySelector("ul");
// clone.addEventListener("click", () => {
//   const list = document.createElement("li");
//   list.textContent = "忍者CODE";
//   ul.appendChild(list);
// });

// 18
// const answer = document.querySelector(".answer");
// const text = document.querySelector("input");
// text.addEventListener("focus", () => {
//   console.log(text.value);
//   answer.textContent = text.value;
// });

// 19
// const xScroll = document.querySelector(".x-scroll");
// const scroll_val = document.querySelector(".scroll-val");
// xScroll.addEventListener("scroll", (e) => {
//   // console.log(xScroll.scrollLeft);
//   scroll_val.textContent = xScroll.scrollLeft;
// });

// 20
// const deleteButton = document.querySelector(".delete");
// const ul = document.querySelector("ul");
// deleteButton.addEventListener("click", () => {
//   const lis = document.querySelectorAll("li");
//   if (lis.length > 0) {
//     var lastLi = lis[lis.length - 1];
//     ul.removeChild(lastLi);
//   }
// });

// 21
// function handleClick(e) {
//   const attributeDelete = e.target.getAttribute("data-delete");
//   console.log(attributeDelete);
//   const deleteTarget = document.querySelector("[data-delete-target]");

//   if (attributeDelete === "id") {
//     deleteTarget.removeAttribute("id");
//   } else if (attributeDelete === "class") {
//     deleteTarget.removeAttribute("class");
//   }
// }

// const attributeDataDeletes = document.querySelectorAll("[data-delete]");
// attributeDataDeletes.forEach((attributeDataDelete) => {
//   attributeDataDelete.addEventListener("click", handleClick);
// });

// // Function to handle click event on elements with data-delete attribute
// function handleClick(event) {
//   // Get the value of data-delete attribute
//   var attributeToDelete = event.target.getAttribute("data-delete");
//   // If data-delete-target attribute exists, get the target element
//   var targetElement = document.querySelector("[data-delete-target]");
//   // Check if the attribute to delete is 'id' or 'class'
//   if (attributeToDelete === "id") {
//     // Remove the id attribute
//     targetElement.removeAttribute("id");
//   } else if (attributeToDelete === "class") {
//     // Remove the class attribute
//     targetElement.removeAttribute("class");
//   }
// }

// // Add click event listener to all elements with data-delete attribute
// var elementsWithDeleteAttribute = document.querySelectorAll("[data-delete]");
// elementsWithDeleteAttribute.forEach(function (element) {
//   element.addEventListener("click", handleClick);
// });

// 22
// const val = document.querySelector(".scroll-val");
// window.addEventListener("scroll", () => {
//   const txt = window.scrollY;
//   val.textContent = txt;
// });

// 23
// const val = document.querySelector(".val");
// const add = document.querySelector(".add");
// const textValue = document.querySelector("input");
// // textValue.addEventListener("change", (e) => {
// //   const textValue = e.target.value;
// //   add.addEventListener("click", () => {
// //     val.textContent = textValue;
// //   });
// // });
// add.addEventListener("click", () => {
//   const inputValue = textValue.value;
//   val.textContent += inputValue;
// });

// 24
// const double = document.querySelector(".double");
// double.addEventListener("dblclick", () => {
//   console.log("alert!");
// });

// 25
// const val = document.querySelector(".val");
// const txt = document.querySelector('input[type = "text"]');
// txt.addEventListener("change", () => {
//   val.textContent = txt.value;
// });

// 26
// const val = document.querySelector(".val");
// function resizeWin() {
//   val.textContent = val.offsetWidth;
// }

// window.addEventListener("resize", resizeWin);

// 27
// const elVal = document.querySelector(".val");
// const target = document.querySelector("input[type=text]");
// target.addEventListener("keyup", () => {
//   elVal.textContent = target.value;
// });

// 中級2回目
// 1
// const box = document.querySelector(".box");
// console.log(box.offsetWidth);
// console.log(box.clientWidth);

// 2
// const title = document.querySelector(".title");
// const colorChange = document.getElementById("color-change");
// console.log(colorChange.value);
// colorChange.addEventListener("change", () => {
//   console.log(colorChange.value);
//   title.style.color = colorChange.value;
// });

// 3
// const LIs = document.querySelectorAll("li");
// let maxHeight = 0;
// LIs.forEach((LI) => {
//   console.log(maxHeight);
//   console.log(LI.clientHeight);
//   if (maxHeight < LI.clientHeight) {
//     maxHeight = LI.clientHeight;
//   }
// });

// LIs.forEach((LI) => {
//   LI.style.height = `${maxHeight}px`;
// });

// 4
// const items = document.querySelectorAll("li");
// items.forEach((item, i) => {
//   item.addEventListener("click", (e) => {
//     console.log(`あなたは${i}番目を押しました！`);
//   });
// });

// 5
// const title = document.querySelector("h1");
// const birthday = document.getElementById("birthday");
// birthday.addEventListener("change", (e) => {
//   console.log(e.target.value);
//   console.log(birthday.value);
//   if (birthday.value === "1990-01-03") {
//     title.style.display = "block";
//   }
// });

// 6
// function naruhodo(txt) {
//   console.log(`なるほど！${txt}なんですね！`);
// }
// naruhodo(`テレビ`);

// 7
// const items = document.querySelectorAll("li");
// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     if (item.style.backgroundColor == "rgb(0, 0, 255)") {
//       return;
//     } else if (item.style.backgroundColor == "rgb(255, 0, 0)") {
//       item.style.backgroundColor == "rgb(0, 0, 255)";
//     }
//   });
// });
// const items = document.querySelectorAll("li");
// items.forEach((item) => {
//   console.log(getComputedStyle(item).getPropertyValue("background-color"));
//   item.addEventListener("click", () => {
//     const backgroundColor =
//       getComputedStyle(item).getPropertyValue("background-color");
//     if (backgroundColor === "rgb(0, 0, 255)") {
//       return;
//     } else if (backgroundColor === "rgb(255, 0, 0)") {
//       item.style.backgroundColor = "rgb(0, 0, 255)";
//     }
//   });
// });

// 8
// function ninja(target) {
//   if (Number.isInteger(target)) {
//     return target;
//   }
// }
// console.log(ninja(2));

// 9
// const ninja = "忍者CODE";
// console.log(ninja.length);

// 10
// const this_month = new Date().getMonth() + 1;
// console.log(this_month);
// function month_judge(month) {
//   if (month === this_month) {
//     console.log("今月！");
//   } else {
//     console.log("今月の月ではありません");
//   }
// }
// month_judge(2);

// 11
// const ninja = [1, 3, 5, 7];
// ninja.pop();
// console.log(ninja);

// 12
// let target_str = "忍者CODE";
// function ninja_judge(str) {
//   console.log(str.indexOf(target_str));
//   if (str.indexOf(target_str) !== -1) {
//     console.log("含む！");
//   }
// }
// ninja_judge("忍者CODE");

// 13
// const ninja = "28";
// const result = Number(ninja);
// console.log(typeof result);

// 14
// const ninja = [2, 4, 52, 9, 38];
// console.log(ninja[3]);

// 15
// function my_uppercase(str) {
//   console.log(str.toUpperCase());
// }
// my_uppercase("CODE");

// 16
// let my_array = [2, 19, 59, 203, 5];
// let maxNum = Math.max(...my_array);
// console.log(maxNum);

// 17
// const clone = document.querySelector(".clone");
// const list = document.querySelector("ul");
// clone.addEventListener("click", () => {
//   const item = document.createElement("li");
//   item.textContent = "忍者CODE";
//   list.appendChild(item);
// });

// 18
// const answer = document.querySelector(".answer");
// const txt = document.querySelector("input[type=text]");
// txt.addEventListener("focus", () => {
//   answer.textContent = txt.value;
//   console.log(txt.value);
// });

// 19
// const scrollVal = document.querySelector(".scroll-val");
// const scroll = document.querySelector(".x-scroll");
// scroll.addEventListener("scroll", () => {
//   const result = scroll.scrollLeft;
//   scrollVal.textContent = result;
// });

// 20
// const deleteButton = document.querySelector(".delete");
// const ul = document.querySelector("ul");
// deleteButton.addEventListener("click", () => {
//   const items = document.querySelectorAll("ul li");
//   console.log(items);

//   if (items.length > 0) {
//     ul.removeChild(items[items.length - 1]);
//   }
// });

// 21
// function handleClick(e) {
//   const getAttribute = e.target.getAttribute("data-delete");
//   console.log(getAttribute);
//   const deleteTarget = document.querySelector("[data-delete-target]");

//   if (getAttribute === "id") {
//     deleteTarget.removeAttribute("id");
//   } else if (getAttribute === "class") {
//     deleteTarget.removeAttribute("class");
//   }
// }
// const attributeDataDeletes = document.querySelectorAll("[data-delete]");
// attributeDataDeletes.forEach((attributeDataDelete) => {
//   attributeDataDelete.addEventListener("click", handleClick);
// });

// 22
// const val = document.querySelector(".scroll-val");
// window.addEventListener("scroll", () => {
//   val.textContent = window.scrollY;
// });

// 23
// const val = document.querySelector(".val");
// const txt = document.querySelector('input[type="text"]');
// const addButton = document.querySelector(".add");

// addButton.addEventListener("click", () => {
//   const inputValue = txt.value;
//   val.textContent += inputValue;
//   txt.value = "";
// });

// add.addEventListener("click", () => {
//   const inputValue = textValue.value;
//   val.textContent += inputValue;
// });

// 24
// const double = document.querySelector(".double");
// double.addEventListener("dblclick", () => {
//   console.log("double");
// });

// 25
const val = document.querySelector(".val");
const text = document.querySelector('input[type="text"]');
text.addEventListener("change", () => {
  val.textContent = text.value;
});

// 1
// 3
// 4
// 7
// 11
// 12
// 13
// 16
// 20
// 21
// 23
