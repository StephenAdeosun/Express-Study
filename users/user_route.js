const express = require('express');
const middleware = require('./user_middleware.js')
const controller = require('./user_controller.js')

const router = express.Router();

router.post('/', middleware.validateData, controller.createUser)

module.exports = router;