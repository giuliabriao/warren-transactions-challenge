# <strong><p style="text-align: center">Transações Warren</p></strong>

## Esta aplicação permite que você tenha acesso às suas principais transações feitas na Warren 
<br>

### 🔎 <strong>Como rodar</strong>

Primeiramente, você deve clonar este repositório na sua máquina, com o seguinte comando no Git Bash ou terminal de sua escolha:

```shell
git clone https://github.com/giuliabriao/warren-transactions-challenge.git
```
Agora, instale as dependências do seu projeto escrevendo:

```shell
npm install
```

### 🔎 <strong>Acessando a aplicação</strong>

Escreva `npm start` no seu terminal e ele irá rodar sua aplicação localmente, permitindo que você interaja com os componentes na tela.

### 📌 <strong>Sobre o desafio</strong>

Este desafio consistia em implementar uma tela de lista de transações apresentando os principais dados relacionado a cada uma delas e ao clicar em uma transação será exibido um modal contendo os detalhes desta transação. O desafio deverá conter as seguintes funcionalidades:

- [x] Lista de transações agrupada por data
- [x] Filtro por título
- [x] Filtro por status
- [x] Modal contendo os detalhes da transação

Escolhi usar o `create-react-app` para minimizar a configuração inicial e investir mais tempo mergulhando na própria lógica do React.

Foi disponibilizado um mock de dados para usar na aplicação e a partir dele pude coletar as informações essenciais para colocar na tela.

`https://warren-transactions-api.herokuapp.com/api/transactions`

Busquei deixar o HTML mais semântico possível, além do design ser semelhante à página de Produtos da Warren, familiar aos olhos do cliente, com as cores referentes à identidade visual da empresa.

É possível buscar pelo título da transação, filtrar pelo seu status e também resetar as filtragens para visualizar novamente todas as transações. O modal tem uma barra de progresso, se a transação está com status "Solicitada", "Processando" e "Concluída", porém como na API essa informação vêm em inglês, criei uma função para traduzi-la e assim ficar mais coerente com o a lingua portuguesa que é a predominante na aplicação. Além disso, o modal também mostra quem transferiu e para onde, além do valor referente a essa transação. 

ReactJS foi a biblioteca escolhida para este desafio por ser simples, rápido, escalável e poder criar componentes reutilizáveis. Utilizei CSS-modules para que os classNames fossem definidos localmente, evitando conflitos entre estilos no caso de quando declarado globalmente, o que torna mais organizada a estilização.

### 🚀 <strong>Tecnologias</strong>
Foram utilizadas as seguintes tecnologias para a construção do projeto

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [NodeJS](https://nodejs.org/en/)
- [ReactJS](https://pt-br.reactjs.org/docs/getting-started.html)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
