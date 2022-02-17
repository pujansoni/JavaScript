import React, { useState } from 'react';

// Here we have access to all the properties directly as we are destructing the tour object in the Tours component itself
const Tour = ({id, image, info, price, name, removeTour}) => {
  // Here we are using the toggle functionality in order to show/hide the Read More button
  const [readMore, setReadMore] = useState(false);

  return <article className="single-tour">
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      {/* Here we are using the readMore state value to determine the string we want to display */}
      <p>{readMore ? info : `${info.substring(0, 200)}`}
      {/* Now we will setup a button that toggles the Read More value */}
      <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</button>
      </p>
      <button className="delete-btn" onClick={() => removeTour(id)}>not interested</button>
    </footer>
  </article>;
};

export default Tour;
