import { useEffect } from 'react';
import axios from 'axios';
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {
  const fetchData = async() => {
    try {
      // The main difference between the fetch() and axios() is that fetch does not report the network error i.e. error like 404 and we need to handle those error manually. However, in axios the response object will contain the information about the network error as well.
      const response = await axios(url);
      console.log(response);
      // The response will be in the data property of the response object
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
