const express = require('express');
require('./services/passport'); // nothing is exported.

const app = express();
require('./routes/authentication')(app); // calls the arrow function to forword the app object to the routes file.

app.listen(3000);