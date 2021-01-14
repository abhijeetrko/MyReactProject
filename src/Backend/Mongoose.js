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
    console.log("Creating data api is being HIt")
  const createdData = new Data({
    day: req.body.day,
    income: req.body.income
  });
  
  const result = await createdData.save();
 console.log("Post Operation Happe")
  res.json(result);
};



const getData = async (req, res, next) => {
console.log(req.params.day )
    const products = await Data.find({day: req.params.day}).exec();
    res.json(products);
  }


  const updateData = async (req, res, next) => {
    console.log("Update API Is being hit")
    console.log(req.params.day )
    console.log(req.body.income);
    

    Data.updateMany({ day:req.params.day }, { income: req.body.income }, function(
        err,
        result
      ) {
        if (err) {
          res.send(err);
        } else {
          res.json(result);
        }
      });

      }


      const deleteData=async (req, res, next) => {
        console.log("Delete Data API is Being hit")
       const result = await Data.deleteOne({ day:req.params.day});
       res.json(result);
       console.log(result);

      }
exports.createdData = createData;
exports.getData=getData;
exports.updateData=updateData;
exports.deleteData=deleteData;