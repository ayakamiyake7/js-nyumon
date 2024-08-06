// 【最新ver対応済】モダンJavaScriptの基礎から始める挫折しないためのReact入門
// https://www.udemy.com/course/modern_javascipt_react_beginner/learn/lecture/40838690#overview

// const sayHello = (name = "guest") => console.log(`こんにちは〜${name}さん！`);
// sayHello();

const myProfile = {
  age: 31,
};
const { namePro = "jakee", age } = myProfile;
console.log(`Hello! ${namePro}. Age is ${age}.`);

const nameArr = ["田中", "山田", "じゃけぇ"];
nameArr.map((name) => {
  // if (name === "じゃけぇ") {
  //   return `${name}`;
  // } else {
  //   return `${name}さん`;
  // }
  name === "じゃけぇ" ? console.log(`${name}`) : console.log(`${name}さん`);
});

const num = 1300;
// console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています！" : "許容範囲内です";
};
console.log(checkSum(55, 60));

// パイプライン
const number = null;
const fee = number || "金額未設定です";
console.log(fee);

const num2 = 0;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
