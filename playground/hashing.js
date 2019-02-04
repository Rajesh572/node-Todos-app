const {SHA256}=require('crypto-js');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

var password='123abcz';
var hashedpwd='$2a$10$7cXBwHRsgFsK3tasaXmhROe4NcvowfwmJ899xrbLKN.KEnniA01wC';

bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt,(err,hash)=>{
        //console.log(hash);
    });
});
bcrypt.compare(password+'1',hashedpwd,(err,res)=>{
console.log(res);
});

/* 
var data={
    id:10
}

var token=jwt.sign(data,'123abc');
console.log(token);

var decoded=jwt.verify(token,'123abc');
console.log('decoded',decoded);
 */
/* var message='I am number 4';
var hash=SHA256(message).toString();

console.log(`message=${message} and hash=${hash}`);

var data={
    id:4
};

var token={
    data,
    hash:SHA256(JSON.stringify(data)+'sometext').toString()
}

//token.data.id=3;
//token.hash=SHA256(JSON.stringify(data)+'sometext').toString()
var resultHASH=SHA256(JSON.stringify(token.data)+'sometext').toString();

if(resultHASH===token.hash){
    console.log('Data was not changed');
}
else{
    console.log('Data was changed');
    
}
 */