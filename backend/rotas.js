const rotas = require("express").Router();

const conexao = require("./Config/conexao");

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });


rotas.get("/", (req, res) => {
  //criando uma query para selecionar todos os dados da tabela tb_tarefas
  let sql = "select * from tb_transferencias order by nomeCliente asc";
  // query é uma linha de comando do sql
  conexao.query(sql, (erro, rows, fields) => {
    if (erro) throw erro;
    res.json(rows);
  });
});

//rota para mostrar apenas uma tarefa de acordo com o seu id

rotas.get("/:id", (req, res) => {
  const { id } = req.params;
  let sql = "select * from tb_transferencias where id_transferencias = ?";
  conexao.query(sql, [id], (erro, rows, fields) => {
    if (erro) throw erro;
    res.json(rows[0]);
  });
});
//rota para deletar
rotas.delete("/:id", (req, res) => {
  const { id } = req.params;
  let sql = `delete from tb_transferencias where id_transferencias = '${id}'`;
  conexao.query(sql, (erro, rows, fields) => {
    if (erro) throw erro;
    res.json({ status: "Transferências excluída com sucesso" });
  });
});
//essa rota é para fazer uma inclusão na tabela de tarefas
// rotas com post são apra incluir
rotas.post("/", urlencodedParser, (req, res) => {
  const {nomeCliente, valor, contaCliente } = req.body;
  let sql = `insert into tb_transferencias(nomeCliente, valor, contaCliente) values('${nomeCliente}', '${valor}', '${contaCliente}')`;
  conexao.query(sql, (erro, rows, fields) => {
    if (erro) throw erro;
    res.json({ status: "Transferência incluída com sucesso" });
  });
});

//rotas para editar dados
rotas.put("/:id", urlencodedParser, (req, res) => {
  const { id } = req.params;
  const { nomeCliente, valor, contaCliente } = req.body;
  let sql = `update tb_transferencias set
 nomeCliente =  '${nomeCliente}', 
 valor = '${valor}', 
 contaCliente = '${contaCliente}'
    where id_transferencias = '${id}'`;
  conexao.query(sql, (erro, rows, fields) => {
    if (erro) throw erro;
    res.json({ status: "Transferência edita com sucesso" });
  });
});

module.exports = rotas;
