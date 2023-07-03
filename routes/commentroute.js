const express = require('express')
const router = express.Router()
const commentController = require('../controllers/commentcontroller')

const bodyParser = require('body-parser')

var jsonparser = bodyParser.json()

var urlencodedparser = bodyParser.urlencoded({extended:false})

router.post('/addcomment',jsonparser,commentController.addComments)
router.get('/getalldata',jsonparser, commentController.getAllComments)
router.put('/updateComment/:id',jsonparser, commentController.updateCommentDetails)
router.get('/sortNameAscending',jsonparser, commentController.sortingDetails)


module.exports = router
