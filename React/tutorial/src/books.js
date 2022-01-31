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

// To use the named export we will use the export statement
export const data = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/61Dqa+W4hXL._AC_UL800_QL65_.jpg',
    title: 'Five Little Indians',
    author: 'Michelle Good'
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/81Lb75rUhLL._AC_UL800_QL65_.jpg',
    title: '12 Rules for Life',
    author: 'Jordan B. Peterson'
  },
  {
    id: 3,
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