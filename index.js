// let unko = "Hello";
// // unko = "hello world2";

// console.log(unko);

//
// const bigUnko = "he is unko";
// // bigUnko = "hello world";
// console.log("bigUnko");

let inoki = ["イーチ", "ニー", "さん", "だー"];
// console.log(inoki[1]);

// //ループ
// let index = 0;
// while (index < inoki.length) {
//   console.log(inoki[index]);

//   index++;
// }

//if else
// if (inoki.length > 5) {
//   console.log("ボンバイエ！");
// } else {
//   console.log("ボンバ");
// }

//関数
const test = arg => {
  if (inoki.length > arg) {
    console.log("ボンバイエ！");
  } else {
    console.log("ボンバ");
  }
};
// test(6);
// test(5);
// test(2);
// test(6);

//object
const unko2 = {
  color: "pink",
  size: "large",
  perfume: "mint",
  toilet: () => {
    console.log("hello world");
  },
};
console.log(unko2);

// console.log(window.alert("world"));

console.log(document);
// console.log(
//   document.getElementsByTagName("button")[0].addEventListener("click", () => {
//     window.alert("hello world");
//   })
// );
// document.getElementsByTagName("button")[index].addEventListener("click", () => {
//   console.log("hello wd");
// });

document.getElementsByTagName("button")[1].addEventListener("click", () => {
  console.log("abc");
});
