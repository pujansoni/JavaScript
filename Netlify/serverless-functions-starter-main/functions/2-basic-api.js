const items = require('../assets/data');

// Here note that the body of the response must be a string
exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify(items),
    }
}
