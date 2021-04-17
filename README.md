# JavaScript

Playing around with JS by creating mini projects

## Difference between document and window object

The difference can be visualized by the image given below:

![Difference between document and window object](repo_images/document_window_object.JPG)

The **window** object is the first thing that gets loaded into the browser. This **window** object has the majority of the properties like length, innerWidth, innerHeight, name, etc

The **document** object is the html, aspx, php, or other document that will be loaded into the browser. The document object actually gets loaded inside the window object and has properties available to it like title, URL, cookie, etc. That means if you want to access a property for the window it is window. property, if it is document it is window.document.property which is also available in short as document.property
