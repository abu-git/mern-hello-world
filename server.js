const express = require('express');
const cors = require('cors');
const appRoute = require('./routes/app');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use('/app', appRoute);

app.listen(PORT, ()=>{
	console.log("Server running on " + PORT);
});
