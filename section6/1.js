// Map 사용 풀이
// function solution(bracket) {
//   const map = new Map();

//   for (let item of bracket) {
//     if (map.has(item)) {
//       map.set(item, map.get(item) + 1);
//     } else {
//       map.set(item, 1);
//     }
//   }

//   const bracketArr = [...map.values()];

//   // (, ) 개수 체크
//   return bracketArr[0] === bracketArr[1] ? "YES" : "NO";
// }

// test case
console.log(solution("(()(()))(()"));
console.log(solution("(())()"));

// stack 풀이
function solution(bracket) {
  const stack = [];

  for (let item of bracket) {
    // 여는 괄호는 push, 닫는 괄호 만날 경우 여는 괄호 제거 (쌍 맞추기 위함)
    if (item === "(") {
      stack.push("(");
    } else {
      stack.pop();
    }
  }

  return stack.length ? "NO" : "YES";
}

// test case
console.log(solution("(()(()))(()"));
console.log(solution("(())()"));
