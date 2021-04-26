const express=require('express');
const Controller=require('../Controllers/Controller');
const router=express.Router();
const Mongoose=require('../Mongoose')

const bodyParser=require('body-parser');


router.get('/test',Mongoose.getData)

router.get('/all',Mongoose.getDataAll)

router.get('/average',Mongoose.getAverage)
router.get('/:date',Mongoose.getData)
router.post('/savedata',Mongoose.createdData)

router.post('/login',Mongoose.Login)

router.post('/loginWithToken',Mongoose.loginWithToken)

router.post('/uploadFile',Mongoose.getFile)


router.patch('/update/:date',Mongoose.updateData)

router.delete('/delete/:date',Mongoose.deleteData)

router.get('*',(req,res,next) => {
    res.status(404).json({message:"cant find this route"})
})
module.exports=router;