import React from "react";

function Question({
  question,
  dispatch,
  indexNo,
  questionNumber,
  prevQuesStatus,
  point,
}) {
  let mcq = [...question.incorrect_answers, question.correct_answer];
  let shuffled = mcq
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <div>
      <input
        type="range"
        min="0"
        max={questionNumber}
        value={indexNo + 1}
        style={{ width: "100%" }}
      />
      {indexNo !== 0 && (
        <p className={`ans ${prevQuesStatus ? "correct" : "wrong"}`}>
          Previous Question was {prevQuesStatus ? "Correct" : "Incorrect"}
        </p>
      )}
      <h4 dangerouslySetInnerHTML={{ __html: question?.question }} />
      <h4>
        {indexNo + 1}/{questionNumber} Total Score : {point}/{questionNumber}
      </h4>
      <br />
      <div className="options">
        {shuffled?.map((item, index) => {
          if (item === question.correct_answer)
            return (
              <button
                className="btn btn-option"
                key={index}
                onClick={() => dispatch({ type: "CORRECT" })}
              >
                {item}
              </button>
            );
          return (
            <button
              className="btn btn-option"
              key={index}
              onClick={() => dispatch({ type: "INCORRECT" })}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
