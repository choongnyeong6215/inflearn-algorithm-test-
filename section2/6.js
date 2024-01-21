function solution(arr) {

    let maxNum = Number.MIN_SAFE_INTEGER;
    let rowSum = colSum = lCrossSum = rCrossSum = 0;

    for(let i = 0; i < arr.length; i++) {
        
        // 초기화
        rowSum = 0;
        colSum = 0;

        for(let j = 0; j < arr[i].length; j++) {
            rowSum += arr[i][j];
            colSum += arr[j][i];

            if(i === j) {
                lCrossSum += arr[i][j]; // left top - right bottom
                rCrossSum += arr[i][arr.length - i -1]  // right top - left bottom
            }

            maxNum = Math.max(maxNum, rowSum, colSum, lCrossSum, rCrossSum);
        }
    }
    return maxNum;
}


// test case
console.log(solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]
]));