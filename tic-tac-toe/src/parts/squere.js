const Squere = ({ id, board, setBoard, player, setPlayer }) => {
    const playerName = ["", "X", "O"];
    return (
      <button
        onClick={() => {
          let newBoard = board;
          if (newBoard[id] === 0) {
            let newPlayer = 1;
            newBoard[id] = 2;
            setBoard(newBoard);
            setPlayer(newPlayer);
          }
        }}
      >
        <h1>{playerName[board[id]]}</h1>
      </button>
    );
  };
  export default Squere;