var express = require('express');
PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
})

app.listen(PORT, () => {
    console.log(`TLM Test API listening on port ${PORT}`);
})