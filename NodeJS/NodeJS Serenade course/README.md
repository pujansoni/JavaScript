# Callback Hell

- As you know by now, **Node.js** is **asynchronous and nonblocking**. Multiple requests at a server are facilitated by callback functions
- Using such multiple callback functions will make the code complex and hard to maintain. This is known as **Callback hell**
- One way to avoid this callback hell is the use of **Promises**

## What is Promise?

Promises are alternatives to callbacks. They provide a way to write async code and handle more errors effectively

According to the definition,

_A promise is an abstraction for asynchronous programming. It's an object that proxies for the return value or the exception thrown by a function that has to do some asynchronous processing_

## How Promise Works?

![Promise Flow](./resources/promise_1.png)

**Promises offer us with a cleaner and more efficient way of handling async code**

Instead of offering a callback, a promise possesses its own methods that you call to tell the promise. But what will happen when it fails or succeed

Promise offers the following methods:
i) **then(...)** - when a successful result is available
ii) **catch(...)** - when something goes wrong

## States in Promise

A promise can exist in one of three different states

- **Pending** - The initial state of a promise
- **Fulfilled** - The state of a promise signifying a successful operation
- **Rejected** - The state of a promise signifying a failed operation

## Quick Facts About Promise

- A Promise is settled, in other words, the computation it denotes has ended if it either rejected or fulfilled
- A Promise can be settled only once and then it remains settled. Subsequent attempts to settle has no effect

## How to Create Promise

The creation of a Promise object is done via the Promise constructor by calling **new Promise()**. This takes a function as an argument and it gets passed on two callbacks:

- one for notifying when the operation is successful (resolve)
- one for notifying when the operation has failed (reject)

```
var myPromise = new Promise(function(resolve, reject) {
    ...
});
```

**Example**

```
function getAsyncData(someValue){
  return new Promise(function(resolve, reject){
    getData(someValue, function(error, result){
      if(error){
        reject(error);
      }
      else{
        resolve(result);
      }
    })
  });
}

getAsyncData(“someValue”)
// Calling resolve in the Promise will get us here, to the first then(…)
.then(function(result){
    // Do stuff
})

// Calling reject in the Promise will get us here, to the catch(…)
// Also if there is an error in any then(..) it will end up here
.catch(function(error){
    // Handle error
});
```

## Chaining Promises

**getAsyncData().then** returns a new promise (say Q). It means that you can keep the Promise-based control flow going by invoking then() on Q:

- Q is resolved with what is returned by either resolve or reject
- Q is rejected if either resolve or reject throw an exception

## Chaining Example

```
// Callback approach
async1(function(){
    async2(function(){
        async3(function(){
            ....
        });
    });
});

// Promise approach
var task1 = async1();
var task2 = task1.then(async2);
var task3 = task2.then(async3);

task3.catch(function(){
  /*Solve your thrown errors
   from task1, task2, task3 here*/
})

// Promise approach with chaining
async1(function(){..})
    .then(async2)
    .then(async3)
    .catch(function(){
      // Solve your thrown errors here
    })

```

## What is Async/Await?

- Async/await is one of the latest features making into Nodejs like promises. Async/await makes the code look synchronous
- Async function declarations return an AsyncFunction object
- These are built on Promises
- These are similar to Generators these function's execution can be stopped at any time
- They return a Promise whereas generators generate { value: any, done: Boolean } object

## Difference with Promise

Instead of using **Promise.then()** to resolve your promise to a value, prefixing **await** to promise makes your code to pause until the value is available. Then proceeds execution as the value were synchronous. This should be enclosed inside an **async** function

## Promise v/s Async/Await

Below example depicts the difference between promise and async/await :

**Async operations with promises:**

```
app.post('/messages', (req, res) => {
  var message = new Message(req.body)

  message.save()
  .then(() => {
    console.log('saved')
    return Message.findOne({message: 'badword'})
  })
  .then( censored => {
    if(censored) {
      console.log('censored words found', censored)
      return Message.remove({_id: censored.id})
    }
    io.emit('message', req.body)
    res.sendStatus(200)
  })
  .catch((err) => {
    res.sendStatus(500)
    return console.error(err)
  })
})
```

**This example rewritten with async/await would look something like this:**

```
app.post('/messages', async (req, res) => {
  var message = new Message(req.body)
  var savedMessage = await message.save()

  console.log('saved')

  var censored = await Message.findOne({ message: 'badword' })

  if (censored)
    await Message.remove({ _id: censored.id })
  else
    io.emit('message', req.body)

  res.sendStatus(200)
})
```

