let obj1 = { foo: "bar", x: 42 };
let obj2 = { foo: "baz", y: 13 };

let cloneObj = { ...obj1 };
let mergeObj = { ...obj1, ...obj2 };
console.log(mergeObj);

let a = [[1, 2], [2], [3]];
let b = [...a];
b.shift().shift(); //1

/**
 * Rest Parameters
 */
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

const result = sum(1, 2, 3);
console.log(result);
