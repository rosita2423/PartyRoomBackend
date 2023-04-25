const express = require('express'); // is the package I use to the backend
const cors = require('cors'); 
const morgan = require('morgan');  
const router = require('./routes/routes_graduation')

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(router);

module.exports = app;
//export default app

