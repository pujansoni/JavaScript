// Here the state is the old state and the action is the action that the reducer will take and it will return a new state
// Here the reducer function is in a new file as it has more functionality

export const reducer = (state, action) => {
  if(action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state, 
      people:newPeople, 
      isModalOpen:true, 
      modalContent:"item added"
    };
  }

  // Here if we didn't add any item then we will just retain the old state by destructing the old state and prompt the user by showing the message "please enter value"
  if(action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen:true,
      modalContent:"please enter value"
    };
  }

  if(action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen:false
    };
  }

  if(action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter((person) => person.id !== action.payload);
    return {
      ...state,
      people: newPeople
    };
  }

  throw new Error ("no matching action type");
};

