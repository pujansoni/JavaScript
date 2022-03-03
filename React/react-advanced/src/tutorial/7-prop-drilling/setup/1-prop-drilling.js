import React, { useState } from 'react';
import {data} from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

// Prop drilling is not an official term. However, it is a side effect when we have multiple components and have a big component tree and we have to pass state from top component to the bottom of the tree
// The useContext is used to fix the prop drilling issue

// Here we have

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  // Here we need the removePerson function right down to our SinglePerson component. So here we won't need the List component but we will need to pass it through the prop in order to make it available to the SinglePerson component as shown below
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return <section>
    <h3>prop drilling</h3>
    <List people={people} removePerson={removePerson} />
  </section>;
};

const List = ({people, removePerson}) => {
  return<>
  {people.map((person) => {
    return <SinglePerson key={person.id} {...person} removePerson={removePerson} />;
  })}
  </>
}

const SinglePerson = ({id, name, removePerson}) => {
  return <div className="item">
    <h4>{name}</h4>
    <button onClick={() => removePerson(id)}>remove</button>
  </div>
}

export default PropDrilling;

// So the idea of the prop drilling is that in this case the list component has no use of the removePerson function but we have no other way to pass down our function to the SinglePerson unless we pass it to the List. This approach becomes problematic when we have multiple component. We use context api to avoid prop drilling