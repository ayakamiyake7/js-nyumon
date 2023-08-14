let increment = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    console.log(counter);
  };
})();
increment();

function addStringFactory(tail) {
  //   function concat(str) {
  //     return str + tail;
  //   }
  //   return concat;
  return function (str) {
    return str + tail;
  };
}

let addAs = addStringFactory("AAAAA");
let addBs = addStringFactory("BBBBB");

let str = "Tom";
str = addAs(str);
console.log(str);
