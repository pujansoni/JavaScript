import React, { useState } from 'react';
import data from './data';

// Here, in the Lorem Ipsum project, the data has 8 paragraphs and if we give the value less than 0 then we will display 1 paragraph and if we give the value above 8 then we will display the max paragraphs i.e. 8 paragraphs

function App() {
  
  // This state value will give us info. on how many paragraphs we want to generate
  const [count, setCount] = useState(0);
  // The next thing will be the text which is an array
  const [text, setText] = useState([]);
    
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we also have access to count through the event object, but we need to observe that the value of the count we access here is in string instead of number. So we need to convert to int as shown below
    let amount = parseInt(count);

    if(count <= 0) {
      amount = 1;
    }

    if(count > 8) {
      amount = 8;
    }

    // Here please note that the slice() method does not include the end value 
    setText(data.slice(0, amount));
  }

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">
          paragraphs: 
        </label>
        <input type="number" name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value)} />
        <button type="submit" className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App;
