const mongoose =  require('mongoose')

mongoose
    .connect(process.env.ATLAS_CONNECTION_URL, {useNewUrlParser: true})
    .then( ()=> console.log("Mongo db successfully connected"))
    .catch(err => console.log(err))

module.exports = mongoose;