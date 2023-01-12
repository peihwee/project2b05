//////////////////////////////////////////////////////
// INCLUDES
//////////////////////////////////////////////////////
const express = require('express');
const cors = require('cors');
const connection = require('./db'); //Import from db.js



//////////////////////////////////////////////////////
// INIT
//////////////////////////////////////////////////////
const app = express();
console.log("process.env.PORT:", process.env.PORT);
const PORT = process.env.PORT || 3000;

//////////////////////////////////////////////////////
// SETUP APP
//////////////////////////////////////////////////////
app.use(cors());
app.use(express.json());

app.use("/", express.static("../frontend-react/build"));
app.use("/old", express.static("../frontend"));

//////////////////////////////////////////////////////
// DISPLAY SERVER RUNNING
//////////////////////////////////////////////////////
app.get('/',(req,res)=> {
    res.send(`Server running on port ${PORT}`)
});

app.listen(PORT,()=> {
    console.log(`App listening to port ${PORT}`);
});

//////////////////////////////////////////////////////
// SETTING MAIN ROUTES
//////////////////////////////////////////////////////
const mainRoutes = require("./routes/mainRoutes");
app.use("/api", mainRoutes);


app.get("/message", (req, res, next) => {
    res.send(req.query);
});