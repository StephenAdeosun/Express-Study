const inventoryPath = require('../db/items_db.js')
const fs = require('fs');
const path = require('path');




const inventoryPath2 = path.join(__dirname, '../db/items_db.js')

// save the updated inventory_items array back to the inventory.js file
const writeDb = (inventoryPath) => {
    const newDbContent = `module.exports = ${JSON.stringify(inventoryPath, null, 4)};\n`;
    fs.writeFileSync(inventoryPath2, newDbContent, 'utf8');
}


const getAllItems = (req, res) => {
    res.json(inventoryPath.inventory)
}

const getItemById = (req, res) => {
    const id = parseInt( req.params.id);
    const item = inventoryPath.inventory.find(item => item.id === id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item Not Found');
    }
}

// Add Item
const addItem = (req, res) => {
    const item = req.body
    item.id = inventoryPath.inventory.length + 1
    inventoryPath.inventory.push(item)
    // Write the updated inventory_items array back to the inventory.js file
    writeDb(inventoryPath)

    res.status(201).send('Item added')
}

// update Item
const updateItem = (req, res) => {
    const itemId = parseInt(req.params.id)
   const  itemUpdate = req.body
    const itemIndex = inventoryPath.inventory.findIndex(item => item.id === itemId)

    if (itemIndex !== -1) {
        inventoryPath.inventory[itemIndex] = itemUpdate
        itemUpdate.id = itemId
        // Write the updated inventory_items array back to the inventory.js file
        writeDb(inventoryPath)
        res.status(200).send('Item updated')

    }
    else {
        res.status(404).send('404 Item Not Found')
    }

}


// Delete Item
const deleteItem = (req, res) => {
    const itemId = parseInt(req.params.id)
    const itemIndex = inventoryPath.inventory.findIndex(item => item.id === itemId)
    if (itemIndex !== -1) {
        inventoryPath.inventory.splice(itemIndex, 1)
        // Write the updated inventory_items array back to the inventory.js file
        writeDb(inventoryPath)
        res.status(200).send('Item deleted')
    }
    else {
        res.status(404).send('404 Item Not Found')
    }
}



module.exports = {
    getAllItems,
    getItemById,
    addItem,
    updateItem,
    deleteItem
}
