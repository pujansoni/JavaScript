import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  // Let's start with setting up the state value. Here as far as the default value we will use zero as the array are indexed zero based, so we will show the first person by default
  const [index, setIndex] = useState(0);
  // Here we are setting the index based on the value of the state which means that we will be selecting the person based on the value of the index
  const {name, job, image, text} = people[index];

  // The checkNumber function will check if the number in the nextPerson/prevPerson falls within the array index of the people
  const checkNumber = (number) => {
    // Here we will check if the number is greater than the last item in the array then set the number to zero OR if the number is less than zero then set the number to the last item of the array
    if(number > people.length - 1) {
      return 0;
    }
    if(number < 0) {
      return people.length -1;
    }
    return number; 
  };

  const nextPerson = () => {
    // Here as we can recall in the parameter we are accessing the current state value 
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    // Here as we can recall in the parameter we are accessing the current state value 
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    // Here there is a possibility that the random number sometimes stays the same so we can subtract or add one just to make sure that the index is different each time we call this function 
    if(randomNumber === index) {
      randomNumber = index + 1;
    }
    // Now there is still a possibility that after subtracting or adding one to the randomeNumber we can get a number less than zero or greater than the array length, so we will again call the checkNumber function in this case
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
