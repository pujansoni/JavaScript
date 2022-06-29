## What is Framework?

Before getting into concepts, let's understand what is framework?

The **_Framework_** provides essential **supporting structure** of a building, or object to the context

And in software, **_Framework_** provides supporting structure that allows you to build on top of it **web, APIs, or may be HTTP servers**

## Express Framework

Express.js is web-application framework that provides support for rendering

- Web application
- Web APIs

Express.js along with Node.js provides both frontend and backend functionality.

Express.js is used to render both -

- Static Content (Html/text)
- Dynamic Content (which changes at server end)

**Express Framework / Express.js / Express** represent the same. Going further it would mentioned as **Express**

## Node.js features

- Uses the same V8 engine as the Chrome browser.
- Uses an asynchronous event driven model.
- Non-Blocking (doesn't stop or prevent other things from happening) which makes it amazingly fast.

## Leveraging JS Libraries

The benefits of using a same language (such as JavaScript) for coding both your frontend and backend include

- Usage of Shared Library
- Simplification of Syntax usage
- Sharing of Codeshare & Datastructure like - Shared Library - Custom Function - Datastructure & Object Definitions

## Express features

- Adds web server functionality to **Node.js**
- Easier to build **websites** and **applications**
- Robust **routing mechanism** so that your applications can pass along different types of requests easily
- **Middleware supportive** (easy adoption of different Template engines)

## Installing Express

Assuming you've already installed Node.js, installation of Express is easy stuff. Kindly execute the following to install the Express latest edition

```
npm install express --save
```

## Request and Response

Express uses a callback function whose parameters are request and response objects

```
app.get('/', function(req, res) {})
app.post('/', function(req, res) {})
app.delete('/', function(req, res) {})
```

**Request Object** - The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on

**Response Object** - The response object represents the HTTP response that an Express app sends when it gets an HTTP request

## What is Package.json file?

All npm packages contain a file, usually in the project root, called **package.json**, which file holds various **metadata** relevant to the project

This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies

**package.json** can also contain other metadata such as a project description, the version of the project in a **particular distribution, license information, even configuration data** all of which can be vital to both **npm** and to the end users of the package

## Why Template Engine?

The **_template engine_** helps to use **static template files** in your application

At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client

### Different Template Engines

The Express applications generater uses **Jade** as its default, but it also supports several others

Other template engines that work with Express are **_Pug, Mustache, Handlebars and EJS_**

**Note**: Jade has been renamed to Pug. You can continue to use Jade in your app, and it will work fine. However if you want the latest updates to the template engine, you mush replace Jade with Pug in your app

**Jade** is a high performance template engine heavily influenced by Haml and implemented with JavaScript for Node

Indentation with white space is vital protocol used by jade to identify the syntax. It's renamed to **Pug** now

## Jade Engine - Procs and Cons

### Pros

- No closing tags and White space significant indentation
- Extensive layout inheritance and Macros support
- Built-in support for Markdown, CoffeeScript and others
- Available implementations in php, scala, ruby, python, and java

### Cons

- JavaScript in-lining can get cumbersome for more than one line
- Requires a small runtime to use precompiled templates on the client
- Not suitable for non-HTML output formats
- No streaming support and somewhat requires high learning curve
