function solution(a, b, c) {
    let answer = "";
    let totalSide = a + b + c;
    let longSide = 0;

    if(a > b) longSide = a;
    else longSide = b;

    if(c > longSide) longSide = c;

    if(totalSide-longSide > longSide) {
        answer = "YES";
    }
    else {
        answer = "NO";
    }
    return answer;
}


// test case
console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));