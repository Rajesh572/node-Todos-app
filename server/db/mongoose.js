var mongoose=require('mongoose');
var config=require('../../config');
mongoose.Promise=global.Promise;
mongoose.connect(config.dbs||config.dbUrl,{ useNewUrlParser: true });

module.exports={mongoose};