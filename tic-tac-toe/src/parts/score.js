const ScoreDisplay = ({ score }) => {
    return (
      <>
        <div>
          <div className="row row-cols-2">
            <div className="col">
  
              <h3>X</h3>
            </div>
            <div className="col">
             
              <h3>O</h3>
            </div>
          </div>
          <div className="row row-cols-2">
            <div className="col">
  
              <h4>{score.x}</h4>
            </div>
            <div className="col">
             
              <h4>{score.o}</h4>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export {ScoreDisplay} ;