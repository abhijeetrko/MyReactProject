const mongoose=require('mongoose');

const dataSchema = new mongoose.Schema({
    day: { type: String, required: true },
    income: { type: Number, required: true }
});

module.exports = mongoose.model('Data', dataSchema);