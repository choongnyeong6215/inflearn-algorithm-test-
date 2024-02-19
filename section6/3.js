function solution(board, moves) {
  let disappearCnt = 0;
  let stack = [];

  moves.forEach((crain) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][crain - 1] !== 0) {
        // 현재 뽑은 인형
        let doll = board[i][crain - 1];

        // 뽑았기 때문에 사라진 것으로 간주
        board[i][crain - 1] = 0;

        // 뽑은 인형, 스택 최상단 인형이 같은지 판단
        if (doll === stack[stack.length - 1]) {
          stack.pop();
          // 두 인형 모두 사라짐
          disappearCnt += 2;
        } else {
          stack.push(doll);
        }
        // 한 줄에 한 인형만 뽑도록
        break;
      }
    }
  });

  return disappearCnt;
}

// test case
let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves));
