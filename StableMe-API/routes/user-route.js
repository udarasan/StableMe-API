var express =require('express')
var router=express.Router()
var connection=require('./database/database')
const user=require('../model/users')

router.get('/', async (req,res)=>{
    const users = await user.find();
    res.send(users);
})

router.get('/oneuser/:nic',async (req,res)=>{
    //const id="60dc0e0020aa31f976c5b4c2";
    //const foundUser = await User.findOne ({ "email" : req.body.email });
    const users = await user.findOne(req.params);
    res.send(users);
    
})
router.put('/:nic',async(req,res)=>{
    const data=await user.findOneAndUpdate(req.params,req.body);
    res.send(data)
})

router.delete('/:_id',async(req,res)=>{
    const data=await user.deleteOne(req.params);
    res.send(data)
})
router.post('/saveuser',async(req,res)=>{
    const data=await user.create(req.body);
    res.send(data)
})

//------------------------------------------------------------------------->

module.exports=router