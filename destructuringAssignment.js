// 分割代入 destructuring assignment

let a, b;
// [a, b] = [10, 20];
// console.log(a);
// console.log(b);

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a);
// console.log(b);
// console.log(rest);

[a, , b, c = 1] = [10, 20, 30];
console.log(a); //10
console.log(b); //30
console.log(c); //1
