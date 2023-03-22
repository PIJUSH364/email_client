const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
    DocumentNo: {
        type: String,
        required: true,
    },
    refNo: {
        type: String,
        required: true,
    },
    DocumentType: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    section: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    search_keyWord: {
        type: String,
        required: true,
    },
});

module.exports = contentSchema;
