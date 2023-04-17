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
