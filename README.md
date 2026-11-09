# 🚀 Bem-vindo(a) ao meu laboratório de prática!

Olá! Que bom ter você por aqui. 👋

Este é um projeto novo e ainda em desenvolvimento (*WIP — Work in Progress*). Criei este repositório para praticar programação, explorar tecnologias e aprofundar meus conhecimentos em desenvolvimento de software.

## 🔎 A visão de QA neste projeto

Como profissional de **Quality Assurance (QA) Pleno**, acredito que entender como um software é construído ajuda a promover qualidade desde as primeiras etapas do desenvolvimento.

Este projeto também é uma oportunidade de fortalecer a mentalidade de **Shift-Left Testing**: considerar a qualidade desde o início, em vez de deixá-la apenas para o final. Ao desenvolver uma API em Node.js, posso ampliar minha visão sobre:

- Arquitetura de software e boas práticas, como Clean Code;
- Identificação de cenários de erro e prevenção de problemas;
- Testabilidade da aplicação desde a sua concepção.

## 🚧 Status e próximos passos

O projeto está em construção e evoluirá gradualmente. No momento, o foco é desenvolver uma API e, após essa etapa, criar testes automatizados com **Playwright** para validar seus principais fluxos e comportamentos.

- [x] Estrutura inicial do projeto e configurações básicas;
- [x] Implementação inicial da API e de suas rotas principais;
- [ ] Testes automatizados com Playwright;
- [ ] Documentação do contrato da API com Swagger/OpenAPI;
- [ ] Pipeline de CI/CD com GitHub Actions para executar verificações automaticamente.

## 📌 Sobre a API

API desenvolvida em Node.js e Express para cadastro de clientes de um escritório de advocacia.

## 🚀 Tecnologias e ferramentas

- Node.js
- Express
- Postman/Insomnia para requisições HTTP
- Playwright (planejado para os testes automatizados)

## 🛠️ Como instalar e rodar o projeto

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina.
2. Clone este repositório para o seu computador.
3. Abra o terminal na pasta do projeto e instale as dependências executando: `npm install`.
4. Inicie o servidor localmente com: `node index.js`.
5. A API estará acessível em: `http://localhost:3000`.

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

O projeto ainda usa memória como armazenamento. Para uso real, os próximos passos incluem adicionar um banco de dados, autenticação, controle de acesso e proteção dos dados pessoais dos clientes.

Este repositório faz parte da minha jornada de aprendizado. Sugestões e feedbacks são muito bem-vindos — obrigada(o) pela visita!