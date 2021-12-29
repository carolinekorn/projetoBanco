require('./Config/conexao')

const express = require('express')
const app = express()
const porta = 3000
//utilizar arquivos no formato json
app.use(express.json())
//criando variável para armazenar todas as rotas definidas no arquivo rotas.js
const rotasTransferencia = require('./rotas')
app.use('/banco', rotasTransferencia)


app.listen(porta,() =>{
    console.log('servidor está rodando')
})
