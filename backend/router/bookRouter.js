const express = require('express')
const router = express.Router();

router.post('/create-food' ,  (req , res) => {
    try{
        console.log(req.body)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
});


module.exports = router;