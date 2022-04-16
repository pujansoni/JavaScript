import { useState } from 'react';
import axios from 'axios';

const url = 'https://icanhazdadjoke.com/';
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke');

  const fetchDadJoke = async () => {
    try {
      // Here if we log the data without setting up the header then we will get the data in the html format. If we set the headers to application/json then we fetch the data in the json format. Moreover, we can directly destructure the response by selecting the data itself as shown below
      const {data} = await axios(url, {
        headers: {
          Accept: 'application/json',
        }
      });
      console.log(data.joke);
      setJoke(data.joke);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  );
};
export default Headers;
