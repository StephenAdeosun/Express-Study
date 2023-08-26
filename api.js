const express = require('express');
const itemsRouter = require("./routes/items_route.js")
const userRouter = require("./users/user_route.js")
const app = express();
const port = 5000;


app.use(express.json());

app.use("/items", itemsRouter)
app.use("/users", userRouter)

app.get('*' , (req, res) => {
    res.status(404).send('404 Item Not Found')
})


app.listen(port, () => {        
    console.log(`Server is running on port ${port}`);
});

