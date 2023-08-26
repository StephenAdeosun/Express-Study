const express = require('express');
const controller = require('../controller/items_controller.js')
const middleware = require('../middleware/items_middleware.js')


const router = express.Router();

router.get('/', controller.getAllItems)
router.get('/:id',controller.getItemById)
router.post('/', controller.addItem)
router.put('/:id', controller.updateItem)
router.delete('/:id', controller.deleteItem)


module.exports = router;
