import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

// Here we will have a form where we will submit the form with the color value and if everything is correct then we will get a list of color values and iterate over those values to display them

function App() {
  const [color, setColor] = useState('');
  // We will also use the error useState as it will be used when the input is not a valid color. By default the value of error will be false
  const [error, setError] = useState(false);
  // Here we will have some values by default when we land on the page for the first time
  // Here we will page the default values when the user land on the page for the first time
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we will check if the input is a valid color. If the input is not a valid color then we will have a red border around the input element and if it is a valid color then we will display the list

    // Values.js
    // Here in the values.js library we will have access to the Values as we have imported it above and we will pass in the color value and assign it to a variable. After that we will have access to different methods provided by the values.js library and we will use the all() method of the library which will give us the tints(lighter variant) and shades(darker variant) of that color. Here we will have "Unable to parse color from string" error if we have the invalid input for the color so we will wrap the logic in the try catch block to customize how to handle the error 
    try {
      // Here the argument 10 means that we are dividing 100% of tint(lighter variant) by 10 and 100% of shadow(darker variant) by 10. So more the value passed in the all() function less tint and shadow we get and vice-versa
      let colors = new Values(color).all(10);
      // setError(false);
      setList(colors);
    } catch(error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value )} placeholder="#f15025" className={`${error?'error': null}`} />
          <button className="btn" type="submit">submit</button>
        </form>
      </section>
      {/* In the section below we will iterate over the colors and display the list */}
      <section className="colors">
        {list.map((color, index) => {
          console.log(color);
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
        })}
      </section>
    </>
  );
}

export default App
