const data = [1, 4, 2, 5, 3];
const fruits = { banana: "バナナ", apple: "りんご", orange: "オレンジ" };

// Object.prototype = Object.keys(fruits);
Object.prototype.additionalFn = function () {};

let keyFruits = Object.keys(fruits);
// console.log(keyFruits);
// for (let i = 0; i < keyFruits.length; i++) {
//   console.log(i, fruits[keyFruits[i]]);
// }

// for (let i in fruits) {
//   if (fruits.hasOwnProperty(i)) {
//   console.log(i, fruits[i]);
//   }
// }

for (let i of keyFruits) {
  console.log(i, fruits[i]);
}
