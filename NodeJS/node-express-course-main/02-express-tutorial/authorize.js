const authorize = (req, res, next) => {
    // Here for the demonstration purpose we will use the query string to authorize the user, but this method is not preferrable. For this example if the query string is present we will authorize the user to access the resource else we will send the 401 error for Unauthorized users
    const {user} = req.query;
    if(user === 'john') {
        req.user = {name: 'john', id: 3};
        next();
    } else {
        res.status(401).send('Unauthorized');
    }

    next();
}

module.exports = authorize;
