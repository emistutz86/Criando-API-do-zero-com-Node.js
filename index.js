const express = require('express');
const app = express();

// Permite que nossa API entenda requisições no formato JSON
app.use(express.json());

// Lista de tarefas simulando um banco de dados
let tarefas = [
  { id: 1, titulo: "Aprender Node.js" },
  { id: 2, titulo: "Criar uma API" }
];

// Rota GET: Retorna todas as tarefas
app.get('/tarefas', (req, res) => {
  // req = Request (o que o usuário enviou)
  // res = Response (a nossa resposta)

  // Retornamos a lista de tarefas no formato JSON
  res.json(tarefas);
});

// Uma rota de teste
app.get('/', (req, res) => {
  res.send('Minha primeira API está no ar!');
});

// Rota POST: Cria uma nova tarefa
app.post('/tarefas', (req, res) => {
  // O req.body contém as informações que o usuário enviou para a API
  const tituloEnviado = req.body.titulo;

  // Criamos um novo objeto de tarefa
  const novaTarefa = {
    id: tarefas.length + 1, // Gera um ID sequencial (1, 2, 3...)
    titulo: tituloEnviado
  };

  // Adicionamos a nova tarefa na nossa lista
  tarefas.push(novaTarefa);

  // Respondemos que deu tudo certo (Status 201) e mostramos a tarefa criada
  res.status(201).json(novaTarefa);
});


// Rota DELETE: Apaga uma tarefa específica pelo ID
app.delete('/tarefas/:id', (req, res) => {
  // Pegamos o ID da URL (ex: /tarefas/1) e convertemos de texto para número inteiro
  const idDaRota = parseInt(req.params.id);

  // Procuramos em qual posição (índice) do array essa tarefa está
  const index = tarefas.findIndex(tarefa => tarefa.id === idDaRota);

  // Se o findIndex não achar nada, ele retorna -1. 
  // Nesse caso, devolvemos um erro 404 (Não Encontrado).
  if (index === -1) {
    return res.status(404).json({ erro: "Tarefa não encontrada." });
  }

  // O método splice remove itens do array. 
  // Dizemos para remover 1 item a partir da posição (index) encontrada.
  tarefas.splice(index, 1);

  // Devolvemos uma mensagem de sucesso
  res.status(200).json({ mensagem: "Tarefa apagada com sucesso!" });
});

// Rota PUT: Atualiza o título de uma tarefa existente
app.put('/tarefas/:id', (req, res) => {
  // 1. Pegamos o ID da URL e convertemos para número
  const idDaRota = parseInt(req.params.id);

  // 2. Pegamos o novo título que o usuário enviou no corpo da requisição (body)
  const novoTitulo = req.body.titulo;

  // 3. Procuramos a tarefa no nosso array
  const tarefaEncontrada = tarefas.find(tarefa => tarefa.id === idDaRota);

  // 4. Se não encontrar a tarefa, retornamos um erro 404
  if (!tarefaEncontrada) {
    return res.status(404).json({ erro: "Tarefa não encontrada." });
  }

  // 5. Se encontrou, atualizamos o título da tarefa
  tarefaEncontrada.titulo = novoTitulo;

  // 6. Retornamos a tarefa atualizada como resposta
  res.status(200).json(tarefaEncontrada);
});

const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});