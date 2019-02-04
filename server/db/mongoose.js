var mongoose=require('mongoose');
var config=require('../../config');
mongoose.Promise=global.Promise;
mongoose.connect(config.dbUrl,{ useNewUrlParser: true });

module.exports={mongoose};