# Snippet React Redux

A simple React Redux snippet: [Demo](https://redux-react-snippet.vercel.app/)

## Dependencies

- Redux
- React Redux
- Redux Toolkit

```json
"dependencies": {
    "@reduxjs/toolkit": "^1.9.4",
    "react-redux": "^8.0.5",
    "redux": "^4.2.1"
  },
```

## States

### Store

`src/states/store.tsx`

```typescript
import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./rootReducer"

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
```

### Root Reducer

`src/states/rootReducer.tsx`

```typescript
import {combineReducers} from "@reduxjs/toolkit"
import counterReducer from "./slices/counter"

const rootReducer = combineReducers({
  counter: counterReducer,
})

export default rootReducer
```

### Slices

`src/states/slices/counter.ts`

```typescript
import {createSlice, PayloadAction} from "@reduxjs/toolkit"

const initialState = {
  value: 0,
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer
```

## Consume in App

### Provider

```typescript
import {Provider} from "react-redux"
import store from "./states/store"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
```

### Consuming

```typescript
import {useSelector, useDispatch} from "react-redux"
import {RootState, AppDispatch} from "../states/store"
import {increment, decrement, incrementByAmount} from "../states/slices/counter"

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
    <div className="buttons">
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
      <Button onClick={() => handleIncrementByAmount(5)}>Increment by 5</Button>
    </div>
  )
}
```
