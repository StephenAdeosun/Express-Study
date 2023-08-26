const express = require('express');
const path = require('path');
const fs = require('fs');
//  starting express server
const server = express();



// setting up the port
const port = 5000;

// setting up the route



server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});