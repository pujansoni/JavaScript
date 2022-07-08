//domain - we can access using domain/.netlify/functions/1-hello
// Here we are using the exports keyword as we are in the node ecosystem and we export a function by using the exports keyword
// Here the reason why we have not used the await keyword inside the function is because we are already returning a promise
// Here the first argument i.e. event contains detail about the incoming event
// The second argument i.e. context will explain about the context where the function is running
// The first two arguments are provided by the Netlify
// Here when returning the body must contain a string and not an object, if we want to pass an object as the response then we need to stringify the object i.e. body: JSON.stringify(person)
exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: 'Our First Netlify Function Example',
    }
}

// Alternatively, we can also use the callback method instead of the async/await approach shown above. Here the callback approach will have a third arugument i.e. the callback function
// exports.handler = (event, context, callback) => {
//     // Here the first argument is null as we are not handling error
//     callback(null, {statusCode: 200, body: 'Our First Netlify Function Example'});
// }