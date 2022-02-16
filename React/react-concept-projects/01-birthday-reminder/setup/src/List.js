import React from 'react';

// Here we will destructure the people prop right away in the function as shown below:
const List = ({people}) => {
  return (
    <>
      {
        people.map((person) => {
          // Here we will destructure the value right away for each people
          const {id, name, age, image} = person;
          return <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>;
        })
      }
    </>
  );
};

export default List;
