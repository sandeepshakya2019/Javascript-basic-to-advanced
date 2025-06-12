import React from "react";

function DisaplyResult({ result, prevQuesStatus, indexNo }) {
  return (
    <div>
      <p className="result">Total Score : {result}</p>
      {indexNo !== 0 && (
        <p className={`ans ${prevQuesStatus ? "correct" : "wrong"}`}>
          Previous Question was {prevQuesStatus ? "Correct" : "Incorrect"}
        </p>
      )}
    </div>
  );
}

export default DisaplyResult;
