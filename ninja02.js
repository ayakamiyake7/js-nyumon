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
// const ninja = (str) => {
//   return str.length >= 5 ? true : false;
// };
// console.log(ninja("忍者CODE"));
// ninja("忍者");

// 5
// const fruits = ["りんご", "みかん", "バナナ"];
// const judge = fruits.includes(str);

// function judge(str) {
//   if (fruits.indexOf(str) != -1) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const judge = (str) => {
//   return fruits.indexOf(str) > 0 ? true : false;
// };
// console.log(judge("パイン"));
// console.log(judge("みかん"));

// 6
// const my_array = ["忍者", "CO", "DE"];
// const my_array = [2, 3, 4];

// function ninja(my_array) {
//   let res = null;

//   const array_string = my_array.every((str) => {
//     return typeof str == "string";
//   });

//   if (array_string) {
//     res = my_array.join("");
//   } else {
//     res = my_array.reduce(function (p, c) {
//       return p + c;
//     });
//   }
//   return res;
// }

// console.log(ninja(my_array));

// 上級2回目
// 1
// const anser = document.querySelector(".anser");
// const items = document.querySelectorAll("li");
// let total = 0;

// items.forEach((item, index) => {
//   if (index != 2) {
//     total += item.clientWidth;
//   }
// });
// anser.textContent = total;

// 2
// const ninja = [2, 34, 561, 5, 14];
// const futaketa = ninja.filter((num) => num >= 10 && num <= 99);
// console.log(futaketa);

// 3
// // const ninja = ["5", 6, "3"];
// const ninja = [5, 6, 3];
// // ninja.every((item) => typeof "number");
// const isNumber = (num) => typeof num == "number";
// console.log(ninja.every(isNumber));

// 4
// function ninja(str) {
//   return str.length > 5 ? true : false;
// }
// console.log(ninja("CODEam"));

// 5
let fruits = ["りんご", "みかん", "バナナ"];
function judge(str) {
  if (fruits.indexOf(str) >= 0) {
    console.log(true);
  } else if (fruits.indexOf(str) == -1) {
    console.log(false);
  }
}

console.log("qqq", fruits.indexOf("りんご"));
judge("りんご");
judge("みかん");
judge("バナナ");
judge("パイナップル");

// 1
// 2
// 3
// 5
