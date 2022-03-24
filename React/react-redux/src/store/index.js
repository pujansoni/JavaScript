// Here, configureStore(): wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension
// createSlice(): accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.
import { configureStore, createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: 'counter',
  initialState: {counter: 0},
  reducers: {
    increment(state, action) {
      state.counter++
    },
    decrement(state, action) {
      state.counter--
    },
    addBy(state, action) {
      state.counter += action.payload
    }
  }
})

export const actions = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

export default store

// Without importing the redux toolkit we can achieve the same thing as given below

/*
import { createStore } from 'redux'

// Here the reducerFn function i.e. the reducer function will contain two arguments which is the state and the action we need to take when that state is encountered. Moreover, the action will contain the type and the payload
const reducerFn = (state = { counter: 10 }, action) => {
  // Here we will check if we have an action of the type "INC" and if we do then we will increment the counter. There are some limitations to the react reducer function. First limitation is that it should be a Synchronous Function and the Second limitation is that we should not mutate the original state in the redux store as it will crash the application. So it should always be the copy of the original state
  if(action.type === "INC") {
    return {counter: state.counter + 1}
  }
  if(action.type === "DEC") {
    return {counter: state.counter - 1}
  }
  if(action.type === "ADD") {
    return {counter: state.counter + action.payload}
  }
  return state
}

// Here the createStore will require the reducer function as the argument
const store = createStore(reducerFn)

export default store
*/