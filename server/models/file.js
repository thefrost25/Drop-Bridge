// frontent se jo file aa raha hai wo valid v hai ki nahi 

import mongoose from "mongoose";


const fileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    downloadContent: {
        type: Number,
        required: true,
        default: 0
    }
})

const File = mongoose.model('file', fileSchema);

export default File;