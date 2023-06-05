import { openDb } from '../configDB.js';

export async function createTable(req, res){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Pessoa ( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER, horario TEXT)') 
        res.json({
            "statusCode": 200
        })
    })
}

export async function selectPessoas(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM Pessoa')
        .then(pessoas=>  res.json(pessoas))
    });
}

export async function selectPessoa(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM Pessoa WHERE id=?', [id])
        .then(pessoa=> res.json(pessoa) );
    });
}

export async function insertPessoa(req, res){
    let pessoa = req.body;

    openDb().then(db=>{
        db.run('INSERT INTO Pessoa (nome, idade, horario) VALUES (?,?,?)', [pessoa.nome, pessoa.idade, pessoa.horario]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function updatePessoa(req, res){
    let pessoa = req.body;
    openDb().then(db=>{
        db.run('UPDATE Pessoa SET nome=?, idade=?, horario=? WHERE id=?', [pessoa.nome, pessoa.idade, pessoa.horario, pessoa.id]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function deletePessoa(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('DELETE FROM Pessoa WHERE id=?', [id])
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
}