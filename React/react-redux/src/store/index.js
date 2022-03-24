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
