const fs = require('fs');


const validateData = (req, res, next) => {

    const userData = fs.readFileSync('./users/user.json')
    const usersDb = JSON.parse(userData)
    const existingUser = usersDb.find(user => user.username === req.body.username)
    if (!req.body.username || !req.body.username.trim()) {
        res.status(400).send('Username is required')
    }
    else if (!req.body.password || !req.body.password.trim()) {
        res.status(400).send('Password is required')
    }
    else if (existingUser) {
        res.status(400).send('Username already exists')
    }
    else {
        next()
    }
}

module.exports = {
    validateData
}

