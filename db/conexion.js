const mongoose = require('mongoose')

const conexiondb =  async (dbhost) => {
    try {
        console.log({dbhost})
        url = dbhost.toString().trim();
        console.log({url});
        await mongoose.connect(dbhost,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
        console.log('Mongoo DB Connected')
    } catch (error) {
        console.log(error)
        console.log("Couldn't connect to the databas")
        console.error(err.message)
        process.exit()
    }
}
module.exports = conexiondb