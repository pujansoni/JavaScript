
// Here state parameter is the state before we update and action parameter indicates what we are trying to do. Here some people prefer using the switch statement instead of the if statements
const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return {...state, cart: []}
  }

  if (action.type === "REMOVE") {
    return {...state, cart:state.cart.filter((cartItem) => cartItem.id !== action.payload)}
  }

  if (action.type === "INCREASE") {
    // Here state.cart indicates the previous state
    let tempCart = state.cart.map((cartItem) => {
      // Here if the id in the cart does not match the id in the payload then we will simply return that item and if the id of the cart matches the payload then we will increase the amount of that item
      if (cartItem.id === action.payload) {
        return {...cartItem, amount: cartItem.amount + 1}
      }
      return cartItem
    })
    return {...state, cart: tempCart}
  }

  if (action.type === "DECREASE") {
    // Here state.cart indicates the previous state
    let tempCart = state.cart.map((cartItem) => {
      // Here if the id in the cart does not match the id in the payload then we will simply return that item and if the id of the cart matches the payload then we will decrease the amount of that item. There is one caveat however i.e. if we go below the value of 1 for this item then we will remove that item from the cart and we will achieve this by using the filter and selecting only the items whose value is not equal to zero
      if (cartItem.id === action.payload) {
        return {...cartItem, amount: cartItem.amount - 1}
      }
      return cartItem
    }).filter((cartItem) => cartItem.amount !== 0)
    return {...state, cart:tempCart}
  }

  if (action.type === "GET_TOTALS") {
    // Here we will use the reduce() function in order to return an object which contains two values i.e. total and amount. Here cartItem represents each item that we are iterating over and the total is what we are returning i.e. the object with two properties that we are returning 
    let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
      // Here we are looking two items in each cartItem i.e. price and amount
      const {price, amount} = cartItem
      const itemTotal = price * amount

      cartTotal.total += itemTotal
      cartTotal.amount += amount
      return cartTotal
    }, {total: 0, amount: 0})

    // Here we need to make sure that the total amount has the fixed decimal point
    total = parseFloat(total.toFixed(2))

    return {...state, total, amount}
  }

  if (action.type === "LOADING") {
    return {...state, loading: true}
  }

  if (action.type === "DISPLAY_ITEMS") {
    return {...state, cart: action.payload, loading: false}
  }

  throw new Error("no matching action type")
}

export default reducer
