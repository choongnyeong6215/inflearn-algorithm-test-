function solution(arr) {
    let seeCnt = 1;
    let seeStandard = arr[0];

    for(let stu of arr) {
        if(stu > seeStandard) {
            seeCnt++;
            seeStandard = stu;
        }
    }
    return seeCnt;
}


// test case
console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));