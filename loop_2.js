const data = [1, 4, 2, 5, 3];
const fruits = { banana: "バナナ", apple: "りんご", orange: "オレンジ" };

const newData = Object.keys(fruits).map((value, index, array) => {
  return value + "aaaa";
});

// console.log("data", Object.keys(fruits));
// console.log(newData);

const newData2 = data.filter((value, index, array) => {
  return index !== 1;
});

console.log("data", data);
console.log("newData2", newData2);

const newData3 = data.reduce((accu, curr) => {
  console.log(accu, curr);
  return accu + curr;
});

console.log("data", data);
console.log("newData3", newData3);

const newData4 = data
  .map((v) => v + 1)
  .sort((a, b) => {
    return b - a;
  });

console.log("data", data);
console.log("newData4", newData4);
