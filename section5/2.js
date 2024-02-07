// function solution(arr1, arr2) {
//     answer = [];

//     arr1.forEach((v) => {
//         if(arr2.includes(v)) {
//             answer.push(v);
//         }
//     })

//     return answer.sort((a, b) => a - b);
// }


// // test case
// let arr1 = [1, 3, 9, 5, 2];
// let arr2 = [3, 2, 5, 7, 8];
// console.log(solution(arr1, arr2));



// 투포인터 알고리즘으로 리팩토링 O(n + m)
function solution(arr1, arr2) {
    let answer = [];

    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    // 각 배열 요소 참조 인덱스
    let idx1 = idx2 = 0;

    while(idx1 < arr1.length && idx2 < arr2.length) {
        // 현재 인덱스 요소가 같은 경우
        if(arr1[idx1] === arr2[idx2]) {
            answer.push(arr1[idx1]);

            idx1++;
            idx2++;
        }

        // 왼쪽 배열 요소가 작은 경우 -> 다음 인덱스 요소 참조
        else if(arr1[idx1] < arr2[idx2]) {
            idx1++;
        }

        else {
            idx2++;
        }
    }

    return answer;
}


// test case
let arr1 = [1, 3, 9, 5, 2]
let arr2 = [3, 2, 5, 7, 8];
console.log(solution(arr1, arr2));