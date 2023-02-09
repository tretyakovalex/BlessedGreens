exports.get404 = (req, res, next) => {
    const err = new Error('Not found!');
    err.statusCode = 404;
    next(err);
}

exports.get500 = (error, req, res, next) => {
    const data = error.data;
    res.status(error.statusCode || 500);
    res.json({
        error: {
            message: error.message,
            data: data,
        }
    })
}