const { Schema, model } = require('mongoose');

const ColorSchema = new Schema({
	name: String,
	rgb: String,
	hex: String,
	image: String
});

const ColorSch = model('ColorSch', ColorSchema);

module.exports = ColorSch;
