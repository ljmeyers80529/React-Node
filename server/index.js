const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({Hi: 'node - react application.'});
});

app.listen(5000);
