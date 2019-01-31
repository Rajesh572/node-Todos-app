const {MongoClient,ObjectID} =require('mongodb');
const config=require('../config');

MongoClient.connect(config.dbUrl,{ useNewUrlParser: true },(err,client)=>{
    if(err) {
        console.log("unable to connect MongoDB server");
    } 
        console.log('connected to MongoDB server');
        const db=client.db('TodoApp');    //refer to our database

        /* db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
            console.log(result.result);}); */
/* 
            db.collection('Todos').findOneAndUpdate({_id:new ObjectID('5c517799fe60670730f1c990')}
            ,{$set:{completed:true}},
        {returnOriginal:false})
                .then((result)=>{
                console.log(result);
            }); */

            db.collection('Users').findOneAndUpdate({_id:new ObjectID('5c517953f0e53009c0e667ed')}
            ,{$set:{Name:'Rishab'},$unset:{name:'Rishab'}}
            ,{returnOriginal:false}).then((result)=>{

                console.log(result);
            })
    });
