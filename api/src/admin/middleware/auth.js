const jwt = require('jsonwebtoken')

const auth = (req, res, next) =>{
    try {
        const token = req.header("Authorization")
        if(!token) return res.status(400).json({msg: "Invalid Authentication 1"})

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, admin) =>{
            if(err) return res.status(400).json({msg: "Invalid Authentication 2"})

            req.admin = admin
            next()
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}
module.exports = auth