## Why Async/Await?

The reasons for growing popularity of async/await include:

- The code written is **concise and clean** than that of using promises and callback
- There are better **error handling** capabilities
- The **intermediate values** produced by promises which are needed for nesting can be avoided making the code simple
- One major concern of promises **error stakes** can be easily pointed to the function containing them using async/await
- The killer advantage of async/await is its easy **debugging** capabilities

## Common Async/Await Design Patterns

- Retrying Failed Requests
- Processing a MongoDB Cursor
- Multiple Request in Parallel

### Retrying Failed Requests

**Await** lets us write an asynchronous code using synchronous language constructors. In this, you might retry a failed HTTP request using the Superagent HTTP libraries using callbacks

```
const superagent = require('superagent');

const NUM_RETRIES = 3;

request('http://google.com/this-throws-an-error', function(error, res) {
  console.log(error.message); // "Not Found"
});

function request(url, callback) {
  _request(url, 0, callback);
}

function _request(url, retriedCount, callback) {
  superagent.get(url).end(function(error, res) {
    if (error) {
      if (retriedCount >= NUM_RETRIES) {
        return callback && callback(error);
      }
      return _request(url, retriedCount + 1, callback);
    }
    callback(res);
  });
}
```

But this involves recursion which is not convenient to deal with for beginners. Now if Superagent.get().end() throws a synchronous exception the \_request call is to be wrapped in try/catch block

**Now using async/await we can write a function with a for and try/catch block**

```
const superagent = require('superagent');

const NUM_RETRIES = 3;

test();

async function test() {
  let i;
  for (i = 0; i < NUM_RETRIES; ++i) {
    try {
      await superagent.get('http://google.com/this-throws-an-error');
      break;
    } catch(err) {}
  }
  console.log(i); // 3
}
```

**await** must always be in **async** function

### Processing a MongoDB Cursor

MongoDB's **find()** function returns a cursor. This is an object with an asynchronous **next()** function that gets the next document in the query result. If there are no more results, next() resolves to null

MongoDB cursors have several helper functions like each(), map(), toArray() and the mongoose ODM adds an additional eachAsync() function. Without using aync/await, calling next() would be similar to the retry failure example. But by using async/await, you need not use any helper functions but jst a simple for loop

```
const mongodb = require('mongodb');

test();

async function test() {
  const db = await mongodb.MongoClient.connect('mongodb://localhost:27017/test');

  await db.collection('Movies').drop();
  await db.collection('Movies').insertMany([
    { name: 'Enter the Dragon' },
    { name: 'Ip Man' },
    { name: 'Kickboxer' }
  ]);

  // Don't `await`, instead get a cursor
  const cursor = db.collection('Movies').find();
  // Use `next()` and `await` to exhaust the cursor
  for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
    console.log(doc.name);
  }
}
```

### Multiple Requests in Parallel

Now we deal with multiple asychronous tasks in parallel, say, we want to hash multiple plaintext passwords in parallel with bcrypt.

bcrypt is nothing but a password hashing function based on Blowfish cipher.

Let us take a look at the example below:

```
const bcrypt = require('bcrypt');

const NUM_SALT_ROUNDS = 8;

test();

async function test() {
  const pws = ['password', 'password1', 'passw0rd'];

  // `promises` is an array of promises, because `bcrypt.hash()` returns a
  // promise if no callback is supplied.
  const promises = pws.map(pw => bcrypt.hash(pw, NUM_SALT_ROUNDS));

  /**
   * Prints hashed passwords, for example:
   * [ '$2a$08$nUmCaLsQ9rUaGHIiQgFpAOkE2QPrn1Pyx02s4s8HC2zlh7E.o9wxC',
   *   '$2a$08$wdktZmCtsGrorU1mFWvJIOx3A0fbT7yJktRsRfNXa9HLGHOZ8GRjS',
   *   '$2a$08$VCdMy8NSwC8r9ip8eKI1QuBd9wSxPnZoZBw8b1QskK77tL2gxrUk.' ]
   */
  console.log(await Promise.all(promises));
}
```

promise.all() function takes an array of promises and returns a promise that waits for every promise in array to resolve and it resolves into array that contains the value each promise in the original array resolved to. and await Promise.all(promises) is the result of each of the bcrypt.hash() calls.

