import { useReducer, useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Counter: {count}
      <br />
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}

function countReducer(state, action) {
  const { type, payload } = action;
  console.log({ state, type });

  switch (type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    case "set":
      return payload;
    default:
      return state;
  }
}

export function CounterWithReducer() {
  const [count, dispatch] = useReducer(countReducer, 0);
  const num = 7;
  const num2 = 100;
  return (
    <div>
      CounterWithReducer: {count}
      <br />
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <button onClick={() => dispatch({ type: "a action" })}>unknown</button>
      <button onClick={() => dispatch({ type: "set", payload: num })}>
        set to {num}
      </button>
      <button onClick={() => dispatch({ type: "set", payload: num2 })}>
        set to {num2}
      </button>
    </div>
  );
}
