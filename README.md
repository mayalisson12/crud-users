<h1 align="center"> 🎥 Filmes na tela </h1>

<p align="center">
  API para castastro de filmes
</p>

## Tecnologias

 * Node JS
 
## Features
 * Adicionar um filme 
 * Listar filmes
 * Buscar por nome
 * Remover filmes
 
 ## Como utilizar


### Cadastrando filme na base de dados

**POST** `http://localhost:3000/filmes`

```json
// request
{
  "nome": 1
}
```
```json
// response
{
  "nome": "Harry Potter",
  
}
```

### Listando filmes cadastrados na base de dados

**GET** `http://localhost:3000/filmes`

```json
// response
[
 {
    
    "nome": "2",
    
  },
  {
    "nome": "Hulk",
    "quantidadeFilmes": 1
  }
]
```

// response 

```

```json
// response 
{
  "message": "Filme excluído com sucesso"
}
```



```