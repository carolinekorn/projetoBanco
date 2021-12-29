const mysql = require('mysql')
const conexao = mysql.createConnection({
    host:"localhost",
    user:"Caroline",
    password:"Ck280682@",
    porta:"3306",
    database:"banco"
})

conexao.connect((erro) =>{
    if (erro) throw erro
    console.log('Estamos conectados com a base de dados')
})

module.exports = conexao