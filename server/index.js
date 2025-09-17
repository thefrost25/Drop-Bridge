import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';


const app = express(); // server jinda hua

app.use(cors());

app.use('/' , router);

const PORT = 8000; // server kaha jinda hua

DBConnection();


app.listen(PORT,() =>  // server kaha bat sunega or ky baat sunega
console.log(`Server is running on PORT ${PORT}`));   