import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

// Here we need to pass the removePerson function down to the SinglePerson component using the context API
const PersonContext = React.createContext();

// Here we have access to two components after the above line is executed i.e. the Provider and the Consumer
// two components - Provider(works as a distributer), Consumer (We don't use the Consumer)
// Here ContextAPI is the root component and the return of the root component we have to wrap in PersonContext and the Provider in this case


const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    // Here for the Provider we have the value prop and we can pass whatever we want. We can also use the useContext to access whatever is there in the value prop
    // Here for the value prop again we are in the JSX land so first curly braces indicates that we are entering in the JS world and the second curly braces indicates that it's an object
    <PersonContext.Provider value={{removePerson, people}}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = ({ people }) => {
  // Another way to access data in the Context
  const mainData = useContext(PersonContext);

  return (
    <>
      {mainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  // Here we need to pass the context that we created i.e. the PersonContext context
  // Here we have access to the value that is provided in the ContextAPI component under the PersonContext.Provider without having to pass that to the List Component
  // Here we know that the removePerson is an object so we can destructure it right away
  const {removePerson} = useContext(PersonContext);

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;

// It's generally feasible to use the context api option to manage prop if we have two or more nested components that are using props