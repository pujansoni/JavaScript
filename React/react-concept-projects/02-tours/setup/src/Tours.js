import React from 'react';
import Tour from './Tour';

// Here we will destructure the prop right away. We also have access to the removeTour function defined in the App.js
const Tours = ({tours, removeTour}) => {
  return <section>
    <div className="title">
      <h2>our tours</h2>
      <div className="underline"></div>
    </div>
    <div>
      {tours.map((tour) => {
        // Here we are destructing the tour value when we are calling the Tour component which means that the Tour component will have access to all the properties that are defined in the tour object
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </div>
  </section>;
};

export default Tours;
