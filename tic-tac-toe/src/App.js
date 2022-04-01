
import './App.css';
import React, { useEffect } from 'react';
import Leaf from "./AI/leaf";
import minmax from './AI/minmax';
import { ScoreDisplay } from './parts/score';
import Squere from './parts/squere';

function App() {
  const [board,setBoard] = React.useState([0,0,0,0,0,0,0,0,0]);
  const [player,setPlayer] = React.useState(2);
  const [score,setScore] = React.useState({x:0,o:0});
  const [status,setStatus] = React.useState('');
 
React.useEffect(()=>{
  if(player === 1){
   let l = new Leaf(board,-1);
   l = minmax(l,0,false);
   console.log(l);
   if(l === 0) {
    setTimeout(() => {
      setBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
      setPlayer(-1);
    }, 3000);
   }
   else if(l.score > 0) {
    if(l.value.winner === 'X'){
      setStatus("X won!");
      setTimeout(() => {
        setBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        setPlayer(-1);
        let newScore = {...score};
        newScore.x = newScore.x +1;
        setScore(newScore);
        setStatus('');
      }, 3000);
     }
  }
   /*
   else if(l.score < 0) {
    
   }
   
   */

   let leaf = new Leaf(board);
   
   if(leaf.value.winner) {

     if(leaf.value.winner === 'O') {
      setStatus("O won!");
      setTimeout(() => {
      
        setBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        setPlayer(-1);
        let newScore = {...score};
        newScore.o = newScore.o +1;
        setScore(newScore);
        setStatus('');
      }, 3000);
     }
   }
   if(l && l.value){
    setBoard(l.value.board);
    setPlayer(2);
    }
  }
},[player, board, score]);



 let renderSquere = (i, val) => {
  return (
    <Squere
      id={i}
      val={val}
      board={board}
      setBoard={setBoard}
      player={player}
      setPlayer={setPlayer}
    />
  );
};

  return (
    <div className="game-board">
    <div className="grid-row">
      {renderSquere(0)}
      {renderSquere(1)}
      {renderSquere(2)}
    </div>
    <div className="grid-row">
      {renderSquere(3)}
      {renderSquere(4)}
      {renderSquere(5)}
    </div>
    <div className="grid-row">
      {renderSquere(6)}
      {renderSquere(7)}
      {renderSquere(8)}
    </div>
    <div id="info">
      <h1>{status}</h1>
    </div>
    <div id="score">
      <ScoreDisplay score={score} />
    </div>
  </div>
  );
}

export default App;
