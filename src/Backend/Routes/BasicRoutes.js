const express=require('express');
const Controller=require('../Controllers/Controller');
const router=express.Router();
const Mongoose=require('../Mongoose')

const bodyParser=require('body-parser');


router.get('/test',Mongoose.getData)

router.get('/:day',Mongoose.getData)

router.post('/savedata',Mongoose.createdData)

router.get('*',(req,res,next) => {
    res.status(404).json({message:"cant find this route"})
})
module.exports=router;