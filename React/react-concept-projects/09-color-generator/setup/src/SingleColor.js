import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

// Here in the SingleColor we are looking for three things from the color object that we are deconstructing in the App.js
// Here the rgb and weight are coming from the color object. Here we want the background to be same as the color in the rgb for the SingleColor component
const SingleColor = ({rgb, weight, index ,hexColor}) => {
  // Here we are setting up the alert useState cause we are also providing the functionality for the user to select a SingleColor component and copy the corresponding color to the clipboard and the alert message is used to indicate to the user that the color was copied to the clipboard
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  // const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  // Here we need to clear the "copy to clipboard" text after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return ()=>clearTimeout(timeout);
  }, [alert]);
  
  // Here we are setting up the inline style for the background color. 
  // Here we are also using the index from the prop in order to change the paragraphs color cause for the darker shades the weight and the hex values text color is not visible and we know that the all function from the values.js has the base color at index 10 so of any darker color variant the index is greater than 10 so we will add the color-light class for that component
  return <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}} onClick={() => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  }}>
    <p className="percent-value">
      {weight}%
    </p>
    <p className="color-value">{hexValue}</p>
    {alert && <p className="alert">copied to clipboard</p>}
  </article>
}

export default SingleColor
