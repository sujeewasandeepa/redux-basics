import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/Store";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "../state/Counter/counterSlice";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const bamba = useSelector((state: RootState) => state.counter.bamba);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <p>
        {bamba.value} {bamba.name}
      </p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ marginInline: 10 }}
      >
        Decrement
      </button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increment By 10
      </button>
      <button
        onClick={() => dispatch(decrementByAmount(10))}
        style={{ marginLeft: 10 }}
      >
        Decrement By 10
      </button>
    </div>
  );
};

export default Counter;
