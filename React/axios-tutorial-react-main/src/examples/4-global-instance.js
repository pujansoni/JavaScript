import { useEffect } from 'react';
// Using the global instance of the axios to setup some common parameters
import axios from 'axios';

const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      // The downside of using the global instance is that it applies to all of the responses in axios and sometime we may want to avoid that e.g. when the response has sensitive data
      const resp1 = await axios(productsUrl);
      const resp2 = await axios(randomUserUrl);
    } catch (error) {
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;
