const validSudoku = (board) => {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];
      if (val === ".") continue;
      console.log(i);
      console.log(j);

      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      console.log(boxIndex);

      if (rows[i].has(val)) return false;
      if (cols[j].has(val)) return false;
      if (boxes[boxIndex].has(val)) return false;

      rows[i].add(val);
      cols[j].add(val);
      boxes[boxIndex].add(val);
    }
  }

  return true;

  // function validSudoku(board) {
  //   let set = new Set()

  //   for (let i = 0; i < board.length; i++) {
  //       for (let j = 0; j < board[0].length; j++) {
  //           const value = board[i][j]
  //           if (value !== ".") {
  //               const row = `${value} at row ${i}`
  //               const column = `${value} at column ${j}`
  //               const box = `${value} at box ${Math.floor(i/3)}, ${Math.floor(j/3)}`
  //               console.log(`${row}, ${column}, ${box}`)
  //               if (set.has(row) || set.has(column) || set.has(box)) {
  //                   return false
  //               } else {
  //                   set.add(row)
  //                   set.add(column)
  //                   set.add(box)
  //               }
  //           }
  //       }
  //   }

  //   return true
};

console.log(
  validSudoku([
    ["1", "2", ".", ".", "3", ".", ".", ".", "."],
    ["4", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", ".", "3"],
    ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    [".", ".", ".", "8", ".", "3", ".", ".", "5"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "8"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);

// Create 3 data structures:
// - rows[9]: array of sets
// - cols[9]: array of sets
// - boxes[9]: array of sets

// Loop through each cell in the 9x9 board:
//     If cell is not '.':
//         Get the number at this cell: num = board[r][c]

//         Check row:
//             If num in rows[r], return False
//             Else, add num to rows[r]

//         Check column:
//             If num in cols[c], return False
//             Else, add num to cols[c]

//         Check 3x3 box:
//             box_index = (r // 3) * 3 + (c // 3)
//             If num in boxes[box_index], return False
//             Else, add num to boxes[box_index]

// If all checks pass, return True
