import { response } from "express";
import File from "../models/file.js";

// image ko upload krne ke lie itna sara code likha hai 
export const uploadImage = async (request,response) =>{

    const fileObj = {
        path: request.file.path,
        name: request.file.originalname
    }
    try{
        const file = await File.create(fileObj);
        console.log(file)
        response.status(200).json({path: `http://localhost:8000/file/${file._id}` }) // file local host me pdaa hua hai waha se lega ye adress
    }catch(error){
        console.error(error.message);
        response.status(500).json({error: error.message})
    }
}

// image ko download krne ke lie 

export const downloadImage = async(request, response) => {
    try{
        const file = await File.findById(request.params.fileId);
        
        file.downloadContent++;

        await file.save();

        response.download(file.path, file.name);
    }catch(error){
        return response.status(500).json({error: error.message});
    }
}