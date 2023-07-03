const {comments} = require('../Models/commentmodel')


const getAllComments = async(req,res,next)=>{
    try{
        const getcommentDetails = await comments.find({})
        if(getcommentDetails){
            res.status(200).json({
                err:false,
                message:"Successfully fetced the data",
                response:getcommentDetails
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


const addComments = async(req,res,next)=>{
    try{
        const{
            name,
            comment,
            id,
        } = req.body
        const addCommentDetails = await comments.create({
            name :name,
            comment :comment,
            CurrentDate :new Date(),
            id :id
        })
        if(addCommentDetails){
            res.send({
                err:false,
                message:"Comment are  added  successfully",
                response:addCommentDetails
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


const updateCommentDetails = async (req, res, next) => {
    try {
        const{
            name,
            comment,
            id,
        } = req.body

        const updateData = await comments.findOneAndUpdate({
            id: req.params.id
        }, {
            name :name,
            comment :comment,
            CurrentDate :new Date(),
            id :id
        }, {
            new: true
        });
        if (updateData) {
            res.status(200).json({
                error: false,
                message: "commentDetails are Updated Successfully",
                response: updateData
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


const sortingDetails = async(req,res,next)=>{
    try{
        const getAllDetails = await comments.find({})
        getAllDetails.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1: -1);
        if(getAllDetails){
            res.status(200).json({
                err:false,
                message:"Successfully fetced the data",
                response:getAllDetails
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

module.exports = {
    getAllComments,
    addComments,
    updateCommentDetails,
    sortingDetails
}