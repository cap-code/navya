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