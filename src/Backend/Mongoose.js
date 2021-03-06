const mongoose = require('mongoose');
const jwt = require('./node_modules/jsonwebtoken');

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
    income: req.body.income,
    date: req.body.date
  });
  
  const result = await createdData.save();
 console.log("Post Operation Happe")
 console.log(req.body.date)
  res.json(result);
};



const getData = async (req, res, next) => {
console.log(req.params.date );

    const products = await Data.find({date: req.params.date}).exec();

    res.json(products);
  }

  //API For Getting all data

  const getDataAll = async (req, res, next) => {
    console.log("All data API is being req" );
    
        const products = await Data.find().exec();
    
        res.json(products);
      }

  const getAverage = async (req, res, next) => {
   console.log("In the get")
   let avg;
   var total =0;;
   var size=0;
        //const products = await Data.find({day: req.params.day}).exec();
        const products =await Data.find({},{ income:true}).exec();
        products.forEach(calculate);
        size=products.length;
        console.log(total/size)
        avg=total/size;
        res.json(avg);
     

        function calculate(item){

        
        total=total+item.income;

        }
      }


  const updateData = async (req, res, next) => {
    console.log("Update API Is being hit")
    console.log(req.params.date )
    console.log(req.body.income);
    

    Data.updateMany({ date:req.params.date }, { income: req.body.income }, function(
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
       const result = await Data.deleteOne({ date:req.params.date});
       res.json(result);
       console.log(result);

      }


      //testLogins
      const Login=async (req, res, next) => {
        console.log("Login API Is being hit")
        var username=req.body.username;
        var password=req.body.password;
        console.log(username);
        console.log(password);

       
        let token=jwt.sign({username:username,password:password},"secretSuperkey")
        console.log(token)
        try {
        const decodedToken=jwt.verify(token,"secretSuperkey")
        console.log(decodedToken)
        }
        catch(err){
            console.log(err)
        }
        res.json({message:'Your creds are being Checked',token:token})


      }
 
      const loginWithToken= async(req,res,next)=>{
        console.log("Token Login Functionality")
         auth=req.headers['authorization']
        console.log(typeof(auth))
        if (auth !== 'null')
         res.status(200).send('Authorized login');
        else
        res.status(401).send('Not Authorized Login');
        

      }

      const getFile =(req,res,next) =>{

        console.log(req)
        console.log("Upload File API Is being hit")
      }
exports.createdData = createData;
exports.getData=getData;
exports.updateData=updateData;
exports.deleteData=deleteData;
exports.Login= Login;
exports.getAverage=getAverage;
exports.getDataAll=getDataAll;
exports.loginWithToken=loginWithToken;
exports.getFile=getFile;