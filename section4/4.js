function solution(m, product) {
  let gift = 0;

  // 상품 가격 낮은 순으로 정렬
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  // 각 상품별 할인 금액 적용 -> 구매 가능 선물 갯수 체크
  for (let i = 0; i < product.length; i++) {
    let budget = m - (product[i][0] / 2 + product[i][1]);

    // 현재 요소는 할인 후 구매했음으로 카운트 1부터 시작
    let cnt = 1;

    for (let j = 0; j < product.length; j++) {
      // 구매한 상품은 건너뜀
      if (i === j) continue;

      // 구매 상품 비용이 예산보다 큰 경우
      if (product[j][0] + product[j][1] > budget) break;

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
