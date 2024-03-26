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
const text = document.querySelector("p");
text.addEventListener("click", () => {
  text.classList.toggle("is-active");
});

// 4
// 5
