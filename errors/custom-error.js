class CustomError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

const initiateCustomError = (message, statusCode) => {
    return new CustomError(message, statusCode)
}

module.exports = {initiateCustomError, CustomError}