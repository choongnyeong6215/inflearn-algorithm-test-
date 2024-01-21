function solution(arr) {
    let answer = [];
    let sum = 0;
    let minNum = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            sum += arr[i];

            if(arr[i] < minNum) {
                minNum = arr[i];
            }
        }
    }
    answer.push(sum);
    answer.push(minNum);

    return answer;
}


// test case
console.log(solution([12, 77, 38, 41, 53, 92, 85]));
console.log(solution([11,22,33,44,55]));