This is not only way to handle multiple async functions in parallel,there is promise.race().

Take a look at the example with promise.race() using async/await:

```
/**
 * Prints below:
 * waited 250
 * resolved to 250
 * waited 500
 * waited 1000
 */
test();

async function test() {
  const promises = [250, 500, 1000].map(ms => wait(ms));
  console.log('resolved to', await Promise.race(promises));
}

async function wait(ms) {
  await new Promise(resolve => setTimeout(() => resolve(), ms));
  console.log('waited', ms);
  return ms;
}
```

# Passport JS

While logging into any of websites such as social networking websites or banking websites, have you ever thought **How would I implement such an authentication functionality in my application?**

For this Node.js provides an npm package called **Passport.js** for that

Passport is an **authentication middleware** for apps running on Node.js or Express frameworks

It takes out the pain of setting up manual authentication by providing different authentication mechanisms or **strategies** for authentication like **local** (authenticate using username and password), **facebook**, **twitter**, **google** and more

It is extremely flexible and modular in usage

## How to Use Passport

There are three main steps in using passport.js:

- Requiring the module and using its **passport.initialize()** and **passport.session()** middleware with express
- Configuring passport with at least one Strategy and setting up passport's **serializeUser** and **deserializeUser** methods
- Specifying a route which uses the **passport.authenticate()** middleware to actually authenticate a user

## Passport Methods and Middleware Summary

- **passport.initialize** middleware is invoked on every request. It ensures the session contains a passport.user object, which may be empty
- **passport.session** middleware is a Passport Strategy which will load the user object onto req.user if a serialised user object was found in the server
- **passport.deserializeUser** is invoked on every request by passport.session. It enables us to load additional user information on every request. This user object is attached to the request as **req.user** making it accessible in our request handling
- Local Strategy is only invoked on the route which uses the **passport.authenticate** middleware
- Only during this authentication **passport.serializeUser** is invoked allowing us to specify what user information should be stored in the session

## Risks in Node.js

- Buffer vulnerabilities due to built-in memory management
- Vulnerabilities caused by Native serialisation (JS and JSON) and Type manipulation in Node.js
- Vulnerabilities carried from dependencies or npm packages that you pull
- Regular Expression Denial of Service (ReDoS) vulnerability was report on HMAC package

# What is Socket.IO?

In a chat application like Facebook messenger or Whatsapp you are able to see the other person's status like say typing or seen message or delivered etc in a realtime manner.

This is not achieved by the regular HTTP calls because they are very slow and limited. So if we want this real time in our application, we can achieve it using **Socket.Io** module of npm.

**Sockets** are really fast and are capable of sending only those data packets which are needed. It enables real-time event-based communication between one or more clients and a server. It is often used in analytics, document collaboration, streaming and instant messaging.

## Using Socket.IO Server Side

Here we will learn how to use Socket.IO in server side. To begin with, install Socket.io using the following command -

```
$ npm install socket.io
```

So we need to use it in our server side application code. The first thing we need to do is **require** the library and start listening for events coming in from the client side. We can listen via an Express server, or just use its own.

For example,

```
var io = require('socket.io'),
    express = require('express');

// Via Express 3.x server
var app = express(),
    server = require('http').createServer(app),
    io = io.listen(server);
server.listen(80);

// Via Express 2.x server
var app = express.createServer(),
    io = io.listen(app);
app.listen(80);

// Standalone
io = io.listen(80);

// Now let's set up and start listening for events
io.sockets.on('connection', function(socket) {
    // We're connected to someone now. Let's listen for events from them
    socket.on('some event', function(data) {
        // We've received some data. Let's just log it
        console.log(data);
        // Now let's reply
        socket.emit('event', {some: "data"}); //``Line A``
    });
});
```

If we want to broadcast messages to all of the connected clients rather than to just a specific one, instead of calling **socket.emit** in line A, we have to call **io.sockets.emit**, which will send the message to every client

## Moving on to the Client

A standalone build of **socket.io-client** is exposed automatically by the **socket.io** server as /socket.io/socket.io.js. We need to point to the URL of the IO server and add "/socket.io/socket.io.js" in our client side script

For example,

```
<!-- Normally -->
<script src="http://<uri:port>/socket.io/socket.io.js"></script>
<!-- If same port as Express -->
<script src="/socket.io/socket.io.js"></script>
```

