export function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return { ...state, a: state.a + 1 };

    case "DEC":
      return { ...state, a: state.a - 1 };

    default:
      return state;
  }
}
