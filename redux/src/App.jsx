import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./redux/action"



const App = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>count: {state}</h1>
      <button onClick={()=>{dispatch(increment())}}>ADD</button>
      <button onClick={()=>{dispatch(decrement())}}>MINUS</button>
      <button onClick={()=>{dispatch(reset())}}>RESET</button>
    </div>
  )
}

export default App