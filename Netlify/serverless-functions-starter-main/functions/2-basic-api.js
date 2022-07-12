const items = require('../assets/data');

// Here note that the body of the response must be a string
exports.handler = async (event, context) => {
    // Here resolving the CORS error will have our function be used by other applications as well
    return {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        statusCode: 200,
        body: JSON.stringify(items),
    }
}
