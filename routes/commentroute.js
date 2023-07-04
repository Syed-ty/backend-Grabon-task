const express = require('express')
const router = express.Router()
const Controller = require('../controllers/commentcontroller')

const bodyParser = require('body-parser')

var jsonparser = bodyParser.json()

var urlencodedparser = bodyParser.urlencoded({extended:false})

router.post('/add',jsonparser,Controller.add)
router.get('/getalldata',jsonparser, Controller.getAll)
router.post('/update/:id',jsonparser, Controller.updateDetails)

// Delete api

router.post('/delete',jsonparser, Controller.deleteApi)


module.exports = router
