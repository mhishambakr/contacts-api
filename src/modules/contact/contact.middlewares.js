const { contactListSchema, contactCreateSchema, contactUpdateSchema, contactDeleteSchema } = require("./contact.validation");


exports.validateContactList = async (req, res, next) => {
    try {
        await contactListSchema.validateAsync(req.query)

        next();
    } catch (error) {
        res.status(error.status || 400).json({
            message: error.message || 'Something went wrong',
        })
    }
}

exports.validateContactCreate = async (req, res, next) => {
    try {
        await contactCreateSchema.validateAsync(req.body)

        next();
    } catch (error) {
        res.status(error.status || 400).json({
            message: error.message || 'Something went wrong',
        })
    }
}

exports.validateContactUpdate = async (req, res, next) => {
    try {
        await contactUpdateSchema.validateAsync(req.body)

        next();
    } catch (error) {
        res.status(error.status || 400).json({
            message: error.message || 'Something went wrong',
        })
    }
}

exports.validateContactDeletion = async (req, res, next) => {
    try {
        await contactDeleteSchema.validateAsync(req.query)

        next();
    } catch (error) {
        res.status(error.status || 400).json({
            message: error.message || 'Something went wrong',
        })
    }
}