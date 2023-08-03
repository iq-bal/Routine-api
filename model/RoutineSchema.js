const mongoose = require('mongoose')

const RoutineSchema = new mongoose.Schema({
    section:{
        type: String
    },
    sunday:{
        type: Object
    },
    monday:{
        type: Object
    },
    tuesday:{
        type: Object
    },
    wednesday:{
        type: Object
    },
    thursday:{
        type: Object
    },
    friday:{
        type: Object
    },
    saturday:{
        type: Object
    }
})

module.exports= mongoose.model('Routine',RoutineSchema)