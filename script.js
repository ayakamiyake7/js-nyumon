// thisについて学ぼう

let myObj = {
  id: 2,
  printId() {
    console.log(this.id);
  },
};
myObj.printId();

const sayFoo = function () {
  console.log(this[`foo`]);
};
foo = "foo";

const mySecondObj = {
  foo: "I'm in the obj",
  sayFoo,
};
// sayFoo();
mySecondObj.sayFoo();

// function myObj(id) {
//   this.id = id;
// }
// myObj.prototype.printId = function (id) {
//   console.log(this.id);
// };

class MyClass {
  constructor(id) {
    this.id = id;
  }
  printId(id) {
    console.log(this.id);
  }
}
// const newInstance = new Object(5);

const outer = {
  func1: function () {
    console.log(this);
    let _that = this;

    const func2 = (function () {
      console.log(_that);

      const func3 = function () {
        console.log(_that);
      };
    })();
  },
};
outer.func1();
