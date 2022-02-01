import React from 'react';

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    title = "hello people";
    console.log(title);
    // Here after changing the title onClick there's no way to change the h2 tag to re-render and show the updated title value, which we can change by using the useState function
  };
  return (<React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>change title</button>
    </React.Fragment>);
};

export default ErrorExample;
