function solution(arr) {
    let cnt = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            const stdArr = [];
            const stdNum = arr[i][j];
            const left = arr[i][j-1] ?? 0;
            const right = arr[i][j+1] ?? 0;
            const top = i > 0 ? arr[i-1][j] : 0;
            const bottom = i < arr.length - 1 ? arr[i+1][j] : 0; 

            stdArr.push(stdNum);
            stdArr.push(left);
            stdArr.push(right);
            stdArr.push(top);
            stdArr.push(bottom);

            if(stdNum === stdArr.sort((a, b) => b - a)[0]) {
                cnt++;
            }
        }
    }
    return cnt;
}


// test case
console.log(solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2]
])); 
