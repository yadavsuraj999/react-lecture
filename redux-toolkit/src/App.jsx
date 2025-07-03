import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./features/counter/counterSlice";

const App = () => {
  const count = useSelector((state) =>{
     console.log(state);
     return state.counter.count
    
  } )
  const dispach = useDispatch()
  return (
    <div>
      <h1>
        counter: {count}
      </h1>
      <button onClick={() => dispach(increment())}>Add</button>
      <button onClick={() => dispach(decrement())}>Sub</button>
    </div>
  )
}

export default App