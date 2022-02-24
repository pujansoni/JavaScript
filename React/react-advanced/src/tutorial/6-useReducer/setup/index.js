import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
// The useReducer function is used when we have a more complicated setup. It will add more structure to the state
// Lot of the functionality of the useReducer is same as that of the redux

// Scenario: In this case we use the state values which is relevant for a small application. In a bigger application we would need to have some kind of structure where we are updating the state only in a certain ways 
const Index1 = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name) {
      setShowModal(true);
      setPeople([...people, {id: new Date().getTime().toString(), name}]);
      setName("");
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      {showModal && <Modal />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit">add</button>
      </form>
      {people.map((person) => {
        return <div key={person.id}>
          <h4>{person.name}</h4>
        </div>
      })}
    </>
  );
};

// Refactoring the above component to useReducer
// Here we will refactor the above component to use the useReducer
// Here we will remove the people and showModal useState

// Here the state is the old state and the action is the action that the reducer will take and it will return a new state
const reducer = (state, action) => {
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

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "hello world"
};

const Index = () => {
  const [name, setName] = useState("");
  // Here when we invoke useReducer we are getting back two values i.e. the state value and the dispatch function. 
  // Here the first argument we pass is the reducer function. Here the difference between the useState and useReducer is that each and every time if we need to do something with the whole state we always must use the dispatch and it's gonna go through the useReducer and we can think of the reducer function as something that take in the old state and do some action and splits back the new state
  // Here the second argument is the default state to the useReducer function 
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name) {
      const newItem = {id: new Date().getTime().toString(), name};
      // Here we will pass the object with the property of the type in the dispatch method 
      dispatch({type:"ADD_ITEM", payload:newItem});
      setName("");
    } else {
      dispatch({type:"NO_VALUE"});
    }
  };

  // Here we will pass the closeModal function as a prop to the Modal component where we set up a setTimeout() function after 3 seconds in useEffect which will close the modal popup as setup in the useReducer's reducer function above
  const closeModal = () => {
    dispatch({type:"CLOSE_MODAL"});
  };

  return (
    <>
      {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button onClick={() => dispatch({type:"REMOVE_ITEM", payload: person.id})}>remove</button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
