function solution (arr1, arr2) {
    let answer = [];

    arr1.sort((a, b) => a - b)
    arr2.sort((a, b) => a - b)

    let n = arr1.length && arr2.length;

    // 두 배열 참조 인덱스
    let idx1 = idx2 = 0;

    while (idx1 < n && idx2 < n) {
        if (arr1[idx1] === arr2[idx2]) {
            answer.push(arr1[idx1]);

            idx1++;
            idx2++;
        }

        // 첫번째 배열 요소가 작은 경우 -> 다음 요소와 비교
        else if (arr1[idx1] < arr2[idx2]) {
            idx1++;
        }

        else {
            idx2++;
        }
    }

    return answer;
}


// test case
const arr1 = [1, 3, 9, 5, 2];
const arr2 = [3, 2, 5, 7, 8];

console.log(solution(arr1, arr2));