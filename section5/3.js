function solution(m, arr) {
    let cnt = 0;

    // 배열 요소 참조할 인덱스
    let idx1 = idx2 = 0;

    let sum = 0;

    for(let idx2 = 0; idx2 < arr.length; idx2++) {
        sum += arr[idx2];

        // 수열의 합이 m과 동일한 경우
        if(sum === m) {
            cnt++;
        }
    }

    return cnt;
}


// test case
console.log(6, [1, 2, 1, 3, 1, 1, 1, 2]);