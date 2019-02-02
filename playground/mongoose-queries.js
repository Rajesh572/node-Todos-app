const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');


User.findById('5c53d3c56294993328b31b5a').then((doc)=>{
    if(doc) console.log(doc);
    else console.log('Unable to find User');
},(error)=>{
    console.log(error);
});

/* var id='5c5416306b14f4258c2e70c1';

if(!ObjectID.isValid(id)){
    console.log('Id not Valid');
} */

/* Todo.find({
    _id:id
}).then((todos)=>{
    if(todos.length)
      console.log('Todos',todos);

      else
      console.log('Id not found');
});

Todo.findOne({
    _id:id
}).then((todo)=>{
    if(todo)
    console.log('Todo',todo);

    else
    console.log('Id not found');
});
 */
/* Todo.findById(id).then((todo)=>{
    if(todo)
    console.log('Todo',todo);

    else
    console.log('Id not found');
}).catch((e)=>{
    console.log(e);
}); */