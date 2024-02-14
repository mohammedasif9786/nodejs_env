require('dotenv').config()


let express = require('express');
let expressFrame = express();

expressFrame.get('/new_server', (req, res) => {
    res.send('<h1>Muhammad Asifffff</h1>');
});

expressFrame.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT}`);
})