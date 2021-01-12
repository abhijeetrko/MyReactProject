const mongoose = require('mongoose');

const Data = require('./Models/Data');

mongoose.connect(
"mongodb+srv://User:2498@cluster0.c1c4c.mongodb.net/<Data>?retryWrites=true&w=majority", ({ useNewUrlParser: true ,useUnifiedTopology:true })
  ).then(() => {
    console.log('Connected to database!')
}).catch((err) => {
    console.log('Connection failed!')
    console.log(err)
});

const createData = async (req, res, next) => {
  const createdData = new Data({
    day: req.body.day,
    income: req.body.income
  });
  
  const result = await createdData.save();
 
  res.json(result);
};



const getData = async (req, res, next) => {
console.log(req.params.day )
    const products = await Data.find( {day:req.params.day},'income').exec();
    res.json(products);
  }
exports.createdData = createData;
exports.getData=getData;
