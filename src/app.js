import express from 'express';
import cors from 'cors';
import router from './routes.js'

const app = express();

app.use(express.json());
app.use(cors({origin: '*'}))
app.use(router);

app.listen(3000, () => console.log("Api Rodando."))
