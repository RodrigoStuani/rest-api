const express = require('express');
const app = express();

app.use('/', require('./routes/postsRoutes'));

app.listen(3030);