// To access the URL parameters we will need to use the useParams hook which will allow us to access the url parameters
import {Link, useParams} from "react-router-dom";

const SingleProduct = () => {
  console.log(useParams());
  // Here while destructing the parameter name must match the url Param
  const {productId} = useParams();
  return (
    <section className='section product'>
      <h4>{productId}</h4>
      <Link to="/products">back to products</Link>
    </section>
  );
};

export default SingleProduct;
