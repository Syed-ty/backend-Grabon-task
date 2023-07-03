const mongoose = require('mongoose')
const Schema = mongoose.Schema

const prodctSchema = new Schema({
   name:{
    type:String
   },
   comment:{
    type:String
   },
   id:{
    type:String
   },
   CurrentDate:{
    type:Date
   }
})

const comments = mongoose.model('comments',prodctSchema)

module.exports = {comments}