const fs = require('fs')


const apiKeyAuth = (req, res, next) => {
    const userData = fs.readFileSync('./users/user.json')
    const userDb = JSON.parse(userData)

    const authHeader = req.headers.api_key
    if (!authHeader) {
        res.status(401).send('You need an API KEY ')
    }

    const existingUser = userDb.find(user => user.api_key === authHeader)
    if (existingUser) {
        req.user === existingUser
        next()
    }
    else {
        res.status(404).send('You are not authenticated')
    }
}

const checkAdmin = (req,res,next)=>{
    const userData = fs.readFileSync('./users/user.json')
    const userDb = JSON.parse(userData)
    const authHeader = req.headers.api_key

    const existingUser = userDb.find(user => user.api_key === authHeader)
    if(existingUser.role === 'admin'){
        next()
    }
    else{
        res.status(401).send('You are not  Authorized')
    }



}
const checkUser = (req,res,next)=>{
    const userData = fs.readFileSync('./users/user.json')
    const userDb = JSON.parse(userData)
    const authHeader = req.headers.api_key

    const existingUser = userDb.find(user => user.api_key === authHeader)
    if(existingUser.role === 'user'){
        next()
    }
    else{
        res.status(401).send('You are not  Authorized')
    }



}
module.exports = { apiKeyAuth, checkAdmin, checkUser }