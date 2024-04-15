// O (arr1 + arr2)
function solution(arr1, arr2) {
  const answer = [];

  let p1 = 0; // arr1 참조
  let p2 = 0; // arr2 침조

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);

      p1++;
      p2++;
    } else if (arr1[p1] > arr2[p2]) p2++;
    else if (arr1[p1] < arr2[p2]) p1++;
  }

  return answer;
}

// test case

const arr1 = [1, 3, 5, 9, 2];
const arr2 = [3, 2, 5, 7, 8];

console.log(solution(arr1, arr2));
