const jwt = require('jsonwebtoken')
const {createError} = require('../middleware/error')


module.exports = {
    verifyToken: (req, res, next) => {
        const token = req.cookies.access_token
        if(!token){
            return next(createError(401, "You are not Authenticated"))
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err){
                return next(createError(403, "Token is not Valid"))
            }

            req.user = user
            next()
        })
    },

    verifyUser: (req, res, next) => {

        // Verify Token
        const token = req.cookies.access_token
        if(!token){
            return next(createError(401, "You are not Authenticated"))
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err){
                return next(createError(403, "Token is not Valid"))
            }

            req.user = user
        })
        // End Verify Token
        // Verify User
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            return next(createError(401, "You are not authorized"))
        }
    },

    verifyAdmin: (req, res, next) => {

        // Verify Token
        const token = req.cookies.access_token
        if(!token){
            return next(createError(401, "You are not Authenticated"))
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err){
                return next(createError(403, "Token is not Valid"))
            }

            req.user = user
        })
        // End Verify Token
        // Verify User
        if(req.user.isAdmin){
            next()
        }else{
            return next(createError(401, "You are not authorized"))
        }
    }

}