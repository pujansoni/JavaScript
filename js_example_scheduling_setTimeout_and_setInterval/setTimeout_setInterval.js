// We may decide to execute a function not right now, but at a certain time later. That's called "scheduling a call".
// There are two methods for it:
// i) setTimeout: allows us to run a function once after the interval of time
// ii) setInterval: allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval

// setTimeout
// The syntax:
// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

// Parameters:
// func|code: Function or a string of code to execute. Usually that's a function. A string of code can also be passed, but it's not recommended
// delay: The delay before run, in milliseconds(1000ms = 1 second), by default 0.
//  arg1, arg2 ...: Arguments for the function

// For instance this code calls sayHi() after one second.
function sayHi() {
    alert('Hello');
}

setTimeout(sayHi, 1000);

// With arguments
function sayHi(phrase, who) {
    alert(phrase + ', ' + who);
}

setTimeout(sayHi, 1000, "Hello", "John");

// If the first argument is a string, then JavaScript creates a function from it
// So, this will also work
setTimeout("alert('Hello')", 1000);

// But using strings is not recommended, use arrow functions instead of them like this:
setTimeout(() => alert("Hello"), 1000);

// Note will passing a function to setTimeout() do not run it just pass in the reference
// wrong!
setTimeout(sayHi(), 1000);
// That doesn’t work, because setTimeout expects a reference to a function. 
// And here sayHi() runs the function, and the result of its execution is passed to setTimeout. 
// In our case the result of sayHi() is undefined (the function returns nothing), so nothing is scheduled.

// Canceling with clearTimeout
// A call to setTimeout returns a "timer identifier" timerId that we can use to cancel the execution
// The syntax to cancel:
// let timerId = setTimeout(...);
// clearTimeout(timerId);

// In the code below, we schedule the function and then cancel it. As a result nothing happens
let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer identifier

clearTimeout(timerId);
alert(timerId); // same identifier (doesn't become null after cancelling)



// setInterval
// The setInterval method has the same syntax as setTimeout:
// syntax: let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...);

// All arguments have the same meaning. But unlike setTimeout it runs the function not only once, but regularly after the given interval of time.
// To stop further calls, we should call clearInterval(timerId).
// The following example will show the message every 2 seconds. After 5 seconds, the output is stopped:

// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { 
    clearInterval(timerId);
    alert('stop');
}, 5000);

