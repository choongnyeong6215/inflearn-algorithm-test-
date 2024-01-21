function solution(a, b, c) {
    let minNum = 0;

    if(a > b) minNum = b;
    else minNum = a;

    if(minNum > c) minNum = c;

    return minNum;
}


// test case
console.log(solution(10, 20, 30));
console.log(solution(222, 111, 333));
console.log(solution(3333, 2222, 1111));