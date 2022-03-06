import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders

// Please note that react is fast by default

// useMemo will deal with the value just as React.memo will work with the props
const calculateMostExpensive = (data) => {
  return data.reduce((total, item) => {
    const price = item.fields.price;
    if(price >= total) {
      total = price;
    }
    return total
  }, 0)/100;
};

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  // Here we will pass the cart right down to the SingleProduct component. Here everytime the cart value changes the function will render and it will run the addToCart function from scratch
  const [cart, setCart] = useState(0);
  // We will use the useCallback function in this case which will ensure that we only call the function if it's value has changed or else we won't call the function. So here if we click on the count then the cart won't re-render as we are not changing the cart value
  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  // Here we are calling the calculateMostExpensive() function every time we are clicking on the button. Here as the useMemo() function will deal with the values we will pass the function that returns a value as the first argument to the useMemo() function and the second argument is the dependency array 
  const mostExpensive = useMemo(() => calculateMostExpensive(products), [products]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{marginTop: '3rem'}}>cart: {cart}</h1>
      <h1>Most Expensive : ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart}/>
    </>
  )
}

// Here memo is our function and will wrap the logic of the component in the memo. Here the memo is memoizing the values i.e. if the prop value is not changed then we are not triggering the re-render 
const BigList = React.memo(({ products, addToCart }) => {
  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product} addToCart={addToCart}></SingleProduct>
      })}
    </section>
  )
});

const SingleProduct = ({ fields, addToCart }) => {
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>add to cart</button>
    </article>
  )
}
export default Index
