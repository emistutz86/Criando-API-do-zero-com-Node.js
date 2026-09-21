const express = require('express');
const app = express();

// Permite que nossa API entenda requisições no formato JSON
app.use(express.json());

// Clientes simulando um banco de dados enquanto a API ainda nao usa persistencia.
let clientes = [];

const camposCliente = [
  'nomeTitularAcao',
  'statusProcesso',
  'numeroProcesso',
  'assunto',
  'fone',
  'email',
  'statusPagamentos',
  'dataContrato',
  'valorContrato',
  'valorEntrada',
  'vencimento',
  'quantidadeParcelas',
  'valorParcela',
  'valorQuitado',
  'origemHonorarios',
  'parcelas'
];

function proximoId() {
  return clientes.reduce((maiorId, cliente) => Math.max(maiorId, cliente.id), 0) + 1;
}

function clienteComCamposPermitidos(dados, id) {
  const cliente = { id };

  camposCliente.forEach((campo) => {
    if (dados[campo] !== undefined) {
      cliente[campo] = dados[campo];
    }
  });

  return cliente;
}

function validarCliente(dados) {
  if (!dados.nomeTitularAcao || typeof dados.nomeTitularAcao !== 'string') {
    return 'O campo nomeTitularAcao e obrigatorio.';
  }

  const camposNumericos = [
    'valorContrato',
    'valorEntrada',
    'quantidadeParcelas',
    'valorParcela',
    'valorQuitado'
  ];

  for (const campo of camposNumericos) {
    if (dados[campo] !== undefined && (typeof dados[campo] !== 'number' || dados[campo] < 0)) {
      return `O campo ${campo} deve ser um numero maior ou igual a zero.`;
    }
  }

  if (dados.email !== undefined && typeof dados.email !== 'string') {
    return 'O campo email deve ser um texto.';
  }

  if (dados.parcelas !== undefined && !Array.isArray(dados.parcelas)) {
    return 'O campo parcelas deve ser uma lista de datas.';
  }

  return null;
}

// Rota GET: retorna todos os clientes
app.get('/clientes', (req, res) => {
  res.json(clientes);
});

app.get('/', (req, res) => {
  res.send('API de cadastro de clientes do escritorio de advocacia esta no ar!');
});

// Rota POST: cadastra um novo cliente
app.post('/clientes', (req, res) => {
  const erro = validarCliente(req.body);

  if (erro) {
    return res.status(400).json({ erro });
  }

  const novoCliente = clienteComCamposPermitidos(req.body, proximoId());
  clientes.push(novoCliente);

  res.status(201).json(novoCliente);
});

// Rota DELETE: remove um cliente pelo identificador
app.delete('/clientes/:id', (req, res) => {
  const idDaRota = Number.parseInt(req.params.id, 10);
  const index = clientes.findIndex((cliente) => cliente.id === idDaRota);

  if (index === -1) {
    return res.status(404).json({ erro: 'Cliente nao encontrado.' });
  }

  clientes.splice(index, 1);
  res.status(200).json({ mensagem: 'Cliente apagado com sucesso.' });
});

// Rota PUT: atualiza os dados enviados de um cliente existente
app.put('/clientes/:id', (req, res) => {
  const idDaRota = Number.parseInt(req.params.id, 10);
  const clienteEncontrado = clientes.find((cliente) => cliente.id === idDaRota);

  if (!clienteEncontrado) {
    return res.status(404).json({ erro: 'Cliente nao encontrado.' });
  }

  const dadosAtualizados = { ...clienteEncontrado, ...req.body };
  const erro = validarCliente(dadosAtualizados);

  if (erro) {
    return res.status(400).json({ erro });
  }

  Object.assign(clienteEncontrado, clienteComCamposPermitidos(req.body, idDaRota));
  res.status(200).json(clienteEncontrado);
});

const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});