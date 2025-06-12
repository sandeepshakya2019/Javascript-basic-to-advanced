import React, { useEffect, useReducer } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import axios from "axios";
import { reducer } from "./Reducer/reducer";
import Loader from "./Components/Loader";
import Error from "./Components/Error";
import StartScreen from "./Components/StartScreen";
import Question from "./Components/Question";
import DisaplyResult from "./Components/DisaplyResult";
// import DateCounter from "./Components/DateCounter";

const initialState = {
  quizData: [
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Board Games",
      question:
        "Some of the &quot;Fallen Empires&quot; cards from &quot;Magic: The Gathering&quot; were misprinted on the backs of which other card game?",
      correct_answer: "Wyvern",
      incorrect_answers: ["Pokemon", "Dominion", "Yu-Gi-Oh"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Music",
      question: "Which genre of Hip Hop does MC Frontalot rap?",
      correct_answer: "Nerdcore",
      incorrect_answers: ["Horrorcore", "Christian", "Crunk"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Sports",
      question: "Which player holds the NHL record of 2,857 points?",
      correct_answer: "Wayne Gretzky",
      incorrect_answers: ["Mario Lemieux ", "Sidney Crosby", "Gordie Howe"],
    },
  ],
  status: "go",
  index: 0,
  point: 0,
  prevQuesStatus: null,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { quizData, status, index, point } = state;

  async function getQuiz() {
    try {
      dispatch({ type: "STATUS", payload: "loading" });
      let response = await axios.get("https://opentdb.com/api.php?amount=20");
      console.log(response);
      dispatch({ type: "STORE", payload: response.data.results });
      dispatch({ type: "STATUS", payload: "ready" });
    } catch (err) {
      dispatch({ type: "STATUS", payload: "invalid" });
      console.log(err);
      // throw new Error("Unkonwn err");
    }
  }

  useEffect(() => {
    // getQuiz();
  }, []);

  return (
    <div className="app">
      {/* <DateCounter /> */}
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "invalid" && <Error />}
        {status === "ready" && quizData?.length && (
          <StartScreen questionNumber={quizData?.length} dispatch={dispatch} />
        )}
        {status === "go" && quizData?.length && (
          <Question
            point={point}
            question={quizData?.[index]}
            dispatch={dispatch}
            indexNo={index}
            questionNumber={quizData?.length}
            prevQuesStatus={state?.prevQuesStatus}
          />
        )}
        {status === "done" && (
          <DisaplyResult
            result={point}
            indexNo={index}
            prevQuesStatus={state?.prevQuesStatus}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
