const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Its lit Cruzhacks!');
    console.log('Success!');
})

app.listen(port, () => console.log('Example app'))