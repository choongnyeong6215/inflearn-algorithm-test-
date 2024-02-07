// sort : n개 정렬 시 O(n log n)의 시간 복잡도
// function solution(arr1, arr2) {
//     return [...arr1, ...arr2].sort((a, b) => a - b);
// }


// // test case
// let arr1 = [1, 3, 5];
// let arr2 = [2, 3, 6, 7, 9];
// console.log(solution(arr1, arr2));


// 투포인터 알고리즘으로 리팩토링 O(n + m)
function solution(arr1, arr2) {
    let answer = [];

    let N = arr1.length;
    let M = arr2.length;

    // 각 배열 인덱스 참조 값
    let idx1 = idx2 = 0;

    // 인덱스 번호는 배열 크기보다 작아야함 -> 특정 배열 탐색이 끝나면 종료
    while(idx1 < N && idx2 < M) {
        // 직은 값 부터 추가 (추가 이후에 인덱스 증가)
        if(arr1[idx1] <= arr2[idx2]) {
            answer.push(arr1[idx1++]);
        }
        else {
            answer.push(arr2[idx2++]);
        }
    }

    // 배열 요소 남은 경우
    while(idx1 < N) {
        answer.push(arr1[idx1++]);
    }

    while(idx2 < M) {
        answer.push(arr2[idx2++]);
    }

    return answer;
}


// test case
let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6, 7, 9];
console.log(solution(arr1, arr2));