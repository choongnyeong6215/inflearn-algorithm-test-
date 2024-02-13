function solution(m, arr) {
    let cnt = 0;
    let sum = 0;

    // 두 요소 참조할 인덱스
    let idx1 = idx2 = 0;

    for (idx2; idx2 < arr.length; idx2++) {
        sum += arr[idx2];

        // m과 같은 경우
        if (sum === m) {
            cnt++;
            // 첫 번째 인덱스 값 제거
            sum -= arr[idx1++];
        }

        // m보다 크거나 같은 경우
        while (sum >= m) {
            sum -= arr[idx1++];

            if (sum === m) {
                cnt++;
            }
        }
    }

    return cnt;
}


// test case
console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));