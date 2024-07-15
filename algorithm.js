// https://sevendays-study.com/algorithm/pr-day6.html
function GCD(m, n) {
  const d = m % n;
  if (d === 0) return n;
  return GCD(n, d);
}
console.log(GCD(72, 128));

// バブルソート
// https://sevendays-study.com/algorithm/day5_bubble_c.html
