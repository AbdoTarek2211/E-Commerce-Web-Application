const mongoose = require('mongoose');
const validateID = (id =>{
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if(!isValid){
        throw new Error("This ID is not Valid");
    }
});
module.exports = validateID;