const mongoose = require('mongoose');

const empSchema = mongoose.Schema({
  eisNo: {
    type: String,
    required: true,
  },
  employeeCode: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

});

module.exports = empSchema;
