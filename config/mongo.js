const { error } = require('console');
const {connect}=require('mongoose')

const dbconnect=async()=>{
try{
await connect(process.env.MONGO_URL)
console.log('db connected');
}
catch(err){
    console.log('db error',err.message)
    
}
}
module.exports=dbconnect;