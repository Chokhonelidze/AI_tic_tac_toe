import Board from "./board"
export default class Leaf{
    
    constructor(state = null,depth = 0) {
        if(state) {
        let board = new Board(state,depth);  
        this.value = board;
        this.score = board.evaluate()? board.evaluate() : 0;
        }
        else{
         this.score = 0;
        }
        this.children = [];
        this.depth = depth;
    
    }
    setChild(child){
        this.children.push(child);
    }
    getChildren(){
        return this.children;
    }
    setParent(parent) {
        this.parent = parent;
    }
    getParent(){
        return this.parent;
    }
}