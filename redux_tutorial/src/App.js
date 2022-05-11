import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  // const [counter, setCounter] = useState(0); original way of declaring a state

  const counter = useSelector((state) => state.counter); // assigning a redux state to a variable
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <h1> Logged State : {isLogged ? "Heloo" : "Bye"}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>{" "}
      <button onClick={() => dispatch({ type: "SIGN_IN" })}>
        Change state{" "}
      </button>
    </div>
  );
}

export default App;
