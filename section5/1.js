function solution (arr1, arr2) {
    let answer = [];

    let n = arr1.length;
    let m = arr2.length;

    // 두 배열 참조할 인덱스
    let idx1 = idx2 = 0;

    // 두 인덱스 중 하나라도 범위 벗어나면 종료
    while (idx1 < n && idx2 < m) {
        if (arr1[idx1] <= arr2[idx2]) {
            answer.push(arr1[idx1++]);
        }

        else {
            answer.push(arr2[idx2++]);
        }
    }

    // 요소가 아직 남은 경우
    while (idx1 < n) {
        answer.push(arr1[idx1++]);
    }

    while (idx2 < m) {
        answer.push(arr2[idx2++]);
    }

    return answer;
}


// test case
const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];

console.log(solution(arr1, arr2));