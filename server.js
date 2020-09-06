const express = require('express');
const app = express();
const monk = require('monk');
const db = monk('localhost/database');
const people = db.get('people');
app.use(express.json());
app.listen(3000,()=>{console.log('listening on http://localhost:3000')});
app.use(express.static('public',{extensions:['html','htm']}));

app.post('/data',(req,res)=>{
    const data={
        name:req.body.name,
        time:req.body.time
    };
    console.log(req.body);
   people.insert(data).then(createdata=>{
       res.json(createdata);
   });
});

app.get('/data',(req,res)=>{
  people.find().then(data=>res.json(data));
});

app.put('/update',(req,res)=>{
    people.findOneAndUpdate({name:req.body.name,time:req.body.time},{$set:{name:req.body.newname,time:req.body.newtime}}).then(updatedDoc=>{});
    console.log("updated");
    var data = req.body;
    res.json(data);
});

app.get('/view/:name',(req,res)=>{
    var getname = req.params.name;
    console.log(getname);
    people.find({name:getname}).then(data => res.json(data));
});