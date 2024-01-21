function solution(arr) {
    let answer = 0;
    let corCnt = 0;

    for(let num of arr) {
        if(num === 1) {
            corCnt++;
            answer += corCnt;
        }
        else {
            corCnt = 0;
        }
    }
    return answer;
}

// test case
console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
console.log(solution([0, 0, 1, 1, 1, 0, 0, 0, 0, 0]));