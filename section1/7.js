function solution(n, arr) {
    let cnt = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 10 === n) {
            cnt++;
        }
    }
    return cnt;
}


// test case
console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));