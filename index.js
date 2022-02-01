const express = require('express');

const server = express();

server.use(express.json());

const filmes = ['Harry Potter', 'Hulk', 'Velozes e Furiosos']; 

// Retorna um filme
server.get('/filmes/:index', (req, res) => {
    const { index } = req.params;

    return res.json(filmes[index]);
});

// Retornar todos os filmes
server.get('/filmes', (req, res) => {
    return res.json(filmes);

})

// Adicionar um novo filme
server.post('filmes', (req, res) => {
    const { name } = req.body;
    filmes.push(name);

    return res.json(filmes);
});


// Atualizar um filme
server.put('/filmes/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    filmes [ index ] = name;
    
    return res.json ( filmes );
})

// Deletar um filme
server.delete('/filmes/:index', (req, res) => {
    const { index } = req.params;
    
    filmes.splice(index, 1);
    return res.json ({ message: "O filme foi apagado"});
});

server.listen(3000);










