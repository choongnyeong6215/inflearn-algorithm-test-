function solution(board, moves) {
  let cnt = 0;
  const basket = [];
  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] !== 0) {
        // 뽑은 인형
        const currentDoll = board[i][move - 1];
        // 인형 뽑은 곳 빈공간으로 만들기
        board[i][move - 1] = 0;
        // 바구니 가장 위에 같은 인형 있는 경우 -> 2개 모두 제거
        if (basket[basket.length - 1] === currentDoll) {
          basket.pop();
          cnt += 2;
        } else {
          basket.push(currentDoll);
        }
        // 한 번 인형 뽑으면 크레인 변경
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
