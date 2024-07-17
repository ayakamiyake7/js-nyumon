// https://sevendays-study.com/algorithm/pr-day6.html
function GCD(m, n) {
  const d = m % n;
  if (d === 0) return n;
  return GCD(n, d);
}
console.log(GCD(72, 128));

// バブルソート
// https://sevendays-study.com/algorithm/day5_bubble_c.html
const MAX_LENGTH = 5;
function showData(array) {
  console.log(array.join(" "));
}

function babbleSort(array) {
  let length = array.length;
  let tmp;
  for (let i = 0; i < MAX_LENGTH - 1; i++) {
    showData(array);
    for (let j = i + 1; j < MAX_LENGTH; j++) {
      if (array[i] < array[j]) {
        // i=0 and j=1: array[0] < array[1] = 5<2
        tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
      }
    }
  }
  showData(array);
}
let array = [5, 2, 3, 1, 4];
babbleSort(array);
