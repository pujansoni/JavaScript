import React from 'react';

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
  // const {img, title, author, children} = props.book;
  // If you are using the spread operator 
  const {img, title, author} = props;

  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello World");
  };
  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article className="book" onMouseOver={() => {
      console.log(title);
    }}>
      <img src={img} alt="" />
      {/* Here the JavaScript variable is referred inside the curly braces in the h1 tag */}
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      {/* Here we can also use the JavaScript methods as given below:
        <h4>{author.toUpperCase()}</h4>
      */}
      {/* The JavaScript code inside the JSX must return a value/expression and it should not return the statement so the code below will generate an error:
        <p>{let x = 6}</p>
        However, the line given below will work:
        <p>{6+6}</p>
      */}
      {/* We can access the properties passed in the first parameter as given below. Here if the property is not present for a component then it won't display anything*/}
      {/* {children} */}
      <button type="button" onClick={clickHandler}>reference example</button>
      {/* Here in the complexExample() function if we invoke the function directly on the onClick event then it will run as soon as we load the app. To avoid this we will use the arrow function */}
      {/* <button type="button" onClick={complexExample(author)}>more complex example</button> */}
      <button type="button" onClick={() => complexExample(author)}>more complex example</button>
    </article>
  );
}

// Here we have used the default export
// We can only use one default export per file. However, we can use more than one named export on a file
export default Book;
