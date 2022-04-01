import Leaf from "./leaf";
let minmax = (leaf,depth,isMax)=> {
    const player = 2;
    const oponent = 1;
    if(leaf.value.winner) {
      if(leaf.value.winner === "X"){
      leaf.score = leaf.value.evaluate();
      return leaf;
      }
      else{
        leaf.score = -1 * leaf.value.evaluate();
      return leaf;
      }
    }
    if(!leaf.value.isMovesLeft()){
      return 0;
    }
  
    if(isMax) {
      let best =new Leaf();
      best.score = 1000;
      leaf.value.board.forEach((item,index)=>{
      
        if(item === 0) {
          let newArr = [...leaf.value.board];
          newArr[index] = player;
          let newLeaf = new Leaf(newArr,depth+1);
          newLeaf.setParent(leaf);
          leaf.setChild(newLeaf);
          if(best.score >= minmax(newLeaf,depth+1,!isMax).score) {
            best = newLeaf;
          }
         
        }

      });
      return best;
    }
    else {
      let best = new Leaf();
      best.score = -1000;
      leaf.value.board.forEach((item,index)=>{
        if(item === 0) {
          let newArr = [...leaf.value.board];
          newArr[index] = oponent;
          let newLeaf = new Leaf(newArr,depth+1);
          newLeaf.setParent(leaf);
          leaf.setChild(newLeaf);
          if(best.score <= minmax(newLeaf,depth+1,!isMax).score) {
            best = newLeaf;
          }
        }
      });
      return best;
    }
  
 
  }

  export default minmax;