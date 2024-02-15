// 슬라이딩 윈도우 풀이
function solution (k, arr) {
    // 초기값 : 가장 앞 3일 매출 합계
    let sum = maxSales = arr[0] + arr[1] + arr[2];

    // 슬라이딩 윈도우로 현재 인덱스 - 가장 앞의 인덱스 값 누적하여 최대 매출 갱신
    for (let i = k; i < arr.length; i++) {
        sum += (arr[i] - (arr[i - k]));

        maxSales = Math.max(sum, maxSales);
    }

    return maxSales;
}


// test case
console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));