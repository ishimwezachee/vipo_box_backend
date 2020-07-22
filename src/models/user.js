const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
	province: String,
	district: String,
	sector: String,
	cell: String,
	village: String,
	street: String,
	accountType: String,
	names: String,
	nationalId: Number,
	password: String,
	email: String,
	building: String,
	other: String
});

const User = mongoose.model('User', userSchema);
module.exports = User;
