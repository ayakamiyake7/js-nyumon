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

// クイックソート
// https://sevendays-study.com/algorithm/day7_quick_c.html
// ヒント https://github.com/TheAlgorithms/JavaScript/blob/master/Sorts/QuickSort.js
function quickSort(items) {
  const length = items.length;

  if (length <= 1) {
    return items;
  }

  const PIVOT = items[0];
  const GREATER = [];
  const LESSER = [];

  for (let i = 1; i < length; i++) {
    if (items[i] > PIVOT) {
      GREATER.push(items[i]);
    } else {
      LESSER.push(items[i]);
    }
  }

  const sorted = [...quickSort(LESSER), PIVOT, ...quickSort(GREATER)];
  return sorted;
}

const items = [5, 2, 3, 1, 4];
console.log(quickSort(items));

// 線形探索
// アルゴリズム図鑑 + ChatGPT
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
// 使用例
const linearSearchArray = [20, 30, 40, 50, 60];
const target = 30;

const result = linearSearch(linearSearchArray, target);
if (result !== -1) {
  console.log(`要素が見つかりました！ ${result + 1} 番目の数字です！`);
} else {
  console.log("要素が見つかりませんでした");
}

// 二分探索
// アルゴリズム図鑑 + ChatGPT
function binarySearch(arr, target) {
  let left = 0; // index
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    console.log("mid=", mid);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      // ターゲットが真ん中より右半分にあるとき
      left = mid + 1;
    } else {
      // ターゲットが真ん中より左半分にあるとき
      right = mid - 1;
    }
  }
  return -1;
}

// 使用例
const binarySearchArr = [10, 20, 30, 40, 50, 60];
const binarySearchTarget = 60;

const binarySearchResult = binarySearch(binarySearchArr, binarySearchTarget);
if (binarySearchResult !== -1) {
  console.log(
    `要素が見つかりました！ ${binarySearchResult + 1} 番目の数字です！`
  );
} else {
  console.log("要素が見つかりませんでした");
}
