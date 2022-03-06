import { useState, useEffect, useCallback } from 'react';

// Here we can also add the error useState in order to handle any errors that we may encounter while fetching the data
// Here either the function needs to be a component or it needs to be a custom hook
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  });

  // Here as the getProducts() function is setting the product state value it will be in an infinite loop. To avoid that we have used the useCallback() function to make sure that we run the function from scratch only when the url changes
  useEffect(() => {
    getProducts();
  }, [url, getProducts]);

  return {loading, products};
};
