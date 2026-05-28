# EBAC Sports

Loja virtual de artigos esportivos desenvolvida em React. O catálogo é carregado de uma API externa; o usuário pode favoritar produtos e adicioná-los ao carrinho, com o resumo exibido no cabeçalho da página.

Projeto do curso EBAC, com gerenciamento de estado global via **Redux Toolkit**.

## Funcionalidades

- Listagem de produtos com imagem, nome e preço (formatado em Real)
- Adicionar produtos aos **favoritos** (toggle: adicionar ou remover)
- Adicionar produtos ao **carrinho**, com alerta se o item já estiver incluído
- **Header** com contagem de favoritos, quantidade de itens no carrinho e valor total

## Tecnologias

- [React](https://react.dev/) 18
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/) + [React Redux](https://react-redux.js.org/)
- [Styled Components](https://styled-components.com/)
- [Create React App](https://create-react-app.dev/)

## Gerenciamento de estado (Redux)

O estado global fica na store Redux, dividido em três slices:

| Slice       | Responsabilidade                                      |
| ----------- | ----------------------------------------------------- |
| `produtos`  | Lista da API, loading e erro (`fetchProdutos` async)  |
| `carrinho`  | Itens adicionados ao carrinho                         |
| `favoritos` | Itens marcados como favoritos                         |

Os componentes consomem o estado com `useAppSelector` e disparam ações com `useAppDispatch` (hooks tipados em `src/store/hooks.ts`).

```
src/
├── types/
│   └── produto.ts          # Tipo Produto
├── store/
│   ├── index.ts            # configureStore
│   ├── hooks.ts            # useAppDispatch / useAppSelector
│   └── slices/
│       ├── produtosSlice.ts
│       ├── carrinhoSlice.ts
│       └── favoritosSlice.ts
├── components/
│   ├── Header/             # Resumo do carrinho e favoritos
│   └── Produto/            # Card de um produto
├── containers/
│   └── Produtos.tsx        # Lista e lógica de dispatch
├── App.tsx                 # Bootstrap (fetch inicial)
└── index.tsx               # Provider do Redux
```

## API

Os produtos são obtidos em:

```
GET https://api-ebac.vercel.app/api/ebac_sports
```

Cada item retornado segue o formato:

```ts
{
  id: number
  nome: string
  preco: number
  imagem: string
}
```

## Como executar

Pré-requisitos: [Node.js](https://nodejs.org/) (versão LTS recomendada) e npm.

```bash
# Instalar dependências
npm install

# Ambiente de desenvolvimento (http://localhost:3000)
npm start

# Build de produção
npm run build

# Testes
npm test
```

## Scripts disponíveis

| Comando         | Descrição                          |
| --------------- | ---------------------------------- |
| `npm start`     | Servidor de desenvolvimento        |
| `npm run build` | Build otimizado para produção      |
| `npm test`      | Executa os testes (Jest + Testing Library) |
| `npm run eject` | Expõe a config do CRA (irreversível) |

## Estrutura de pastas (resumo)

```
henrique_ebac_sports/
├── public/
├── src/
│   ├── assets/             # Imagens estáticas (ex.: ícone do carrinho)
│   ├── components/
│   ├── containers/
│   ├── store/
│   ├── styles/
│   └── types/
├── package.json
└── README.md
```
