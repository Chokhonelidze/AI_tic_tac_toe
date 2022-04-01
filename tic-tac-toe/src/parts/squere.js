const Squere = ({ id, board, setBoard, player, setPlayer }) => {
    const playerName = ["", "X", "O"];
    const colors = ['#27e511','#d7e511','#e51111d4','#198754'];
    let random = Math.floor(Math.random()*colors.length);
    let color = colors[random];
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
        <h1 style={{color:color}}>{playerName[board[id]]}</h1>
      </button>
    );
  };
  export default Squere;