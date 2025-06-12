import React from "react";

function StartScreen({ questionNumber, dispatch }) {
  return (
    <div className="start">
      <h2>Welecome to the Quiz</h2>
      <h3>{questionNumber} question to test you knowledge</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "STATUS", payload: "go" })}
      >
        Let's GO
      </button>
    </div>
  );
}

export default StartScreen;
