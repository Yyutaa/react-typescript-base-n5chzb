import React, { useReducer } from "react";

const initialState = { count: 0 };

type ACTIONTYPE =
  | { type: "INCREMENT"; playload: number }
  | { type: "DECREMNET"; playload: string };

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.playload };
    case "DECREMNET":
      return { count: state.count - Number(action.playload) };
    default:
      throw new Error();
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT", playload: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "DECREMNET", playload: "1" })}>
        -
      </button>
    </>
  );
}

export default Counter;
