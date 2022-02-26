const mongoose=require('mongoose');

const dataSchema = new mongoose.Schema({
    day: { type: String, required: true },
    income: { type: Number, required: true },
    date:{type:Date}
});


module.exports = mongoose.model('Data', dataSchema);
