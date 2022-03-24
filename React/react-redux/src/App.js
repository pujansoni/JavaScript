// The useDispatch function is used to send the unique action to the redux store
import {useSelector, useDispatch} from 'react-redux'

function App() {
  // Here form the useSelector we will extract the counter that is available in the store/index.js file
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const increment = () => {
    // Here we need to dispatch the action whenever we want to send the data to the redux store
    dispatch({type: "INC"})
  }
  const decrement = () => {
    dispatch({type: "DEC"})
  }
  const addBy = () => {
    dispatch({type: "ADD", payload: 10})
  }
  return (
    <div>
      <h1>Counter App</h1>
      {/* Here in order to access the store we will use the useSelector hook that is available in the react-redux */}
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add Value By 10</button>
    </div>
  );
}

export default App;
