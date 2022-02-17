import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

// Here the way it will work is we will fetch our data, then we will pass it into the Tours then we will iterate the tours data and then for every tour we will display the Tour component

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // In order to set the remove tour functionality we will setup the function in this file i.e. App.js cause we have access to all the tours in this file with the tours useState value. We will pass this function to the Tour component cause in the Tour component we have access to id which is used to remove that particular tour. We have to pass the removeTour function in the Tour component which we can do by passing the removeTour function in the prop
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    // We want to make sure that the loading value is true when we are fetching the data
    setLoading(true);

    try {
      // Here to catch the network errors that may occur during fetch then we will place it in the try block
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      // console.log(tours);
    } catch (error) {
      // Here we will set Loading to false
      setLoading(false);
      console.log(error);
    }
  }

  // Here we will run the useEffect() and we will make sure that it only run once i.e. when the component renders on the initial render
  useEffect(() => {
    fetchTours();
  }, []);

  // Here we will use conditional rendering where we will have one return for loading and one return when we are not loading i.e. when we get the data

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchTours}>refresh</button>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Here we will set the prop for the Tours component */}
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App
