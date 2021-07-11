var express =require('express')
var router=express.Router()
var connection=require('./database/database')
const exchange=require('../model/exchange')

router.get('/', async (req,res)=>{
    const exchanges = await exchange.find();
    res.send(exchanges);
})

router.get('/oneexchange/:uid',async (req,res)=>{
    //const id="60dc0e0020aa31f976c5b4c2";
    //const foundUser = await User.findOne ({ "email" : req.body.email });
    const exchanges = await exchange.find(req.params);
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

router.get("/incexpenses/:uid", async (req, res) => {
  const expenses = await exchange.aggregate([
    { $match: { type: "Expence" , uid: req.params.uid} },
    {
      "$group": {
        "_id": "$uid",
        "total": { $sum: "$value" }
      }
    }
  ]);
   
  res.send(expenses);
});
router.get("/exexpenses/:uid", async (req, res) => {
  const expenses = await exchange.aggregate([
    { $match: { type: "Income" , uid: req.params.uid} },
    {
      "$group": {
        "_id": "$uid",
        "total": { $sum: "$value" }
      }
    }
  ]);
   
  res.send(expenses);
});
//------------------------------------------------------------------------->

module.exports=router