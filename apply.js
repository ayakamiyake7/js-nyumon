"use strict";
// apply,call,bind

function greet(id, id2, id3) {
  console.log(arguments);
  let slicedArray = [].slice.call(arguments);
  // let hi = `Hi, ${this.name}`;
  //   console.log(hi);
  console.log(slicedArray);
}
let obj = { name: "Tom" };
greet.apply(obj, [1, 2, 3]);

const arr = [1, 2, 3, 4];
console.log(Math.min.apply(null, arr)); //今は「...arr」でいけます

let myObj = {
  id: 42,
  print() {
    console.log(this);
    setTimeout(() => {
      console.log(this), 1000; //アロー関数の場合はthisが同じとなる。functionを使うと違う
    });
  },
};
myObj.print();
