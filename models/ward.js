const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wardSchema = new Schema({
  wardNumber: {type: String, required: true},
  status: {type: Boolean, required: true},
  timeDelay: {type: Number},
});

const Ward = mongoose.model('Ward', wardSchema);

module.exports = Ward;
