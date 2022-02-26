const mongoose=require('mongoose');


const visitorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mail: { type: String, required: true },
});

module.exports = mongoose.model('VisitorsInfo',visitorSchema);