const {CustomAPIError} = require('../errors/custom-error');
const errorHandlerMiddleware = (err, req, res, next) => {
    // Here the custom error message can be accessed by the message property 
    // return res.status(err.status).json({msg: err.message});
    if(err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({msg: err.message});
    }
    return res.status(500).json({msg: 'Something went wrong, please try again'});
}

module.exports = errorHandlerMiddleware;
