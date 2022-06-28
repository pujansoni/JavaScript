const asyncWrapper = (fn) => {
    // Here we have access to req, res, next as it is our middleware and it's coming from the express. Here we are returning the function from the asyncWrapper
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            // Here the next method will pass the error to the next middleware
            next(error);
        }
    }
}

module.exports = asyncWrapper;
