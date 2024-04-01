function solution(m, product) {
  let gift = Number.MIN_SAFE_INTEGER;

  // 최대한 많이 구매하기 위해 가격 낮은 순으로 정렬
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < product.length; i++) {
    // 낮은 가격 상품부터 할인 적용해보며 최대 구매 가능 갯수 체크
    let budget = m - (product[i][0] / 2 + product[i][1]);

    let cnt = 1;

    for (let j = 0; j < product.length; j++) {
      // 중복 상품 제외
      if (i === j) continue;

      // 예산 초과
      if (product[j][0] + product[j][1] > budget) break;

      // 예산 이내
      if (product[j][0] + product[j][1] <= budget) {
        budget -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    gift = Math.max(gift, cnt);
  }

  return gift;
}

// test case
arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
