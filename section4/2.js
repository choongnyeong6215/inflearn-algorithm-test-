// 소수 판별
function isPrime(num) {
    // 1 : 소수 x
    if(num === 1) return false;

    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        // 약수 값으로 나누어 떨어면 소수 X
        if(num % i === 0) {
            return false;
        }
    }

    return true;
}


function solution(arr) {

    let answer = [];

    for(let num of arr) {
        let revNum = Number(num.toString().split("").reverse().join(""));

        if(isPrime(revNum)) {
            answer.push(revNum);
        }
    }
    
    return answer;
}


// test case
console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));