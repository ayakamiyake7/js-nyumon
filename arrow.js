// アロー関数
// function timesTwo(i) {
//   return i * 2;
// }

// const res = timesTwo(2);
window.me = "global";
const timesTwo = (i) => i * 2;
console.log(timesTwo(3));

const outer = function () {
  let me = "outer";
  return {
    me: "inner",
    say: () => {
      console.log(this.me);
    },
  };
};
outer().say();
