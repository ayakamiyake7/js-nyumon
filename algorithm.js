// https://sevendays-study.com/algorithm/pr-day6.html
function GCD(m, n) {
  const d = m % n;
  if (d === 0) return n;
  return GCD(n, d);
}
console.log(GCD(72, 128));

// バブルソート
// https://sevendays-study.com/algorithm/day5_bubble_c.html
// const MAX_LENGTH = 5;
// function showData(array) {
//   console.log(array.join(" "));
// }

// function babbleSort(array) {
//   let length = array.length;
//   let tmp;
//   for (let i = 0; i < MAX_LENGTH - 1; i++) {
//     showData(array);
//     for (let j = i + 1; j < MAX_LENGTH; j++) {
//       if (array[i] < array[j]) {
//         // i=0 and j=1: array[0] < array[1] = 5<2
//         tmp = array[i];
//         array[i] = array[j];
//         array[j] = tmp;
//         // 交換する
//       }
//     }
//   }
//   showData(array);
// }
// let array = [5, 2, 3, 1, 4];
// babbleSort(array);

// 選択ソート
// https://sevendays-study.com/algorithm/day5_select_c.html
// const array = [5, 2, 3, 1, 4];
// for (let i = 0; i < array.length - 1; i++) {
//   let maxIdx = i;
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[j] > array[maxIdx]) {
//       maxIdx = j;
//     }
//   }
//   if (maxIdx !== i) {
//     let tmp = array[i];
//     array[i] = array[maxIdx];
//     array[maxIdx] = tmp;
//   }
//   console.log(array);
// }
// console.log("最終結果:", array);

// 挿入ソート
// https://sevendays-study.com/algorithm/day5_insert_c.html
const array = [5, 2, 3, 1, 4];

for (let i = 1; i < array.length; i++) {
  let current = array[i]; //2
  let j = i - 1;

  while (j >= 0 && array[j] < current) {
    array[j + 1] = array[j];
    j--;
  }
  array[j + 1] = current;

  console.log(array);
}
console.log("最終結果:", array);
