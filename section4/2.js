// 소수 판별
function isPrime(num) {
  if (num === 1) return false;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution(arr) {
  let primeArr = [];

  arr.forEach((v) => {
    const revV = Number(v.toString().split("").reverse().join(""));

    if (isPrime(revV)) primeArr.push(revV);
  });

  return primeArr;
}

// test case
console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
