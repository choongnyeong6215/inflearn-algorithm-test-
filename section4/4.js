function solution(m, product) {
    let answer = Number.MIN_SAFE_INTEGER;
    // 학생 수
    let totalStudent = product.length;

    // 가격 + 배송비 오름차순으로 정렬
    product.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));

    for(let i = 0; i < totalStudent; i++) {
        // 할인받을 상품 구매 후 잔여 예산
        let remainBudget = m - (product[i][0] / 2 + product[i][1]);

        // 구매 상품
        let purchaseAmount = 1;

        for(let j = 0; j < totalStudent; j++) {
            if(i === j) {
                continue;
            }

            if(product[j][0] + product[j][1] > remainBudget) {
                break;
            }

            // 남은 상품 구매 금액이 잔여 예산보다 작거나 같아야함
            if(product[j][0] + product[j][1] <= remainBudget) {
                remainBudget -= (product[j][0] / 2 + product[j][1]);
                purchaseAmount++;
            }
        }
        answer = Math.max(answer, purchaseAmount);
    }
    
    return answer;
}


// test case
arr = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));