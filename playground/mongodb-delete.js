const {MongoClient} =require('mongodb');
const config=require('../config');

MongoClient.connect(config.dbUrl,{ useNewUrlParser: true },(err,client)=>{
    if(err) {
        console.log("unable to connect MongoDB server");
    } 
        console.log('connected to MongoDB server');
        const db=client.db('TodoApp');    //refer to our database

        /* db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
            console.log(result.result);}); */

            db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
                console.log(result);
            });

    });
