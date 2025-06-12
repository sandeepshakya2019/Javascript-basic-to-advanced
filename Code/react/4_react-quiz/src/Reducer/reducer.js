export function reducer(state, action) {
  switch (action.type) {
    case "STORE":
      return { ...state, quizData: action.payload };

    case "CORRECT":
      let newI = state.index + 1;
      if (state.quizData.length === newI)
        return {
          ...state,
          status: "done",
          point: state.point + 1,
          prevQuesStatus: 1,
        };
      return {
        ...state,
        point: state.point + 1,
        index: newI,
        prevQuesStatus: 1,
      };

    case "INCORRECT":
      let newI1 = state.index + 1;
      if (state.quizData.length === newI1)
        return {
          ...state,
          status: "done",
          point: state.point - 1,
          prevQuesStatus: 0,
        };
      return {
        ...state,
        point: state.point - 1,
        index: newI1,
        prevQuesStatus: 0,
      };

    case "STATUS":
      return { ...state, status: action.payload };

    default:
      return state;
  }
}
