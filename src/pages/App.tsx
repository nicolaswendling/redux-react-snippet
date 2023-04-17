import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {RootState, AppDispatch} from "../states/store"
import {increment, decrement, incrementByAmount} from "../states/slices/counter"
import {Button} from "../components/button/Button"

const App: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleIncrementByAmount = (amount: number) => {
    dispatch(incrementByAmount(amount))
  }

  return (
    <div>
      <h1 className="title">Counter: {counter}</h1>
      <div className="buttons">
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
        <Button onClick={() => handleIncrementByAmount(5)}>
          Increment by 5
        </Button>
      </div>
    </div>
  )
}

export default App
