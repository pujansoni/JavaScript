import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  // Alternative syntax of using the useState function
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople);
  }

  return (
    // Here we have used the <> </> syntax which is equivalent to a React Fragment
    <>
      {
        people.map((person) => {
          const {id, name} = person;
          return (
            <div key={id} className="item">
              <h4>{name}</h4>
              {/* Here we are associating the remove button to each item in order to remove the corresponding item */}
              <button onClick={() => removeItem(id)}>remove</button>
            </div>
          );
        })
      }
      {/* Here we are emptying the array and clearing all the item */}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>);
};

export default UseStateArray;
