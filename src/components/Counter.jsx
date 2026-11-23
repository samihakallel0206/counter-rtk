import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const compteur = useSelector((state) => state.counter.count);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <p>{compteur}</p>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
