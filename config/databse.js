const mongoose =require('mongoose');

const connectDatabse = ()=>{
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(con=>{
        console.log(`mongodb connected with host : ${con.connection.host}`)
    }).catch((err)=>console.log('some error', err))

}

module.exports=connectDatabse

