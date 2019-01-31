var MongoClient=require('mongodb').MongoClient;
var assert=require('assert');
var config=require('../config')


MongoClient.connect(config.dbUrl,{ useNewUrlParser: true },(err,client)=>{
    if(err) {
        console.log("unable to connect MongoDB server");
    } 
        console.log('connected to MongoDB server');
        const db=client.db('TodoApp')     //refer to our database
    
    /* db.collection('Todos').insertOne({
        text:'Something to do',
        completed:false
    },(err,result)=>{
        if(err){
            console.log('Unable to insert todo',err);
        }
        console.log(JSON.stringify(result.ops));
    }) */

    db.collection('Users').insertOne({
        Name:'Rajesh',
        age:22,
        location:'Gurgaon'
    },(err,result)=>{
        if(err){
            console.log('Unable to insert user',err);
        }
         //result.ops is an array of all the documents that got inserted
        console.log(result.ops[0]._id.getTimestamp());
//        assert.equal(1,result.insertedCount);
    })

    client.close();
});