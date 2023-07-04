const mongoose = require('mongoose')
const Schema = mongoose.Schema

const prodctSchema = new Schema({
   id:{
    type:Number
   },
   userId:{
    type:Number
   },
   title:{
    type:String
   },
   body:{
    type:String
   }
})

const comments = mongoose.model('comments',prodctSchema)

module.exports = {comments}