Now first we need to connect to the back end. It's really simple. Just call a function and give the URL of the Socket.IO server, and then use the socket in the same manner as used in the back end

```
var socket = io.connect("http://<uri:port>/");
socket.on("connect", function() {
    // Do stuff when we connect to the server
});
socket.on("some event", function(data) {
    // Log the data I received
    console.log(data);
    // Send a message to the server
    socket.emit("other event", {some: "data"});
});
```

## What are websockets?

- Communication between a client(browser) and server
- Bidirectional (data flows both ways)
- Allows real-time data flow

## More about Socket.io

We just saw some features of socket.io like sending and receiving messages and getting notified. Not only that it has many advanced features which help you develop your app with rich-features.

If we want to do something on disconnct, we have to use **disconnect** event like this:

```
socket.on("disconnect", function() {
    // Let the users know something bad happened or log the disconnect
});
```

We don't need to think about reconnection. Socket.IO reconnects on its own for a number of times and for each attempt it widens the time and stops after few attempts. So you might want to throw some **setTimeouts** in there to continue trying to reconnect later if you want.

You can disconnect on purpose, which does not cause the client to try connecting again by using

```
// Client side
socket.disconnect();
```

## The 'message' Event

The **message** event is used to make Socket.IO conform more closely to the **WebSocket** semantics. Hence, within this single callback, all the messages are received and dealt with, and there is no need to make up names for the messages. When using this, you also use **send** rather than **emit** to send messages. Server and Client side code will look like,

```
// Server Side
io.listen(80);
io.sockets.on('connection', function (socket) {
    socket.on('message', function (message) {
        console.log(message);
        socket.send('message was received');
    });
});

// Client Side
socket = io.connect('http://localhost/');
socket.on('connect', function() {
    . . .
});
socket.on('message', function (message) {
    console.log(message);
    socket.send('message was received');
});
```

## Segmenting Users: Rooms and Namespaces

You don't want to lump up the users in the same arena and sometimes you want to send messages to only particular clients and not everyone. For this, we have two different ways of segmenting users: **Rooms** and **Namespaces**

### Rooms

Users can be assigned to different rooms and then can be contacted when broadcasted to that room

Let's see how clients can be assigned to and removed from rooms. Simply use **socket.join** and **socket.leave** to join and leave rooms respectively

```
// Client Side
socket.on('addToRoom', function(roomName) {
    socket.join(roomName);
});
socket.on('removeFromRoom', function(roomName) {
    socket.leave(roomName);
});
```

A socket can join multiple rooms at once. Now that you're assigned to a room, whenever someone broadcasts to the entire room, you will be notified. Here's how you broadcast to rooms:

```
// Broadcast to everyone in a room, except you
socket.broadcast.to("room name").emit("your message");
// Broadcast to everyone in a room, including you
io.sockets.in("room name").emit("your message");
```

### Namespaces

**Namespaces** allow to have multiple connections to multiple Socket.IO servers but use only single Socket.IO server

In a simple way of explaining, a single server acts as multiple servers that you can connect to separately. While the intention is different, it does work to segregate users

Here let's setup the server side to allow multiple connections:

```
var io = require('socket.io').listen(80);
var chat = io
    .of('/chat')
    .on('connection', function (socket) {
        // Send message to client like usual
        socket.emit('a message', { that: 'only', socket: 'will get' });
        // Broadcast message to everyone in this namespace
        chat.emit('a message', { everyone: 'in', '/chat': 'will get' });
    });
var news = io
    .of('/news');
    .on('connection', function (socket) {
        socket.emit('item', { news: 'item' });
    });
```

If you observe you are replacing sockets with of('/namespace') when you start the \*\*on('connection', function(){}) call

## Storing Client Data

Socket.IO offers session storage that can be used to store information of connected socket client. It's simple to use

```
// Server Side
socket.on('set nickname', function (name) {
    socket.set('nickname', name, function () {
        socket.emit('ready');
    });
});
socket.on('msg', function () {
    socket.get('nickname', function (err, name) {
        console.log('Chat message by ', name);
    });
});
// Client Side
socket.emit('set nickname', user.nickname);
socket.on('ready', function () {
    console.log('Connected !');
    socket.emit('msg', message);
});
```

As you can see, it is storing a user's nickname so that everyone in a chat can know who is sending the messages. Simply use **socket.set** and **socket.get**. But you have to notice that they are asynchronous. So they require a callback if you want to do anything immediately after the value is saved or retrieved

## Message Event
