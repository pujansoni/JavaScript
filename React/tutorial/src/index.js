// The index.js is the entry point of the react application
// Here we are using the ES6 modules to import react
import React from 'react';
import ReactDom from 'react-dom';

// CSS
// For CSS we need to import the full relative path as its not a project dependency
// Here if it was a JS file not present in the dependency then the syntax of the relative path will be
// import './index.js'
import './index.css';

// setup variables
// For a regular array you can directly pass the array and display it in the React component
// const names = ['john', 'peter', 'susan'];
// Directly passing the names in the BookList() component doesn't make any sense so we can wrap each element using the map method as shown below
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });
// console.log(newNames);
// Here we can directly pass the newNames to our BookList() compenent which will display each name in heading 1
// Next we can see how to iterate over the array of the objects and instead of returning heading 1 we can return the component for each item

const books = [
  {
    img: 'https://m.media-amazon.com/images/I/61Dqa+W4hXL._AC_UL800_QL65_.jpg',
    title: 'Five Little Indians',
    author: 'Michelle Good'
  },
  {
    img: 'https://m.media-amazon.com/images/I/81Lb75rUhLL._AC_UL800_QL65_.jpg',
    title: '12 Rules for Life',
    author: 'Jordan B. Peterson'
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51gNCTAbLJS._AC_SX368_.jpg',
    title: 'Crying in H Mart: A Memoir',
    author: 'Michelle Zauner'
  }
];

// Commenting the below declaration and converting the individual object declaration in to the array of objects as shown above
// const firstBook = {
//   img: 'https://m.media-amazon.com/images/I/61Dqa+W4hXL._AC_UL800_QL65_.jpg',
//   title: 'Five Little Indians',
//   author: 'Michelle Good'
// }
// const secondBook = {
  //   img: 'https://m.media-amazon.com/images/I/81Lb75rUhLL._AC_UL800_QL65_.jpg',
  //   title: '12 Rules for Life',
  //   author: 'Jordan B. Peterson'
  // }

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
      {
        books.map((book) => {
          const {img, title, author} = book;
          return (
            // Here we are passing the book prop to the Book component and assigning the current book to the prop
            <Book book={book}></Book>
          );
        })
      }
    </section>  
  );
}

const Book = (props) => { 
  // Sometimes the props parameter is too large so we can use the JavaScript destructure property and avoid setting up the prop parameter
  // We can comment out the line given below and just use the object directly as the Book parameter
  // const {img, title, author} = props;
  // Here after commenting the line above we can alternatively destructure it directly when we create the function as shown by the example given below
  // const Book = ({img, title, author})
  // The children prop contains the unique elements available only on certain components and it can be accessed via the children (Note the naming convention is to name the last variable as children)
  // One way to access it is shown below
  // const Book = ({img, title, author, children})
  // Here the props object contains the book as its first field and we have to destructure the book field to get the required data
  const {img, title, author, children} = props.book;

  return (
    <article className="book">
      <img src={img} alt="" />
      {/* Here the JavaScript variable is referred inside the curly braces in the h1 tag */}
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* Here we can also use the JavaScript methods as given below:
        <h4>{author.toUpperCase()}</h4>
      */}
      {/* The JavaScript code inside the JSX must return a value/expression and it shouls not return the statement so the code below will generate an error:
        <p>{let x = 6}</p>
        However, the line given below will work:
        <p>{6+6}</p>
      */}
      {/* We can access the properties passed in the first parameter as given below. Here if the property is not present for a component then it won't display anything*/}
      {/* {children} */}
    </article>
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
