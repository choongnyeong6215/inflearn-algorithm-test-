function solution(arr) {
    let answer = arr;
    let totalHeight = arr.reduce((accr, curv) => accr + curv, 0);

    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(totalHeight - (arr[i] + arr[j]) === 100) {
                answer.splice(j, 1);
                answer.splice(i, 1);
            }
        }
    }

    return answer;
}


// test case
console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
console.log(solution([33, 7, 23, 19, 10, 15, 12, 8, 13]));