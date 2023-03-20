const mongoose = require('mongoose')
// mongo_uri is hardcoded here because our dotenv is not working. keeping the tight schedule in mind we have ignored that problem and moved on by hardcoding it.
const mongo_uri = "mongodb+srv://sahilnaim:sahil2000@cluster0.7qqit4b.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async()=>{  
    try {
        // console.log(process.env.REACT_APP_MONGO_URI)
        const conn = await mongoose.connect(mongo_uri, {
            useNewUrlParser : true,
            useUnifiedTopology : true
        });
        console.log(`Connection to the MongoDB is Successful `);
    } 
    catch (error) {
        console.log(`The error is ${error.message}`);
        process.exit()
    }
}

module.exports = connectDB