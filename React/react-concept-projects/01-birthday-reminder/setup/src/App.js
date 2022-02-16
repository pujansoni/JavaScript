import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {/* Here we will pass the people value to the prop */}
        <List people={people} />
        {/* Here as we want to clear the list when we click on the button we will use the empty array in the setPeople() to clear the list */}
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
