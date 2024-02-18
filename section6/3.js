function solution(board, moves) {
  let cnt = 0;
  let stack = [];

  moves.forEach((v) => {
    for (let i = 0; i < board.length; i++) {
      // 현재 요소가 0이 아니어야 인형을 만난 것으로 간주
      if (board[i][v - 1] !== 0) {
        // 꺼낸 인형 있는 공간 빈 공간으로 변경
        let tmp = board[i][v - 1];

        board[i][v - 1] = 0;

        // 꺼낸 인형이 스택 최상단과 같은지 비교
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          cnt += 2;
        } else {
          stack.push(tmp);
        }
        break;
      }
    }
  });

  return cnt;
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
