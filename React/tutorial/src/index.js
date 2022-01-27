// The index.js is the entry point of the react application
// Here we are using the ES6 modules to import react
import React from 'react';
import ReactDom from 'react-dom';

// CSS
// For CSS we need to import the full relative path as its not a project dependency
// Here if it was a JS file not present in the dependency then the syntax of the relative path will be
// import './index.js'
import './index.css';

// The react component functions are capitalized as shown below. React knows that this is special component as we capitalized the function name. This is a stateless functional component. Here we will return some HTML code (it's known as JSX officially which we will see later on)
// function Greeting() {
//   return <h4>this is pujan and this is my first component</h4>;
// }

// We can also write the Greeting() component with arrow function as given below
// The createElement() function has three parameter. The first one indicates what element do we want to return . The second parameter is the Props object (Will pass an empty object for now). The third parameter is the children which indicates what is going to be rendered inside the element
// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world');
// }

// But the above arrow function gets messier if there are two element in our Component that we want to return
// function Greeting() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   );
// }

// Let us write the corresponding arrow function syntax for the above function
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hello World')
//   );
// };

// For now we will just use the regular function as it's easier
// As mentioned before the Greeting() react component returns the JSX code
// JSX rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting
// Always use the parenthesis after the return keyword in a React Component
function Greeting1() {
  return (
    <div>
      <h3>Hello World</h3>
      <ul>
        <img src='' alt='' />
        <input type='text' name='' id='' />
      </ul>
    </div>
  );
}

// Nested Components
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
  return <p>this is my message</p>;
}

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>  
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => (
  <img src="https://images-na.ssl-images-amazon.com/images/I/518g-3yvGZL._AC_SX368_.jpg" alt="" />
);

const Title = () => <h1>Eyes That Speak to the Stars</h1>;

// We can also add the inline CSS but the syntax to add the inline css in the JSX way is different as we will use the curly braces and add all the CSS properties as the key-value pairs same as JS objects 
// Inline CSS takes precedence over the external CSS
const Author = () => <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>Joanna Ho, Dung Ho</h4>;

// Now we need some way to inject the Greeting() component in the index.html file of the application which we can do by using the ReactDom method. ReactDom has the render method
// The render method has two parameters. The first parameter indicates what we need to render i.e. Greeting() in this case. The second parameter indicates where we want to render it i.e. in the root div of the index.html file
ReactDom.render(<BookList />, document.getElementById('root'));
// Here we need to either self close the react component (as shown above) or we can use the closing tag (i.e. we can also use <Greeting></Greeting>)
