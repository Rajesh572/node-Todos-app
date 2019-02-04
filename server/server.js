var express=require('express');
var bodyParser=require('body-parser');
const {ObjectID}=require('mongodb');
const _=require('lodash');
var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');
var {authenticate}=require('./middleware/authenticate')

var app=express();
const port=process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    //console.log(req.body);

    var todo=new Todo({
        text:req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
         res.status(400).send(e); 
    });
});

app.get('/todos/:id',(req,res)=>{
    var id=req.params.id;

    if(!ObjectID.isValid(id)){
        res.sendStatus(404);
    }
    Todo.findById(id).then((doc)=>{
        if(!doc){
            res.sendStatus(404);
        }
        res.send({doc});
    }).catch((e)=>
    res.status(404).send(e));
});

app.delete('/todos/:id',(req,res)=>{
    var id=req.params.id;

    if(!ObjectID.isValid(id)){
        res.sendStatus(404);
    }
    Todo.findById(id).then((todo)=>{
        if(!todo){
          res.sendStatus(404);
        }
        Todo.findByIdAndRemove(id).then((todo)=>{
            if(!todo){
                res.sendStatus(404);
            }
            res.send({todo});
        });
    }).catch((e)=>{
        res.status(404).send(e)
    });
});

app.patch('/todos/:id',(req,res)=>{
    var id=req.params.id;
    var body= _.pick(req.body,['text','completed']);

    
    if(!ObjectID.isValid(id)){
        res.sendStatus(404);
    }

    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt=new Date().getTime(); 
    }
    else{
        body.completed=false;
        body.completedAt=null;
    }
        Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
            if(!todo){
                res.sendStatus(404);
            }
            res.send({todo});

        }).catch((e)=>{
            res.status(404).send(e);
        });
   
});

app.post('/users',(req,res)=>{
    var body = _.pick(req.body,['email','password']);
    var user=new User(body);
    user.save().then((user)=>{
        return user.generateAuthToken();
        // res.send(doc);
    }).then(token=>{
        res.header('x-auth',token).send({user});  
    })
    .catch((e)=>{
        res.status(404).send(e);
    })
});

app.get('/users/me',authenticate,(req,res)=>{
    res.send(req.user);
});

app.post('/users/login',(req,res)=>{
    var body = _.pick(req.body,['email','password']);
    User.findByCredentials(body.email,body.password).then((user)=>{
        return user.generateAuthToken().then((token)=>{
            res.header('x-auth',token).send({user});  
        })
    }).catch((e)=>{
        res.sendStatus(404);
    })
});

app.delete('/users/me/token',authenticate,(req,res)=>{
    req.user.removeToken(req.token).then(()=>{
        res.sendStatus(200);
    },  () => {
        res.sendStatus(400);
    })
})




app.listen(port,()=>{
    console.log('Started on port:',port);
});

module.exports={app};