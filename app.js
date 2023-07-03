const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({
    extended :true
}))

app.use(cors())
const commentRoutes = require('./routes/commentroute')
app.use('/task',commentRoutes)

app.get('/', (req, res) => {
    res.json({
        app: 'Task',
        path: '/',
        response: "ok"
    });
});

app.use((err, req, res, next) => {
    res.status(500).json({
        error: true,
        message: "Internal Server Error",
        details: err
    })
});

app.listen(3000, ()=>{
    console.log('App is running on port on 3000')
})


