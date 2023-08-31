const express = require('express');
const controller = require('../controller/items_controller.js')
const middleware = require('../middleware/items_middleware.js')


const router = express.Router();

router.use(middleware.apiKeyAuth)


router.get('/',middleware.checkUser, controller.getAllItems)
router.get('/:id',middleware.checkUser,controller.getItemById)

// admin
router.post('/',middleware.checkAdmin, controller.addItem)
router.put('/:id',middleware.checkAdmin, controller.updateItem)
router.delete('/:id',middleware.checkAdmin, controller.deleteItem)


module.exports = router;
