import React from 'react';
import Product from './Product';
import { useFetch } from '../../9-custom-hooks/final/2-useFetch';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-prop-types-example';

const Index = () => {
  // Here we are returning two things i.e. loading and prodcuts form the useFetch custom hook but we only need products so we'll destructure only the products at this time
  const { products } = useFetch(url);
  return (
    <div>
      <h2>products</h2>
      <section className='products'>
        {products.map((product) => {
          // Here the each products contains different properties like name, image, and price which we will destructure in the Product component
          return <Product key={product.id} {...product} />
        })}
      </section>
    </div>
  );
};

export default Index;
