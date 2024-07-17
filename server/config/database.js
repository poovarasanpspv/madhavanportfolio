const mongoose = require("mongoose");

const connectdatabase = () => {
   mongoose.set('strictQuery', true);
    mongoose.connect(process.env.DB_LOCAL_URL, {
        useNewurlParser:true,
        useUnifiedTopology:true,
    }).then(con => {
        console.log(`mongodb is connected to the host: ${con.connection.host}`);
    })
}
module.exports = connectdatabase;