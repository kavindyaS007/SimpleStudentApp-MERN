const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let studentSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    grade: {
        type: String
    }
}, {
    collection: 'students'
})

module.exports = mongoose.model('Student', studentSchema)