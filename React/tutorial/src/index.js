// The index.js is the entry point of the react application
// Here we are using the ES6 modules to import react
import React from 'react';
import ReactDom from 'react-dom';

// CSS
// For CSS we need to import the full relative path as its not a project dependency
// Here if it was a JS file not present in the dependency then the syntax of the relative path will be
// import './index.js'
import './index.css';

// Here to import the named export of books.js we will use the curly braces as shown below to import it in the index.js. Moreover, as it is not a built-in node modules we will use the relative import to import the books and we don't need the .js extension as it's a javascript file
import {data} from './books'
// Here as we have used the default export in the Book.js file we can import the Book component in this file. We can also use a different name and import it under a different name as we have used the default export in Book.js and changed the name from Book -> SpecificBook
import SpecificBook from './Book'

function BookList() {
  return (
    <section className="booklist">
      {/* Here whenever we are passing anything as the properties of the React Component it will be accessible in the respective Components first  parameter (i.e. props in this case) */}
      {/* <Book 
        img={firstBook.img} 
        title={firstBook.title} 
        author={firstBook.author} 
      > */}
        {/* If we have some fields that are unique to certain component then we can close the component using <component></component> instead of <component /> */}
        {/* Here the description is unique to the first book and the second book component does not contain the description */}
        {/* This is known as children prop and it's also available in the prop object */}
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et neque pulvinar, ultrices purus eu, lacinia ante. Phasellus id lacus.</p> */}
      {/* </Book>
      <Book 
        img={secondBook.img} 
        title={secondBook.title} 
        author={secondBook.author} 
      /> */}
      {/* Now we will set up the key prop. Each time we create a list in react we need a unique key prop to keep track of change in each item in the list. Here we have set an id field in the book array assuming that each id is unique. Now instead of destructing the id we will set up the key property in the prop to that of id */}
      {
        data.map((book) => {
          const {img, title, author} = book;
          return (
            // Here we are passing the book prop to the Book component and assigning the current book to the prop
            // <Book key={book.id} book={book}></Book>
            // Alternatively, you can also use the spread operator to assign separate properties as given below
            <SpecificBook key={book.id} {...book}></SpecificBook>
          );
        })
      }
    </section>  
  );
}

// This is an individual component for reference
const Image = () => (
  <img src="https://images-na.ssl-images-amazon.com/images/I/518g-3yvGZL._AC_SX368_.jpg" alt="" />
);

// This is an individual component for reference
const Title = () => <h1>Eyes That Speak to the Stars</h1>;

// We can also add the inline CSS but the syntax to add the inline css in the JSX way is different as we will use the curly braces and add all the CSS properties as the key-value pairs same as JS objects 
// Inline CSS takes precedence over the external CSS
// This is an individual component for reference
const Author = () => <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>Joanna Ho, Dung Ho</h4>;

// Now we need some way to inject the Greeting() component in the index.html file of the application which we can do by using the ReactDom method. ReactDom has the render method
// The render method has two parameters. The first parameter indicates what we need to render i.e. Greeting() in this case. The second parameter indicates where we want to render it i.e. in the root div of the index.html file
ReactDom.render(<BookList />, document.getElementById('root'));
// Here we need to either self close the react component (as shown above) or we can use the closing tag (i.e. we can also use <Greeting></Greeting>)
