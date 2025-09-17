import mongoose from 'mongoose';


const DBConnection = async() =>{
    const MONGODB_URL = `mongodb://filesharing:filesharing01@cluster0-shard-00-00.o3qgq.mongodb.net:27017,cluster0-shard-00-01.o3qgq.mongodb.net:27017,cluster0-shard-00-02.o3qgq.mongodb.net:27017/?ssl=true&replicaSet=atlas-rr7j5w-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
    try{
        await mongoose.connect(MONGODB_URL, {useNewUrlparser: true});
        console.log('Database connected successfully'); 
    }catch(error){
        console.error('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;