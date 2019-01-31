const {MongoClient,ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{

    if(err) {
        console.log("unable to connect MongoDB server");
    } 
        console.log('connected to MongoDB server');
        const db=client.db('TodoApp');
/* 
        db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
            console.log('Todos');
            console.log(docs);

        },
        (err)=>{
            console.log('Unable to fetch Todos');
        });
 */
        db.collection('Todos').find({
            _id:new ObjectID('5c5177e25feed91b701e953b')
        }).toArray().then((docs)=>{
            console.log('Todos');
            console.log(docs);
        },
        (err)=>{
            console.log('Unable to fetch Todos');
        });

        client.close();
});