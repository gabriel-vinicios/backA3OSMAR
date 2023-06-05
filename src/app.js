import express from 'express';
import cors from 'cors';
import router from './routes.js'

const app = express();

app.use(express.json());
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    app.use(cors())({origin: true});
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Content-Type, access-control-allow-headers");
    
    
    next();
});

app.use(router);

app.listen(3000, () => console.log("Api Rodando."))
