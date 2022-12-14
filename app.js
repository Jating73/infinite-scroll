const path = require('path')
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});


app.listen(port, () => {
    console.log(`App listening at port ${port}`);
})