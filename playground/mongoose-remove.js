const{ObjectID}=require('mongodb');
const{mongoose}=require('mongoose');
const{User}=require('./../server/models/user');
const{Todo}=require('./../server/models/todo');

Todo.findOneAndDelete({_id:'5c55d8cdaea1a13d809ecab7'}).then((todo)=>{
    console.log(todo);
});

Todo.findByIdAndRemove('5c55d8cdaea1a13d809ecab7').then((todo)=>{
    console.log(todo);
});