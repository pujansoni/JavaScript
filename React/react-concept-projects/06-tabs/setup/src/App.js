import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  // Here we will set up the fetch functionality so we will need something that indicates that the page is loading while fetching the data so we will set up the appropriate state for that
  // Here the loading useState indicates if the page is loading or not
  const [loading, setLoading] = useState(true);
  // The jobs array will include the details of different jobs that we will populate after fetching the data
  const [jobs, setJobs] = useState([]);
  // Here we will also set up the value to 0 as the array are zero index based. Moreover, we will see the use of this value later on
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    // Now we will want to setJobs to newJobs and we will setLoading to false
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if(loading) {
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    );
  }

  // Here we will now write the logic of how to access the array data from the fetch after we have defined the loading condition, cause we know that if we didn't fetch the data the program will just return loading. So we can rest be assured that we will have access to the fetched array i.e. jobs after the loading
  const {company, dates, duties, title} = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        {/* Here we are using the index value in the onClick to set the value using the setValue function */}
        {/* Here the className of the button is also dynamic and we will use the template string inside which we can compare the index with the value to display the active button */}
        <div className="btn-container">
          {
            jobs.map((item, index) => {
              return (
                <button key={item.id} onClick={() => {setValue(index)}} className={`job-btn ${index === value && 'active-btn'}`}>
                  {item.company}
                </button>
              );
            })
          }
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App
