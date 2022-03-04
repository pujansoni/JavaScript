import { useState, useEffect } from 'react';

// Here we can also add the error useState in order to handle any errors that we may encounter while fetching the data
// Here either the function needs to be a component or it needs to be a custom hook
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [url]);

  return {loading, products};
};
