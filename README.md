# API de Cadastro de Clientes

API simples desenvolvida em Node.js e Express para cadastro de clientes de um escritorio de advocacia.

## 🚀 Tecnologias Utilizadas
* Node.js
* Express
* Ferramentas de requisição HTTP (Postman/Insomnia)

## 🛠️ Como instalar e rodar o projeto

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina.
2. Clone este repositório para o seu computador.
3. Abra o terminal na pasta do projeto e instale as dependências executando o comando: `npm install`
4. Inicie o servidor localmente com o comando: `node index.js`
5. A API estará acessível em: `http://localhost:3000`

## 🧪 Como testar as rotas
Na pasta `collections/`, importe a coleção JSON no Insomnia, Postman ou ferramenta similar.

### Passo a passo do cadastro

1. Inicie a API com `node index.js`.
2. Envie um `POST` para `http://localhost:3000/clientes` com os dados do cliente.
3. Liste os cadastros com `GET /clientes`.
4. Atualize um cadastro com `PUT /clientes/:id`.
5. Exclua um cadastro com `DELETE /clientes/:id`.

### Campos do cliente

Os campos foram baseados na aba `Planilha Financeiro Contratos`:

| Campo da API | Campo da planilha |
| --- | --- |
| `id` | Identificador |
| `nomeTitularAcao` | Nome do Titular da Ação |
| `statusProcesso` | Status Processo |
| `numeroProcesso` | N° do Processo |
| `assunto` | Assunto |
| `fone` | Fone |
| `email` | E-mail |
| `statusPagamentos` | Status Pagmentos |
| `dataContrato` | Data do Contrato |
| `valorContrato` | Valor do Contrato |
| `valorEntrada` | Valor da Entrada |
| `vencimento` | Vencimento |
| `quantidadeParcelas` | Quantidade Parcelas |
| `valorParcela` | Valor Parcela |
| `valorQuitado` | Valor Quitado |
| `origemHonorarios` | Origem Honorários |
| `parcelas` | Datas das parcelas 1 a 12 |

Exemplo de `POST`:

```json
{
	"nomeTitularAcao": "Maria da Silva",
	"statusProcesso": "Em andamento",
	"numeroProcesso": "0000000-00.0000.0.00.0000",
	"assunto": "Aposentadoria",
	"fone": "(00) 00000-0000",
	"email": "maria@example.com",
	"statusPagamentos": "Em dia",
	"dataContrato": "2026-09-21",
	"valorContrato": 12000,
	"valorEntrada": 2000,
	"vencimento": "2026-10-10",
	"quantidadeParcelas": 10,
	"valorParcela": 1000,
	"valorQuitado": 2000,
	"origemHonorarios": "Contrato",
	"parcelas": [
		{ "numero": 1, "data": "2026-10-10" },
		{ "numero": 2, "data": "2026-11-10" }
	]
}
```

O projeto ainda usa memória como armazenamento. Para uso real, o próximo passo é adicionar um banco de dados, autenticação, controle de acesso e proteção dos dados pessoais dos clientes.