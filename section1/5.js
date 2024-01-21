function solution(arr) {
    let minNum = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < minNum) {
            minNum = arr[i];
        }
    }
    return minNum;
}


// test case
console.log(solution([5, 3, 7, 11, 2, 15, 17]));
console.log(solution([22, 44, 66, 11, 33, 55, 5]));