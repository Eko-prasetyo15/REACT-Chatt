var mongoose = require('mongoose');

var chattSchema = new mongoose.Schema({
    Id: Number,
    name: String,
    content: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('chatt', chattSchema);