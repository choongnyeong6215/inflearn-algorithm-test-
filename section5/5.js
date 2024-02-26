// 슬라이딩 윈도우 알고리즘 풀이
function solution(k, arr) {
  // 최초 3일 매출액
  let sales = arr[0] + arr[1] + arr[2];
  let maxSales = 0;

  for (let i = k; i < arr.length; i++) {
    sales += arr[i] - arr[i - k];

    maxSales = Math.max(sales, maxSales);
  }

  return maxSales;
}

// test case
console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
