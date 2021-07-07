var express =require('express')
var router=express.Router()
var connection=require('./database/database')
const exchange=require('../model/exchange')

router.get('/', async (req,res)=>{
    const exchanges = await exchange.find();
    res.send(exchanges);
})

router.get('/oneexchange/:amount',async (req,res)=>{
    //const id="60dc0e0020aa31f976c5b4c2";
    //const foundUser = await User.findOne ({ "email" : req.body.email });
    const exchanges = await exchange.findOne(req.params);
    res.send(exchanges);
    
})
router.put('/:nic',async(req,res)=>{
    const data=await exchange.findOneAndUpdate(req.params,req.body);
    res.send(data)
})

router.delete('/:_id',async(req,res)=>{
    const data=await exchange.deleteOne(req.params);
    res.send(data)
})
router.post('/saveexchange',async(req,res)=>{
    const data=await exchange.create(req.body);
    res.send(data)
})
router.get('/allincome/:type',async(req,res)=>{
    const data=await exchange.findById(req.params);
    res.send(data)
})

//------------------------------------------------------------------------->

module.exports=router