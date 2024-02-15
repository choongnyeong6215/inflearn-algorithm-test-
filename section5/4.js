function solution(m, arr) {
    let cnt = 0;
    let sum = 0;

    // 각 요소 참조할 인덱스
    let idx1 = idx2 = 0;

    for (idx2; idx2 < arr.length; idx2++) {
        sum += arr[idx2];

        while (sum > m) {
            sum -= arr[idx1++];
        }

        // 새롭게 추가된 연속부분수열 누적
        cnt += (idx2 - idx1 + 1);
    }

    return cnt;
}


// test case
console.log(solution(5, [1, 3, 1, 2, 3]));