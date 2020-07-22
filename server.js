//================================================================ variables
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Routes = require('./src/routes/routes');
require('dotenv').config();

//==================================================== middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(cors());

//==================================================== routes

app.use('/welcome', (req, res) => {
	res.status(200).send('welcome to the Trace app');
});
app.use('/api', Routes);
//=========================================================== connect mongdb;

// mongoose.connect(
// 	'mongodb://localhost:27017/Vipo_box',
// 	{
// 		useCreateIndex: true,
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true
// 	},
// 	function() {
// 		console.log('database connected success');
// 	}
// );

// =========================================================== connect mongdb_ATLAS;

mongoose
	.connect(process.env.MONGO_ATLAS_DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('Connection to the Atlas Cluster is successful!');
	})
	.catch((err) => console.error(err));

//============================================================ port
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`app is running on port ${port}`));
