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

set up **Redux store** with **Redux Toolkit** (RTK)

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

Add the **slice reducer** to **the store**.

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

Define a simple **counter state** and **actions** for incrementing and decrementing the counter.

```typescript
import {createSlice, PayloadAction} from "@reduxjs/toolkit"

const initialState = {
  value: 0,
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //...
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

Wrap App component with the Provider and pass your store as a prop

```typescript
//...

import {Provider} from "react-redux"
import store from "./states/store"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
```

### Consuming

Implement **useSelector** and **useDispatch** in App.

```typescript
//...
import {useSelector, useDispatch} from "react-redux"
import {RootState, AppDispatch} from "../states/store"
import {increment, decrement, incrementByAmount} from "../states/slices/counter"

const App: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  //...

  const handleIncrementByAmount = (amount: number) => {
    dispatch(incrementByAmount(amount))
  }

  return (
    //...
    <Button onClick={() => handleIncrementByAmount(5)}>Increment by 5</Button>
  )
}
```
