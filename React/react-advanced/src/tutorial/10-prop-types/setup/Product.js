import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({image, name, price}) => {
  const url = image && image.url;

  return (
    <article className='product'>
      {/* Here when we try to access the url of the image we will get the error cause it's missing in one of the products. We will try console loggin these value and will notice that some of the values are undefined due to which we are getting these errors */}
      {/* Here we will need some kind of default values. We will import the PropTypes from the prop-types react package */}
      <img src={url || defaultImage} alt={name || 'default name'} />
      <h4>{name}</h4>
      {/* Here when we try to retrieve the price of all the products then we won't be able to print the price of the last product as it doesn't have any price associated with it */}
      <p>${price || 3.99}</p>
    </article>
  );
};

// Here in order to setup PropTypes we will need to set up propTypes property on the component as given below:
Product.propTypes = {
  // Here we know that the image will be an object
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
// Here on encountering the undefined/missing values we will get an error

// Here we can also setup the default Prop in case an image or any other values mentioned in the PropTypes is missing
// We can also use the shorthand operators as shown above instead of the defaultProps as shown above
// Product.defaultProps = {
//   name: "default name",
//   price: 3.99,
//   image: defaultImage,
// };

export default Product;
