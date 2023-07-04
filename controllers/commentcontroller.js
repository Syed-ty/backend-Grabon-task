const {comments} = require('../Models/commentmodel')


const getAll = async(req,res,next)=>{
    try{
        const jsonDatas =  await require('../data.json');
        if(jsonDatas){
            res.status(200).json({
                err:false,
                message:"Successfully fetced the data",
                response:jsonDatas
            })
        }
        else{
            res.status(404).json({
                err:true,
                message:"No data found"
            })
        }
    }
    catch(err){
         next(err.message)
    }
}


const add = async(req,res,next)=>{
    try{
        const{
            id,
            userId,
            title,
            body
        } = req.body
        const jsonDatas =  await require('../data.json');
        jsonDatas.push(req.body)
        const addDetails = jsonDatas
        if(addDetails){
            res.send({
                err:false,
                message:"Added successfully",
                response:addDetails
            })
        }
        else{
            res.status(404).json({
                err:true,
                message:"No data found"
            })
        }
    }
    catch(err){
         next(err.message)
    }
}

const updateDetails = async (req, res, next) => {
    try {
        const{
            id,
            userId,
            title,
            body
        } = req.body
        var jsonDatas =  await require('../data.json');
        jsonDatas.forEach((ele,i) => {
            if (ele.id === parseInt(req.params.id)) {
                jsonDatas.splice(i, 1);
            }
          })
          jsonDatas.push(req.body)
          
        if (jsonDatas) {
            res.status(200).json({
                error: false,
                message: "Updated Successfully",
                response: jsonDatas
            })
        } else {
            res.status(200).json({
                error: true,
                message: "Something went wrong",
            })
        }
    } catch (err) {
        next(err)
    }
};


const deleteApi = async (req, res, next) => {
    try {
        const{
            id
        } = req.body
        const jsonDatas =  await require('../data.json');
        jsonDatas.forEach((ele,i) => {
            if (ele.id === req.body.id) {
                jsonDatas.splice(i, 1);
            }
          })
        if (jsonDatas) {
            res.status(200).json({
                error: false,
                message: 'Deleted Successfully',
                response: jsonDatas
            })
        } else {
            res.status(400).json({
                error: true,
                message: 'Something Went Wrong'
            })
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAll,
    add,
    updateDetails,
    deleteApi
}